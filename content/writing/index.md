---
layout: layouts/base.njk
eleventyNavigation:
  key: Publications
  order: 3
---
# Publications


Region of Attraction Estimation for Free-Floating Systems under Time-Varying LQR Control
RoA Estimation for Spacecraft {% marginnote  "Awarded the Marc Pélegrin's Best Paper Award" %}
{% bibtex %}
@INPROCEEDINGS{CEAS-GNC-2024-012,
    author = {Shala, Lasse and Vyas, Shubham and Ben-Larbi, Mohamed Khalil and Kumar, Shivesh and Stoll, Enrico},
    title = {Region of Attraction Estimation for Free-Floating Systems under Time-Varying LQR Control},
    booktitle = {Proceedings of the 2024 {CEAS EuroGNC} conference},
    address = {Bristol, UK},
    month = jun,
    year = {2024},
    note = {CEAS-GNC-2024-012}
}
{% endbibtex %}

Robust Cooptimization

{% bibtex %}
@inproceedings{Girlanda_2024,
   title={Robust Co-Design of Canonical Underactuated Systems for Increased Certifiable Stability},
   url={http://dx.doi.org/10.1109/ICRA57147.2024.10611645},
   DOI={10.1109/icra57147.2024.10611645},
   booktitle={2024 IEEE International Conference on Robotics and Automation (ICRA)},
   publisher={IEEE},
   author={Girlanda, Federico and Shala, Lasse and Kumar, Shivesh and Kirchner, Frank},
   year={2024},
   month=may, pages={13271–13277} }
{% endbibtex %}

LQR for Free-Floating Systems
{% bibtex %}
@INPROCEEDINGS{freefloating,
author={Vyas, Shubham and Shala, Lasse and Bredenbeck, Lasse},
year={2023},
booktitle={In 17th Symposium on Advanced Space Technologies in Robotics and Automation, (ASTRA-2023)},
title={LQR for Free-Floating Robots: Theory and Experiments},}
}
{% endbibtex %}

Open Source Acrobot and Pendubot Platform
{% bibtex %}
@ARTICLE{10375556,
  author={Wiebe, Felix and Kumar, Shivesh and Shala, Lasse J. and Vyas, Shubham and Javadi, Mahdi and Kirchner, Frank},
  journal={IEEE Robotics & Automation Magazine},
  title={Open Source Dual-Purpose Acrobot and Pendubot Platform: Benchmarking Control Algorithms for Underactuated Robotics},
  year={2023},
  volume={},
  number={},
  pages={2-13},
  keywords={Robots;Trajectory;Hardware;Actuators;Optimization;Heuristic algorithms;Mathematical models},
  doi={10.1109/MRA.2023.3341257}}
{% endbibtex %}

