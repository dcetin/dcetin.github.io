// Client-side behavior for person path selection in Plotly graph

(function () {
  function wireSelectionBehavior(gd) {
    if (!gd || gd.__selectionBehaviorWired) return;
    gd.__selectionBehaviorWired = true;
    const selectedTraceName = "__selected_path__";
    const hoverTraceName = "__hover_path__";
    let lastPointClickTs = 0;

    function clearTraceByName(name) {
      const index = gd.data.findIndex((t) => t.name === name);
      if (index !== -1) {
        Plotly.deleteTraces(gd, [index]);
      }
    }

    function clearSelectedPath() {
      clearTraceByName(selectedTraceName);
    }

    function clearHoverPath() {
      clearTraceByName(hoverTraceName);
    }

    function drawPath(xs, ys, personName, color, traceName, isHover) {
      // Ensure we never have more than 1 of each type
      if (isHover) {
        clearHoverPath();
      } else {
        clearHoverPath();
        clearSelectedPath();
      }

      const trace = {
        x: xs,
        y: ys,
        mode: "lines+markers",
        type: "scatter",
        name: traceName,
        hoverinfo: "skip",
        line: { color: color, width: 3 },
        marker: { color: color, size: 8 },
        showlegend: false,
      };

      Plotly.addTraces(gd, [trace]);
    }

    function getPointsForPerson(personName) {
      // Use pre-calculated indices if available (much faster)
      if (window.personIndices && window.personIndices[personName]) {
        const indices = window.personIndices[personName];
        const allPoints = indices.map(({ trace_idx, point_idx }) => {
          const trace = gd.data[trace_idx];
          return { x: trace.x[point_idx], y: trace.y[point_idx] };
        });
        return allPoints;
      }

      // Fallback: search through visible traces (slower)
      const allPoints = [];
      gd.data.forEach((trace) => {
        const isVisible = trace.visible === true || trace.visible === undefined;
        if (!isVisible || trace.name === selectedTraceName || trace.name === hoverTraceName || !trace.customdata) return;
        for (let i = 0; i < trace.customdata.length; i += 1) {
          if (trace.customdata[i] === personName) {
            allPoints.push({ x: trace.x[i], y: trace.y[i] });
          }
        }
      });
      allPoints.sort((a, b) => a.x - b.x);
      return allPoints;
    }

    gd.on("plotly_hover", function (eventData) {
      if (!eventData || !eventData.points || !eventData.points.length) return;
      const hovered = eventData.points[0];
      const pointNumber = hovered.pointNumber;
      const hoveredTrace = gd.data[hovered.curveNumber];
      if (!hoveredTrace || !hoveredTrace.customdata || hoveredTrace.customdata[pointNumber] == null) {
        return;
      }
      const personName = hoveredTrace.customdata[pointNumber];
      const allPoints = getPointsForPerson(personName);

      if (allPoints.length) {
        drawPath(
          allPoints.map((p) => p.x),
          allPoints.map((p) => p.y),
          personName,
          "#cccccc",
          hoverTraceName,
          true
        );
      }
    });

    gd.on("plotly_unhover", function () {
      clearHoverPath();
    });

    gd.on("plotly_click", function (eventData) {
      lastPointClickTs = Date.now();
      if (!eventData || !eventData.points || !eventData.points.length) return;
      const clicked = eventData.points[0];
      const pointNumber = clicked.pointNumber;
      const clickedTrace = gd.data[clicked.curveNumber];
      if (!clickedTrace || !clickedTrace.customdata || clickedTrace.customdata[pointNumber] == null) {
        return;
      }
      const selectedName = clickedTrace.customdata[pointNumber];
      const allPoints = getPointsForPerson(selectedName);

      if (!allPoints.length) {
        clearSelectedPath();
        return;
      }

      drawPath(
        allPoints.map((p) => p.x),
        allPoints.map((p) => p.y),
        selectedName,
        "#000000",
        selectedTraceName,
        false
      );
    });

    gd.addEventListener("click", function () {
      setTimeout(function () {
        if (Date.now() - lastPointClickTs > 120) {
          clearSelectedPath();
        }
      }, 0);
    });

    gd.__clearSelectedPath = clearSelectedPath;
  }

  function init() {
    const plots = document.querySelectorAll(".plotly-graph-div");
    plots.forEach(wireSelectionBehavior);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
