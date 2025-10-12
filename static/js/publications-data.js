// 出版物数据配置
const PUBLICATIONS_DATA = {
  "2026": [
    {
      id: "2026-1",
      title: "IGen: Redefining long-term event prediction with iterative generation and dynamic balancing",
      authors: "Yuxin Zhang, Yan Wang, Songlin Zhai, Yongrui Chen, Shenyu Zhang, Yuan Meng, Zhihua Chai, Sheng Bi, Guilin Qi",
      venue: "Information Processing & Management",
      level: "JCR-Q1/CCF-B",
      link: "https://www.sciencedirect.com/science/article/pii/S0306457325001505"
    }
  ],
  "2025": [
    {
      id: "2025-14",
      title: "K-DeCore: Facilitating Knowledge Transfer in Continual Structured Knowledge Reasoning via Knowledge Decoupling",
      authors: "Yongrui Chen, Yi Huang, Yunchang Liu, Shenyu Zhang, Junhao He, Tongtong Wu, Guilin Qi, Tianxing Wu",
      venue: "NeurIPS 2025",
      level: "CCF-A",
      link: "https://arxiv.org/abs/2509.16929"
    },
    {
      id: "2025-13",
      title: "LLM-CG: Large language model-enhanced constraint graph for distantly supervised relation extraction",
      authors: "Bao Liu, Guilin Qi",
      venue: "Neurocomputing",
      level: "JCR-Q1/CCF-C",
      link: "https://www.sciencedirect.com/science/article/pii/S0925231225020983"
    },
    {
      id: "2025-12",
      title: "Question answering over spatio-temporal knowledge graph",
      authors: "Xinbang Dai, Huiying Li, Nan Hu, Yongrui Chen, Rihui Jin, Huikang Hu, Guilin Qi",
      venue: "Knowledge-Based Systems",
      level: "JCR-Q1/CCF-C",
      link: "https://www.sciencedirect.com/science/article/pii/S0950705125013516"
    },
    {
      id: "2025-11",
      title: "Continual Speech Learning with Fused Speech Features",
      authors: "Guitao Wang, Jinming Zhao, Hao Yang, Guilin Qi, Tongtong Wu, Gholamreza Haffari",
      venue: "Interspeech 2025",
      level: "CCF-C",
      link: "https://arxiv.org/abs/2506.01496"
    },
    {
      id: "2025-10",
      title: "Forget the Token and Pixel: Rethinking Gradient Ascent for Concept Unlearning in Multimodal Generative Models",
      authors: "Jiaqi Li, Chuanyi Zhang, Miaozeng Du, Hui Zhang, Yongrui Chen, Qianshan Wei, Junfeng Fang, Ruipeng Wang, Sheng Bi, Guilin Qi",
      venue: "ACL 2025 Findings",
      level: "CCF-A",
      link: "https://aclanthology.org/2025.findings-acl.630/"
    },
    {
      id: "2025-9",
      title: "Open-World Attribute Mining for E-Commerce Products with Multimodal Self-Correction Instruction Tuning",
      authors: "Jiaqi Li, Yanming Li, Xiaoli Shen, Chuanyi Zhang, Guilin Qi, Sheng Bi",
      venue: "ACL 2025",
      level: "CCF-A",
      link: "https://aclanthology.org/2025.acl-long.85/"
    },
    {
      id: "2025-8",
      title: "Parameter-aware contrastive knowledge editing: Tracing and rectifying based on critical transmission paths",
      authors: "Songlin Zhai, Yuan Meng, Yuxin Zhang, Guilin Qi",
      venue: "ACL 2025",
      level: "CCF-A",
      link: "https://aclanthology.org/2025.acl-long.1367/"
    },
    {
      id: "2025-7",
      title: "Can LLMs Evaluate Complex Attribution in QA? Automatic Benchmarking using Knowledge Graphs",
      authors: "Nan Hu, Jiaoyan Chen, Yike Wu, Guilin Qi, Hongru Wang, Sheng Bi, Yongrui Chen, Tongtong Wu, Jeff Z Pan",
      venue: "ACL 2025",
      level: "CCF-A",
      link: "https://research.manchester.ac.uk/en/publications/can-llms-evaluate-complex-attribution-in-qa-automatic-benchmarkin"
    },
    {
      id: "2025-6",
      title: "Peripheral Memory for LLMs: Integration of Sequential Memory Banks with Adaptive Querying",
      authors: "Songlin Zhai, Yuan Meng, Yongrui Chen, Yiwei Wang, Guilin Qi",
      venue: "ICML 2025",
      level: "CCF-A",
      link: "https://icml.cc/virtual/2025/poster/46386"
    },
    {
      id: "2025-5",
      title: "Document-level relation extraction with Double graph guidance for long-tailed distributions",
      authors: "Bao Liu, Guilin Qi",
      venue: "Computers and Electrical Engineering",
      level: "JCR-Q1",
      link: "https://www.sciencedirect.com/science/article/pii/S0045790625001806"
    },
    {
      id: "2025-4",
      title: "Large language models can better understand knowledge graphs than we thought",
      authors: "Xinbang Dai, Yuncheng Hua, Tongtong Wu, Yang Sheng, Qiu Ji, Guilin Qi",
      venue: "Knowledge-Based Systems",
      level: "JCR-Q1/CCF-C",
      link: "https://www.sciencedirect.com/science/article/pii/S0950705125001078"
    },
    {
      id: "2025-3",
      title: "DST: Continual event prediction by decomposing and synergizing the task commonality and specificity",
      authors: "Yuxin Zhang, Songlin Zhai, Yongrui Chen, Shenyu Zhang, Sheng Bi, Yuan Meng, Guilin Qi",
      venue: "Information Processing & Management",
      level: "JCR-Q1/CCF-B",
      link: "https://www.sciencedirect.com/science/article/pii/S0306457324002589"
    },
    {
      id: "2025-2",
      title: "From superficial to deep: Integrating external knowledge for follow-up question generation using knowledge graph and LLM",
      authors: "Jianyu Liu, Yi Huang, Sheng Bi, Junlan Feng, Guilin Qi",
      venue: "Coling 2025",
      level: "CCF-B",
      link: "https://aclanthology.org/anthology-files/anthology-files/pdf/coling/2025.coling-main.55.pdf"
    },
    {
      id: "2025-1",
      title: "TEF: Causality-Aware Taxonomy Expansion via Front-Door Criterion",
      authors: "Yuan Meng, Songlin Zhai, Yuxin Zhang, Zhongjian Hu, Guilin Qi",
      venue: "Coling 2025",
      level: "CCF-B",
      link: "https://aclanthology.org/2025.coling-main.552/"
    }
  ],
  "2024": [
    {
      id: "2024-4",
      title: "Collaborating LLMs and PLMs for Medical Tasks",
      authors: "Gaofeng Xu, Yuan Meng, Runzhe Wang, Guilin Qi",
      venue: "ICKG 2024",
      level: "",
      link: "https://ieeexplore.ieee.org/abstract/document/10884149/"
    },
    {
      id: "2024-3",
      title: "Hegta: Leveraging heterogeneous graph-enhanced large language models for few-shot complex table understanding",
      authors: "Rihui Jin, Yu Li, Guilin Qi, Nan Hu, Yuan-Fang Li, Jiaoyan Chen, Jianan Wang, Yongrui Chen, Dehai Min, Sheng Bi",
      venue: "AAAI 2025",
      level: "CCF-A",
      link: "https://ojs.aaai.org/index.php/AAAI/article/view/34606"
    },
    {
      id: "2024-2",
      title: "Single Image Unlearning: Efficient Machine Unlearning in Multimodal Large Language Models",
      authors: "Jiaqi Li, Qianshan Wei, Chuanyi Zhang, Guilin Qi, Miaozeng Du, Yongrui Chen, Sheng Bi, Fan Liu",
      venue: "NeurIPS 2024",
      level: "CCF-A",
      link: "https://proceedings.neurips.cc/paper_files/paper/2024/file/3e53d82a1113e3d240059a9195668edc-Paper-Conference.pdf"
    },
    {
      id: "2024-1",
      title: "MIKE: A New Benchmark for Fine-grained Multimodal Entity Knowledge Editing",
      authors: "Jiaqi Li, Miaozeng Du, Chuanyi Zhang, Yongrui Chen, Nan Hu, Guilin Qi, Haiyun Jiang, Siyuan Cheng, Bozhong Tian",
      venue: "ACL 2024 Findings",
      level: "CCF-A",
      link: "https://aclanthology.org/2024.findings-acl.298/"
    }
  ],
  "2023": [
    {
      id: "2023-2",
      title: "Three Stream Based Multi-level Event Contrastive Learning for Text-Video Event Extraction",
      authors: "Jiaqi Li, Chuanyi Zhang, Miaozeng Du, Dehai Min, Yongrui Chen, Guilin Qi",
      venue: "EMNLP 2023",
      level: "CCF-B",
      link: "https://aclanthology.org/2023.emnlp-main.103/"
    },
    {
      id: "2023-1",
      title: "Incorporating Domain Knowledge Graph into Multimodal Movie Genre Classification with Self-Supervised Attention and Contrastive Learning",
      authors: "Jiaqi Li, Guilin Qi, Chuanyi Zhang, Yongrui Chen, Yiming Tan, Chenlong Xia, Ye Tian",
      venue: "ACM MM 2023",
      level: "CCF-A",
      link: "https://dl.acm.org/doi/abs/10.1145/3581783.3612085?__cf_chl_tk=vUFi6at1tjVfjxNFoBtG210byWCqvCdFR96Ko76aOJQ-1755487695-1.0.1.1-yJpdErlJ4QOaC57hfI9PVT.4KKaJoK.SBfstM7bZGk8"
    }
  ]
};