---
layout: post
title: "Academy Awards"
date: 2019-11-15 00:00:00 +0300
lang: en
author: "Doruk Çetin"
categories: en blog
slug: academy-awards
permalink: /:categories/:title
image: "academy-awards-1.jpg"
excerpt: ""
---
I have been curious to see if there is any correlation between the ages of award winners in comparison to their respective nominees in well-known award ceremonies. I wanted to initially try my chance with Academy Awards as there is plenty of easily accessible data, but this same idea could be easily applied to many other competitions. The interactive plot below compares the ages of nominees and winners of the Academy Awards for three categories.

<div class="fullscreen-wrapper">
    <div class="fullscreen-content">
        <iframe class="iframe-responsive" src="/../assets/posts/academy-awards/academy-awards.html" width="2000" height="710" frameborder="0"></iframe>
    </div>
</div>

{% comment %}
{% include academy-awards.html %}
{% endcomment %}

Dataset and code to generate the plots can be found [here](https://github.com/dcetin/academy-awards). Plot is best viewed (and interacted with) in desktop.

I used [Plotly Python](https://plot.ly/python/) to generate the plot. You can select the dataset via the buttons on the left side and toggle shown data by clicking on the legend entries on the right side. Hovering over the scatter plot will show the details of the data entries.
