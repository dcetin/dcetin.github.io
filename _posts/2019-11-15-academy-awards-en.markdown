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
        <iframe class="iframe-responsive" src="/../assets/posts/academy-awards/academy-awards.html" width="2000" height="550" frameborder="0"></iframe>
    </div>
</div>

{% comment %}
{% include academy-awards.html %}
{% endcomment %}

Dataset and code to generate the plots can be found [here](https://github.com/dcetin/academy-awards). Plot is best viewed (and interacted with) in desktop. If the browser somehow does not display it correctly, you can run the notebook in the repository instead.

I used [Plotly Python](https://plot.ly/python/) to generate the plot. You can select the dataset via the buttons on the left side and toggle shown data by clicking on the legend entries on the right side. Hovering over the scatter plot will show the details of the data entries.

# More Plots!

You can also [run the notebook on Colab](https://colab.research.google.com/github/dcetin/academy-awards/blob/master/academy_awards.ipynb) to draw trajectories for specific people. I have added a few examples below to illustrate.

## Academy just doesn't recognize female directors

<div class="fullscreen-wrapper">
    <div class="wide-content">
        <img src="/../assets/posts/academy-awards/female_dirs.png">
    </div>
</div>

## Each year a nomination for Meryl Streep

<div class="fullscreen-wrapper">
    <div class="wide-content">
        <img src="/../assets/posts/academy-awards/streep.png">
    </div>
</div>

## Clint Eastwood: 89 years and still going strong

<div class="fullscreen-wrapper">
    <div class="wide-content">
        <img src="/../assets/posts/academy-awards/eastwood.png">
    </div>
</div>

## I still can't believe Day-Lewis is retired

<div class="fullscreen-wrapper">
    <div class="wide-content">
        <img src="/../assets/posts/academy-awards/day-lewis.png">
    </div>
</div>