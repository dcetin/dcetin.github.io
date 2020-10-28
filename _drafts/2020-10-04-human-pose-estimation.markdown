---
layout: post
title: "Human Pose Estimation"
date: 2020-10-04 00:00:00 +0300
lang: en
author: "Doruk Çetin"
categories: en blog
slug: human-pose-estimation
permalink: /:categories/:title
image: "human-pose-estimation-1.jpg"
excerpt: "A collection of papers that illustrate the progression in the human pose estimation task."
---
<head>
<style>
    /* table { border-collapse:separate; border-spacing: 0 2pt; } */
    td + td { white-space: nowrap; }
    tr:nth-child(2n + 1) td { background-color: #ffffff; }
    tr:nth-child(2n + 2) td { background-color: #f5f5f5; }
    table td { padding: 0.1% 1%; }
    table th { padding-bottom: 0.1%; padding-top: 0.1%; }
    /* a { color: inherit; } */
</style>
</head>

> A collection of papers that illustrate the progression in the human pose estimation task.

Links to projects webpages (:earth_africa:) and code implementations (:computer:) are provided when applicable, alongside the links to papers themselves. Focus is on monocular and 3D scenarios. The main concept is similar to that of many preceding write-ups, but I also provided the papers with one-sentence explanations that can be viewed by hovering over the names of the papers. These explanations reflect the novelties of each paper and most often summarize what can be found in paper abstracts, although exact wordings reflect my point of view. Any feedback is welcome!

<div class="fullscreen-wrapper">
<div class="wider-content">

<h1>Papers</h1>

{% assign years = (2010..2020) | reverse %}
{% for year in years %}
{% assign papergroup = site.data.hpe.hpe | where: "year", year %}
{% assign papergroup = papergroup | sort: "venue" %}
{% if papergroup != blank %}
<table>
<thead>
    <tr>
        <th style="text-align: center;" colspan="4">{{ year }}</th>
    </tr>
    <tr>
        <th>Paper</th>
        <th>Authors</th>
        <th>Venue</th>
        <th>Links</th>
    </tr>
</thead>
<tbody>
{% for paper in papergroup %}
<tr>
{% if paper.comment and paper.comment != "" %}
    <td><a data-tooltip="{{ paper.comment }}" data-tooltip-position="right" href="{{ paper.url }}">{{ paper.title }}</a></td>
{% else %}
    <td><a href="{{ paper.url }}">{{ paper.title }}</a></td>
{% endif %}
<td>{{ paper.author }}</td>
<td>{{ paper.venue }} <!-- {{ paper.year }} --> </td>
<td>
<!-- {% if paper.url and paper.url != "" %} <a href="{{ paper.url }}">:page_facing_up:</a> {% endif %} -->
{% if paper.url_project and paper.url_project != "" %} <a href="{{ paper.url_project }}">:earth_africa:</a> {% endif %}
{% if paper.url_code and paper.url_code != "" %} <a href="{{ paper.url_code }}">:computer:</a> {% endif %}
</td>
</tr>
<!-- {% if paper.comment and paper.comment != "" %} <tr><td colspan="4">{{ paper.comment }}</td></tr> {% endif %} -->
{% endfor %}
{% endif %}
{% endfor %}
</tbody>
</table>

<h1>Related Work</h1>

<table>
<thead>
    <tr>
        <th>Paper</th>
        <th>Authors</th>
        <th>Venue</th>
        <th>Links</th>
    </tr>
</thead>
<tbody>
{% assign papergroup = site.data.hpe.related %}
{% assign papergroup = papergroup | sort: "year" | reverse %}
{% for paper in papergroup %}
{% if paper.year != "0" %}
<tr>
{% if paper.comment and paper.comment != "" %}
    <td><a data-tooltip="{{ paper.comment }}" data-tooltip-position="right" href="{{ paper.url }}">{{ paper.title }}</a></td>
{% else %}
    <td><a href="{{ paper.url }}">{{ paper.title }}</a></td>
{% endif %}
<td>{{ paper.author }}</td>
<td>{{ paper.venue }} {{ paper.year }}</td>
<td>
{% if paper.url_project and paper.url_project != "" %} <a href="{{ paper.url_project }}">:earth_africa:</a> {% endif %}
{% if paper.url_code and paper.url_code != "" %} <a href="{{ paper.url_code }}">:computer:</a> {% endif %}
</td>
</tr>
{% endif %}
{% endfor %}   
</tbody>
</table>
