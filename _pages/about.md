---
layout: landing
permalink: /
title: Zirui Peng
description: Zirui Peng is an undergraduate at Peking University studying physics and artificial intelligence. His research focuses on neural network mechanisms and learning dynamics.
redirect_from:
  - /about/
  - /about.html
---

<main id="main-content">
  <section class="intro" id="about" aria-labelledby="intro-title">
    <div class="intro-text">
      <h1 id="intro-title">Zirui Peng</h1>
      <p>I am an undergraduate at <a href="https://www.pku.edu.cn/">Peking University</a>, majoring in Physics and pursuing a double major in Artificial Intelligence.</p>
      <p>I work at the intersection of physics and AI, with a particular interest in how neural networks learn.</p>
      <p class="intro-links"><a href="{{ '/files/Zirui_Peng_CV.pdf' | relative_url }}">CV (PDF)</a><a href="mailto:fredpengphy@stu.pku.edu.cn">Email</a><a href="https://github.com/fredpengpkuphy">GitHub</a></p>
    </div>
    <figure class="profile-photo"><img src="{{ '/images/zirui-peng-mit.jpg' | relative_url }}" alt="Zirui Peng at MIT" width="1800" height="1350"><figcaption>At MIT, summer 2026</figcaption></figure>
  </section>

  <section class="content-section" id="research" aria-labelledby="research-title">
    <div class="section-heading"><h2 id="research-title">Research interests</h2><span>01</span></div>
    <div class="research-intro">
      <p>My research focuses on understanding neural network mechanisms and developing algorithms guided by first principles to improve model performance.</p>
      <p>For each topic, I begin by developing a deep, well-rounded understanding of the problem, which clarifies its underlying principles and guides the design of new algorithms. I usually develop controllable and insightful toy models that isolate individual components of larger models, allowing me to understand the key factors that shape model behavior.</p>
      <p>My current interests are listed below, and I am open to many other research directions:</p>
    </div>
    <div class="interest-grid">
      <div class="interest"><h3>Neural Scaling Law</h3><ul><li>Understanding how factors such as training time, model width and depth, and dataset size shape neural scaling laws.</li><li>Exploring algorithms that improve neural scaling efficiency and parameter utilization.</li></ul></div>
      <div class="interest"><h3>Optimization Dynamics</h3><ul><li>Analyzing phenomena such as the edge of stability to better understand complex, high-dimensional loss landscapes.</li><li>Using central flow and related mathematical tools to build clear models of optimization trajectories during neural network training.</li></ul></div>
      <div class="interest"><h3>Generative Models</h3><ul><li>Investigating whether diffusion and autoregressive models exhibit different implicit biases toward physical laws in image and video generation.</li><li>Developing better generative models that explicitly incorporate physical laws and constraints as inductive biases.</li></ul></div>
      <div class="interest"><h3>Other Topics</h3><ul><li>Exploring a broader range of topics, including mechanistic interpretability, activation functions, meta-learning, and large language model systems.</li></ul></div>
    </div>
    <p class="current-project"><strong>Current project:</strong> Understanding how dataset size, model sparsity, and network nonlinearity affect ensemble averaging and depth utilization, and exploring more efficient ways to use model depth, including depth mixture-of-experts architectures.</p>
  </section>

  <section class="content-section" id="publications" aria-labelledby="publications-title">
    <div class="section-heading"><h2 id="publications-title">Publications</h2><span>02</span></div>
    <article class="publication">
      <h3>Emergent Inverse-Depth Scaling From Nonlinearity In Attention</h3>
      <p class="authors"><strong>Zirui Peng</strong>, Yizhou Liu, Ziming Liu, Jeff Gore</p>
      <p>We compare linear and nonlinear attention in controlled in-context learning tasks with varied data spectra. Nonlinear attention focuses on relevant tokens, allowing strong and weak spectral directions to be learned in parallel and producing inverse-depth loss scaling across the tested spectra. A layerwise error analysis explains both the loss floor and continued improvement with depth.</p>
      <p class="publication-links">2026 preprint, under review · <a href="https://arxiv.org/abs/2610.11063">arXiv</a> · <a href="https://arxiv.org/pdf/2610.11063">PDF</a></p>
      <figure class="publication-figure"><a href="{{ '/images/figure1-attention.png' | relative_url }}" aria-label="Open Figure 1 from the inverse-depth scaling paper at full size"><img src="{{ '/images/figure1-attention.png' | relative_url }}" alt="Figure 1 compares loss scaling with depth for linear and nonlinear attention across easy and difficult tasks" width="2292" height="1288" loading="lazy"></a><figcaption>Figure 1. Nonlinear attention yields inverse-depth scaling across the tested data spectra. Click to enlarge.</figcaption></figure>
    </article>
    <article class="publication">
      <h3>Rethinking Activation Functions: Reducing Bias Can Improve Learning</h3>
      <p class="authors"><strong>Zirui Peng</strong>, Heyi Zheng, Ziming Liu</p>
      <p>We study how the nonzero mean of common activation functions affects learning. Reducing this activation bias slows early loss reduction but improves final performance. We link the reversal to overshoot, less smooth trajectories, transient use of bias-encoded information, and sharper loss landscapes; similar late-stage gains appear in larger vision and language models.</p>
      <p class="publication-links">2026 preprint, under review · <a href="https://arxiv.org/abs/2610.14500">arXiv</a> · <a href="https://arxiv.org/pdf/2610.14500">PDF</a></p>
      <figure class="publication-figure"><a href="{{ '/images/figure1-activation-bias.png' | relative_url }}" aria-label="Open Figure 1 from the activation bias paper at full size"><img src="{{ '/images/figure1-activation-bias.png' | relative_url }}" alt="Figure 1 shows how reducing activation bias changes output distributions, learning curves, hidden-state trajectories, and loss landscapes" width="2600" height="853" loading="lazy"></a><figcaption>Figure 1. Overview of activation bias and its effects on learning. Click to enlarge.</figcaption></figure>
    </article>
  </section>

  <section class="content-section" id="background" aria-labelledby="background-title">
    <div class="section-heading"><h2 id="background-title">Background</h2><span>03</span></div>
    <div class="entry"><div class="entry-date">Jul–Aug 2026</div><div><h3>Research Intern, MIT Department of Physics</h3><p>Worked with Prof. Jeff Gore on nonlinear attention and depth scaling.</p></div></div>
    <div class="entry"><div class="entry-date">Sep 2024–present</div><div><h3>B.S. in Physics, Peking University</h3><p>Double major in Artificial Intelligence. 2024 School-level Excellent Student; recipient of the 2024 Qin Wanshun Jin Yunhui scholarship.</p></div></div>
  </section>

  <section class="content-section" id="projects" aria-labelledby="projects-title">
    <div class="section-heading"><h2 id="projects-title">Other projects</h2><span>04</span></div>
    <article class="project"><div class="entry-date">Jun 2025–Feb 2026</div><div><h3>Learning to Decompose Questions for Fine-Grained Evidence Selection in RAG</h3><p>Paper under review at AAAI. Developed a query decomposition and automated evidence selection pipeline for multimodal question answering, addressing cases where whole-query matching misses localized evidence. Optimized decomposition prompts during end-to-end training to improve benchmark performance.</p></div></article>
    <article class="project"><div class="entry-date">Jul–Aug 2026</div><div><h3>NanoGPT Observable Explorer</h3><p>Built a web platform to investigate the relationship between model observables and training dynamics. Trained nanoGPT under varied experimental setups, measured observables, and compared results across runs.</p><p><a href="https://observable-explorer.com/">Visit Observable Explorer</a></p></div></article>
  </section>

  <section class="content-section contact" id="contact" aria-labelledby="contact-title"><div class="section-heading"><h2 id="contact-title">Contact</h2><span>05</span></div><p>You can reach me at <a href="mailto:fredpengphy@stu.pku.edu.cn">fredpengphy@stu.pku.edu.cn</a> or <a href="mailto:zrpeng@mit.edu">zrpeng@mit.edu</a>.</p></section>
</main>