Trajectory Stabilization for Robotic Active Debris Removal
{% bibtex %}
@article{VYAS20232845,
title = {Post-capture detumble trajectory stabilization for robotic active debris removal},
journal = {Advances in Space Research},
volume = {72},
number = {7},
pages = {2845-2859},
year = {2023},
note = {Space Environment Management and Space Sustainability},
issn = {0273-1177},
doi = {https://doi.org/10.1016/j.asr.2022.09.033},
url = {https://www.sciencedirect.com/science/article/pii/S0273117722008742},
author = {Shubham Vyas and Lasse Maywald and Shivesh Kumar and Marko Jankovic and Andreas Mueller and Frank Kirchner},
keywords = {Active debris removal, Space robotics, Trajectory stabilization},
abstract = {Recent increase in space debris combined with the increase in the number of satellites launched has created an increased risk of collisions. The effects of the increased risk can be seen in the form of an increased number of near misses in recent years. The use of robotic manipulators has been suggested for Active Debris Removal (ADR) to reduce the risk of potential future collisions that generate more debris in the orbits around Earth. Compared to other ADR methods, robotic manipulators provide increased versatility as they can be reused for On-Orbit Servicing as well as On-Orbit Assembly missions. A robotic ADR operation consists of three phases: Approach, Capture, and Detumble. This paper provides a method for performing feedback-based stabilization of post-capture detumble trajectories of the chaser-debris system. The approach presented here uses Time-Varying Linear Quadratic Regulator (TVLQR) for stabilization along the detumble trajectory. The contributions of this paper are as follows: A quaternion-based linearization method for multibody systems with a free-floating base, TVLQR for stabilizing the optimal detumble trajectory, and a probabilistic Region of Attraction analysis of the resulting closed-loop system. The estimated Region of Attraction could serve as the goal for the capture controller thus allowing for controller composition through ADR phases while guaranteeing stability and successful detumble.}
}
{% endbibtex %}


Analytic RoA Estimation
{% bibtex %}
@inproceedings{Gross_2022,
   title={Analytic Estimation of Region of Attraction of an LQR Controller for Torque Limited Simple Pendulum},
   url={http://dx.doi.org/10.1109/CDC51059.2022.9992856},
   DOI={10.1109/cdc51059.2022.9992856},
   booktitle={2022 IEEE 61st Conference on Decision and Control (CDC)},
   publisher={IEEE},
   author={Gross, Lukas and Maywald, Lasse and Kumar, Shivesh and Kirchner, Frank and Luth, Christoph},
   year={2022},
   month=dec }
{% endbibtex %}

Design and Controller Cooptimization
{% bibtex %}
@INPROCEEDINGS{9981825,
  author={Maywald, Lasse Jenning and Wiebe, Felix and Kumar, Shivesh and Javadi, Mahdi and Kirchner, Frank},
  booktitle={2022 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  title={Co-optimization of Acrobot Design and Controller for Increased Certifiable Stability},
  year={2022},
  volume={},
  number={},
  pages={2636-2641},
  keywords={Regulators;Design methodology;Estimation;Linear programming;Stability analysis;Trajectory;Nonlinear dynamical systems},
  doi={10.1109/IROS47612.2022.9981825}}
{% endbibtex %}


RealAIGym
{% bibtex %}
@INPROCEEDINGS{realaigym,
	author={Wiebe, Felix and Vyas, Shubham and Shala, Lasse Jenning and Kumar, Shivesh and Kirchner, Frank},
booktitle={Robotics: Science and System Workshop Mind the Gap: Opportunities and Challenges in the Transition Between Research and Industry},
title={RealAIGym: Education and Research Platform for Studying Athletic Intelligence},
year={2022},
url={https://realworldrobots.github.io/assets/files/Real_AI_Gym.pdf}}
{% endbibtex %}

3D Printing in Space
{% bibtex %}
@ARTICLE{10.3389/frspt.2022.879542,

AUTHOR={Jonckers, Declan and Tauscher, Oliver and Thakur, Aditya R. and Maywald, Lasse},

TITLE={Additive Manufacturing of Large Structures Using Free-Flying Satellites},

JOURNAL={Frontiers in Space Technologies},

VOLUME={3},

YEAR={2022},

URL={https://www.frontiersin.org/articles/10.3389/frspt.2022.879542},

DOI={10.3389/frspt.2022.879542},

ISSN={2673-5075},

ABSTRACT={In-Space Manufacturing (ISM) is being investigated as a method for producing larger, cheaper, and more capable spacecraft and space stations. One of the most promising manufacturing techniques is additive manufacturing (AM) due to its inherent flexibility and low waste. The feasibility of a free-flying small spacecraft to manufacture large structures using a robotic arm with an AM end effector has been examined. These large structures would aid the construction of a large space station or spacecraft. Using the Experimental Lab for Proximity Operations and Space Situational Awareness (ELISSA) at the Institute of Space Systems at TU Braunschweig, a process has been designed and tested which is capable of producing structures with arbitrary length. This process was demonstrated by manufacturing support free truss elements of unlimited length using a free-floating mobile robot. Avenues for further extending the process to produce structures of any size in 3D space are discussed.}
}
{% endbibtex %}


RoA Estimation for Spacecraft {% marginnote  'My Masters Thesis' %}
{% bibtex %}
@misc{shala2024region,
      title={Region of Attraction Estimation for Free-Floating Systems under Time-Varying LQR Control},
      author={Lasse Shala and Shubham Vyas and Mohamed Khalil Ben-Larbi and Shivesh Kumar and Enrico Stoll},
      year={2024},
      eprint={2405.06726},
      archivePrefix={arXiv},
      primaryClass={eess.SY}
}
{% endbibtex %}
