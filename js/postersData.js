const postersSession1 = [
    {
        "title": "Ensembling Pruned Attention Heads For Uncertainty-Aware Efficient Transformers",
        "abstract": "Uncertainty quantification (UQ) is essential for deploying deep neural networks in safety-critical settings. Although methods like Deep Ensembles achieve strong UQ performance, their high computational and memory costs hinder scalability to large models. We introduce Hydra Ensembles, an efficient transformer-based ensemble that prunes attention heads to create diverse members and merges them via a new multi-head attention with grouped fully-connected layers. This yields a compact model with inference speed close to a single network, matching or surpassing Deep Ensembles in UQ performance without retraining from scratch. We also provide an in-depth analysis of pruning, showing that naive approaches can harm calibration, whereas Hydra Ensembles preserves robust uncertainty. Experiments on image and text classification tasks, with various architectures, show consistent gains over Deep Ensembles. Remarkably, in zero-shot classification on ImageNet-1k, our approach surpasses state of the art methods, even without requiring additional training.",
        "keywords": [
            "uncertainty quantification",
            "robustness"
        ],
        "affiliation": "ENSTA",
        "presenter": "Firas Gabetni"
    },
    {
        "title": "Double descent meets OOD detection: Theoretical insights and empirical analysis on the role of model complexity",
        "abstract": "Out-of-distribution (OOD) detection is essential for ensuring the reliability andsafety of machine learning systems. In recent years, it has received increasingattention, particularly through post-hoc detection and training-based methods. Inthis paper, we focus on post-hoc OOD detection, which enables identifying OODsamples without altering the model’s training procedure or objective. Our primarygoal is to investigate the relationship between model capacity and its OOD detec-tion performance. Specifically, we aim to answer the following question: Does theDouble Descent phenomenon manifest in post-hoc OOD detection? This questionis crucial, as it can reveal whether overparameterization, which is already knownto benefit generalization, can also enhance OOD detection. Despite the growinginterest in these topics by the classic supervised machine learning community, thisintersection remains unexplored for OOD detection. We empirically demonstratethat the Double Descent effect does indeed appear in post-hoc OOD detection.Furthermore, we provide theoretical insights to explain why this phenomenonemerges in such setting. Finally, we show that the overparameterized regime doesnot yield superior results consistently, and we propose a method to identify theoptimal regime for OOD detection based on our observations.",
        "keywords": [
            "OOD Detection",
            "Double Descent",
            "representation learning",
            "Neural Collapse"
        ],
        "affiliation": "ENSTA",
        "presenter": "Mouïn Ben Ammar"
    },
    {
        "title": "Hybrid Transformer for Early Alzheimer’s Detection: Integration of Handwriting-Based 2D Images and 1D Signal Features",
        "abstract": "Alzheimer’s Disease (AD) is a prevalent neurodegenerative condition where early detection is vital. Handwriting,often affected early in AD, offers a non-invasive and costeffective way to capture subtle motor changes. State-of-the-artresearch on handwriting, mostly online, based AD detectionhas predominantly relied on manually extracted features, fedas input to shallow machine learning models. Some recent workshave proposed deep learning (DL)-based models, either 1DCNN or 2D-CNN architectures, with performance comparingfavorably to handcrafted schemes. These approaches, however,overlook the intrinsic relationship between the 2D spatial patternsof handwriting strokes and their 1D dynamic characteristics,thus limiting their capacity to capture the multimodal natureof handwriting data. Moreover, the application of Transformermodels remains basically unexplored. To address these limitations, we propose a novel approach for AD detection, consistingof a learnable multimodal hybrid attention model that integrates simultaneously 2D handwriting images with 1D dynamichandwriting signals. Our model leverages a gated mechanismto combine similarity and difference attention, blending thetwo modalities and learning robust features by incorporatinginformation at different scales. Our model achieved state-of-theart performance on the DARWIN dataset, with an F1-scoreof 90.32% and accuracy of 90.91% in Task 8 (’L’ writing),surpassing the previous best by 4.61% and 6.06% respectively.",
        "keywords": [
            "Alzheimer’s disease",
            "Computer-aided diagnosis",
            "Handwriting Analysis",
            "Deep Learning",
            "Hybrid Transformer"
        ],
        "affiliation": "Télécom SudParis",
        "presenter": "Changqing Gong"
    },
    {
        "title": "Di[M]O: Distilling Masked Diffusion Models into One-step Generator",
        "abstract": "Masked Diffusion Models (MDMs) have emerged as a powerful generative modeling technique. Despite their remarkable results, they typically suffer from slow inference with several steps. In this paper, we propose DiMO, a novel approach that distills masked diffusion models into a one-step generator. DiMO addresses two key challenges: (1) the intractability of using intermediate-step information for one-step generation, which we solve through token-level distribution matching that optimizes model output logits by an 'on-policy framework' with the help of an auxiliary model; and (2) the lack of entropy in the initial distribution, which we address through a token initialization strategy that injects randomness while maintaining similarity to teacher training distribution. We show DiMO's effectiveness on both class-conditional and text-conditional image generation, impressively achieving performance competitive to multi-step teacher outputs while drastically reducing inference time. To our knowledge, we are the first to successfully achieve one-step distillation of masked diffusion models and the first to apply discrete distillation to text-to-image generation, opening new paths for efficient generative modeling.",
        "keywords": [
            "Diffusion",
            "Discrete diffusion"
        ],
        "affiliation": "École Polytechnique",
        "presenter": "Yuanzhi Zhu"
    },
    {
        "title": "The Silent Assistant: NoiseQuery as Implicit Guidance for Goal-Driven Image Generation",
        "abstract": "In this work, we introduce NoiseQuery as a novel method for enhanced noise initialization in versatile goal-driven text-to-image (T2I) generation. Specifically, we propose to leverage an aligned Gaussian noise as implicit guidance to complement explicit user-defined inputs, such as text prompts, for better generation quality and controllability. Unlike existing noise optimization methods designed for specific models, our approach is grounded in a fundamental examination of the generic finite-step noise scheduler design in diffusion formulation, allowing better generalization across different diffusion-based architectures in a tuning-free manner. This model-agnostic nature allows us to construct a reusable noise library compatible with multiple T2I models and enhancement techniques, serving as a foundational layer for more effective generation. Extensive experiments demonstrate that NoiseQuery enables fine-grained control and yields significant performance boosts not only over high-level semantics but also over low-level visual attributes, which are typically difficult to specify through text alone, with seamless integration into current workflows with minimal computational overhead.",
        "keywords": [
            "Image Generation",
            "Diffusion Model",
            "Generative Control",
            "Learning-Free"
        ],
        "affiliation": "École Polytechnique",
        "presenter": "Ye Zhu"
    },
    {
        "title": "EZ-SP: Fast and Lightweight Superpoint-Based 3D Segmentation",
        "abstract": "Superpoint-based pipelines provide an efficient alternative to point- or voxel-based 3D semantic segmentation, but are often bottlenecked by their CPU-bound partition step. We propose a learnable, fully GPU partitioning algorithm that generates geometrically and semantically coherent superpoints 13× faster than prior methods. Our module is compact (under 60k parameters), trains in under 20 minutes with a differentiable surrogate loss, and requires no handcrafted features. Combine with a lightweight superpoint classifier, the full pipeline fits in <2 MB of VRAM, scales to multi-million-point scenes, and supports real-time inference. With 72× faster inference and 120× fewer parameters, EZ-SP matches the accuracy of point-based SOTA models across three domains: indoor scans (S3DIS), autonomous driving (KITTI-360), and aerial LiDAR (DALES).",
        "keywords": [
            "point-cloud",
            "semantic segmentation",
            "superpoint",
            "efficient"
        ],
        "affiliation": "Ecole Nationale des Ponts et Chaussées",
        "presenter": "Louis Geist"
    },
    {
        "title": "Image generative models watermarking. Case study: GAN models",
        "abstract": "AI-generated content (images, videos, audio, text, etc.) is expanding rapidly, driven by recent scientific breakthroughs and their integration into user-friendly applications. The resulting transformations affect multiple dimensions of daily life, ranging from the emergence of new business verticals to concerns about sovereignty, disinformation, and environmental impact. In this context, our work has three related yet complementary targets: (i) the watermarking of image generative models, (ii) the watermarking of the images thus generated, and (iii) the compliance of these solutions with multimedia compression standards. To this end, our study encompasses three main steps. First, a comprehensive testing procedure allowing for the objective benchmarking of state-of-the-art watermarking solutions has been designed and developed, thus identifying their main limitations, in terms of key-size, down-scaling with respect to the model size, and systematic visual impact in the generated images. Secondly, the study focuses on issues related to the deployment of high-quality generative AI models and advances an on/off image generation solution. This solution establishes synergies among state-of-the-art concepts to advance a new training scheme to enable the deployment of a GAN that can generate both vanilla (high-quality) samples and imperceptibly marked samples. The illustrations concern StyleGAN2-ADA trained on Celeb-A. The experimental results evaluate imperceptibility (in term of FID and SSIM) for both unmarked and marked samples, and robustness against compression neural-network–based attacks, and pixel-domain image modifications. Synergies with emerging ISO/IEC AWI 21617-3 Media asset watermarking standards are established. Our experimental results bring a new possibility for trustworthy AI deployment in edge–cloud settings, where storage capacity is a major challenge, by deploying on/off watermarked GEN-AI model.",
        "keywords": [
            "Watermarking",
            "GAN",
            "GEN-AI"
        ],
        "affiliation": "Télécom SudParis",
        "presenter": "Matéo Zoughebi"
    },
    {
        "title": "Feature-aware Hypergraph Generation via Next-Scale Prediction",
        "abstract": "Graph generative models have shown strong results in molecular design but struggle to scale to large, complex structures. While hierarchical methods improve scalability, they usually ignore node and edge features, which are critical in real-world applications. This issue is amplified in hypergraphs, where hyperedges capture higher-order relationships among multiple nodes. Despite their importance in domains such as 3D geometry, molecular systems, and circuit design, existing generative models rarely support both hypergraphs and feature generation at scale. In this paper, we introduce FAHNES (feature-aware hypergraph generation via next-scale prediction), a hierarchical framework that jointly generates hypergraph topology and features. FAHNES builds multi-scale representations through node coarsening and refines them via localized expansion, guided by a novel node budget mechanism that controls granularity and ensures consistency across scales. Experiments on synthetic, 3D mesh and graph point cloud datasets show that FAHNES achieves state-of-the-art performance in jointly generating features and structure, advancing scalable hypergraph and graph generation.",
        "keywords": [
            "Graphs",
            "Generative models"
        ],
        "affiliation": "Télécom Paris",
        "presenter": "Dorian Gailhard"
    },
    {
        "title": "Adapting Vision Transformers to Ultra-High Resolution Semantic Segmentation with Relay Tokens",
        "abstract": "Current approaches for segmenting ultra‑high‑resolution images either slide a window, thereby discarding global context, or downsample and lose fine detail. We propose a simple yet effective method that brings explicit multi‑scale reasoning to vision transformers, simultaneously preserving local details and global awareness. Concretely, we process each image in parallel at a local scale (high‑resolution, small crops) and a global scale (low‑resolution, large crops), and aggregate and propagate features between the two branches with a small set of learnable relay tokens. The design plugs directly into standard transformer backbones (eg ViT and Swin) and adds fewer than 2% parameters. Extensive experiments on three ultra‑high‑resolution segmentation benchmarks, Archaeoscape, URUR, and Gleason, and on the conventional Cityscapes dataset show consistent gains, with up to 13% relative mIoU improvement. Code and pretrained models will be released.",
        "keywords": [
            "Computer Vision",
            "Semantic Segmentation",
            "Earth Observation"
        ],
        "affiliation": "Ecole Nationale des Ponts et Chaussées",
        "presenter": "Yohann Perron"
    },
    {
        "title": "Chapter-Llama: Efficient Chaptering in Hour-Long Videos with LLMs",
        "abstract": "We address the task of video chaptering, i.e., partitioning a long video timeline into semantic units and generating corresponding chapter titles. While relatively underexplored, automatic chaptering has the potential to enable efficient navigation and content retrieval in long-form videos. In this paper, we achieve strong chaptering performance on hour-long videos by efficiently addressing the problem in the text domain with our 'Chapter-Llama' framework. Specifically, we leverage a pretrained large language model (LLM) with large context window, and feed as input (i) speech transcripts and (ii) captions describing video frames, along with their respective timestamps. Given the inefficiency of exhaustively captioning all frames, we propose a lightweight speech-guided frame selection strategy based on speech transcript content, and experimentally demonstrate remarkable advantages. We train the LLM to output timestamps for the chapter boundaries, as well as free-form chapter titles. This simple yet powerful approach scales to processing one-hour long videos in a single forward pass. Our results demonstrate substantial improvements (e.g., 45.3 vs 26.7 F1 score) over the state of the art on the recent VidChapters-7M benchmark. To promote further research, we release our code and models.",
        "keywords": [
            "video chaptering",
            "video understanding"
        ],
        "affiliation": "Ecole Nationale des Ponts et Chaussées",
        "presenter": "Lucas Ventura"
    },
    {
        "title": "Towards Understanding and Quantifying Uncertainty for Text-to-Image Generation",
        "abstract": "This work introduces Prompt-based UNCertainty Estimation for T2I models (PUNC), the first method to quantify and evaluate Text-to-Image (T2I) model uncertainty specifically with respect to the input prompt, which is crucial for improving output reliability. PUNC innovatively leverages a Large Vision-Language Model (LVLM) to caption the generated image and compares this caption against the original prompt in the semantically richer text space, allowing for better handling of semantic uncertainties than image-space methods. Crucially, PUNC can disentangle both aleatoric and epistemic uncertainties via precision and recall, a capability that enables applications like bias detection, copyright protection, and Out-of-Distribution (OOD) detection, ultimately proving to outperform state-of-the-art techniques and advancing the trustworthiness of T2I models.",
        "keywords": [
            "Out of Distribution",
            "Text to image",
            "Visual language model"
        ],
        "affiliation": "ENSTA",
        "presenter": "Gianni Franchi"
    },
    {
        "title": "Understanding Multi-View Transformers",
        "abstract": "Multi-view transformers such as DUSt3R are revolutionizing 3D vision by solving 3D tasks in a feed-forward manner. However, contrary to previous optimization-based pipelines, the inner mechanisms of multi-view transformers are unclear. Their black-box nature makes further improvements beyond data scaling challenging and complicates usage in safety- and reliability-critical applications. Here, we present an approach for probing and visualizing 3D representations from the residual connections of the multi-view transformers' layers. In this manner, we investigate a variant of the DUSt3R model, shedding light on the development of its latent state across blocks, the role of the individual layers, and suggest how it differs from methods with stronger inductive biases of explicit global pose. Finally, we show that the investigated variant of DUSt3R estimates correspondences that are refined with reconstructed geometry.",
        "keywords": [
            "multi-view transformers",
            "interpretability",
            "dust3r",
            "3D"
        ],
        "affiliation": "École Polytechnique",
        "presenter": "Julien Gaubil"
    },
    {
        "title": "CutClean: Neural Network Pruning for Privacy-Preserving Inference",
        "abstract": "Neural networks are increasingly deployed in high-stakes applications with growing privacy leakage concerns. We show that this privacy leakage can occur even in the absence of representation imbalances that lead to traditional dataset biases. This poses significant privacy risks when deploying models that process sensitive attributes. We propose CutClean, a pruning method that systematically removes pathways responsible for private information propagation while maintaining task performance and maximizing network sparsity.Our approach employs auxiliary linear privacy heads placed at each network's block to quantify information leakage. We then sequentially prune blocks, enabling increased sparsification without compromising utility. Experiments on synthetic and real-world datasets demonstrate that our approach effectively minimizes private information flow while achieving high sparsity rates and preserving classification accuracy. Our analysis reveals that information leakage patterns vary significantly across network depths, depending on the datasets and attributes at stake. Our findings show that structured pruning can serve as an effective post-hoc privacy-preserving technique for deployed neural networks.",
        "keywords": [
            "privacy preservation",
            "neural network pruning",
            "structured sparsity",
            "mutual information minimization"
        ],
        "affiliation": "Télécom Paris",
        "presenter": "Leonardo Magliolo"
    },
    {
        "title": "Synthetic Abundance Maps for Unsupervised Super-Resolution of Hyperspectral Remote Sensing Images",
        "abstract": "Hyperspectral single image super-resolution (HS-SISR) aims to enhance the spatial resolution of hyperspectral images to fully exploit their spectral information. While considerable progress has been made in this field, most existing methods are supervised and require ground truth data for training—data that is often unavailable in practice. To overcome this limitation, we propose a novel unsupervised training framework for HS-SISR, based on synthetic abundance data. The approach begins by unmixing the hyperspectral image into endmembers and abundances. A neural network is then trained to perform abundance super-resolution using synthetic abundances only. These synthetic abundance maps are generated from a dead leaves model whose characteristics are inherited from the low-resolution image to be super-resolved. This trained network is subsequently used to enhance the spatial resolution of the original image’s abundances, and the final super-resolution hyperspectral image is reconstructed by combining them with the endmembers. Experimental results demonstrate both the training value of the synthetic data and the effectiveness of the proposed method across 3 datasets, 3 scaling factors, and several evaluation metrics.",
        "keywords": [
            "Hyperspectral image", "remote sensing", "super-resolution", "unsupervised learning", "synthetic training data"
        ],
        "affiliation": "Télécom Paris",
        "presenter": "Xinxin XU"
    },
    {
        "title": "MIRO: MultI-Reward cOnditioned pretraining improves T2I quality and efficiency",
        "abstract": "Current text-to-image generative models are trained on large uncurated datasets to enable diverse generation capabilities. However, this does not align well with user preferences. Recently, reward models have been specifically designed to perform post-hoc selection of generated images and align them to a reward, typically user preference. This discarding of informative data together with the optimizing for a single reward tend to harm diversity, semantic fidelity and efficiency. Instead of this post-processing, we propose to condition the model on multiple reward models during training to let the model learn user preferences directly. We show that this not only dramatically improves the visual quality of the generated images but it also significantly speeds up the training. Our proposed method, called MIRO, achieves state-of-the-art performances on the GenEval compositional benchmark and user-preference scores (PickAScore, ImageReward, HPSv2).",
        "keywords": [
            "Diffusion",
            "text-to-image",
            "Reward conditioned",
            "Alignement"
        ],
        "affiliation": "École Polytechnique",
        "presenter": "Lucas Degeorge - Arijit Ghosh"
    },
    {
        "title": "Restoration of 3D Gaussian Splatting Artifacts with Diffusion Models for Extreme Compression",
        "abstract": "Unlike previous implicit scene representation approaches such as NeRF, 3D Gaussian Splatting (3DGS) enables efficient training and rendering by training sparse Gaussians instead of learning a dense mapping from coordinates to pixel values. This typically requires a number of Gaussians on the order of millions, resulting in high space complexity. Although recent years have seen progress in pruning and compression, the restoration of degradations under extreme compression scenarios remains underexplored. Through this project, we will explore the use of properly-adapted diffusion models to restore quality loss from extremely-compressed 3DGS models, by including them at the decoder side. The intuition is that compression tools for 3DGS introduce specific distortions that can be corrected by leveraging proper diffusion model priors.",
        "keywords": [
            "3DGS compression",
            "image restoration",
            "diffusion models"
        ],
        "affiliation": "",
        "presenter": "Cem Eteke"
    }
];

const postersSession2 = [
    {
        "title": "Improving Semantic Uncertainty Quantification in LVLMs with Semantic Gaussian Processes",
        "abstract": "Large Vision-Language Models (LVLMs) often produce plausible but unreliable outputs, making robust uncertainty estimation essential. Recent work on semantic uncertainty estimates relies on external models to cluster multiple sampled responses and measure their semantic consistency. However, these clustering methods are often fragile, highly sensitive to minor phrasing variations, and can incorrectly group or separate semantically similar answers, leading to unreliable uncertainty estimates. We propose Semantic Gaussian Process Uncertainty (SGPU), a Bayesian framework that quantifies semantic uncertainty by analyzing the geometric structure of answer embeddings, avoiding brittle clustering. SGPU maps generated answers into a dense semantic space, computes the Gram matrix of their embeddings, and summarizes their semantic configuration via the eigenspectrum.This spectral representation is then fed into a Gaussian Process Classifier that learns to map patterns of semantic consistency to predictive uncertainty, and that can be applied in both black-box and white-box settings. Across six LLMs and LVLMs on eight datasets spanning VQA, image classification, and textual QA, SGPU consistently achieves state-of-the-art calibration (ECE) and discriminative (AUROC, AUARC) performance.We further show that SGPU transfers across models and modalities, indicating that its spectral representation captures general patterns of semantic uncertainty.",
        "keywords": [
            "Uncertainty quantification"
        ],
        "affiliation": "École Polytechnique",
        "presenter": "Joseph Hoche"
    },
    {
        "title": "Explaining and Removing Social Biases in Text-to-Image Generative AI",
        "abstract": "State-of-the-art Text-to-Image (T2I) models perpetuate harmful demographic stereotypes. This work will introduce XDeBias-T2I, a framework designed to reveal, explain, and debias these models at the latent level. The methodology will investigate leveraging Sparse Autoencoders (SAE) for concept disentanglement (e.g., separating \"gender\" from \"doctor\") and LoRA sliders for latent space controllability and stereotype steering. XDeBias-T2I aims to offer granular attribute control and diagnostic tools essential for regulatory compliance, aligning with the EU AI Act.",
        "keywords": [
            "Explainability",
            "T2I Diffusion Models",
            "Debiasing",
            "Disentanglement",
            "Generative AI"
        ],
        "affiliation": "Télécom Paris",
        "presenter": "Rayyan Ahmed"
    },
    {
        "title": "Video-based hand gesture recognition in open surgery",
        "abstract": "With final target of objectively and autonomously assessing surgery resident performing open surgery intervention, the work carried out during the first year of this PhD program focusses on automatic hand gesture recognition. The R&D main challenges are threefold: the complexity of the surgery gestures, to video capturing conditions (that should be unconstrained and realistic) and to the multi-hands setup (up to 4 hands can be visible in a video at the same time). Our approach consists in extracting 3D skeletons for resident hands and in subsequently computing four key metrics to characterize surgical dexterity: Total Path Length (economy of motion), Log Dimensionless Jerk (smoothness), Submovement Frequency (tremor), and Hand Separation Variability (bimanual coordination). The experiments consider a database of about 7 minutes corresponding to end-to-end anastomosis and resulted in average Accuracy values of 0.96. Based on these results, quality metrics for surgery gestures can be derived. Our experimental results also bring a new light on the trade-offs between vision transformers and 3D models, at least in this specific applicative field.",
        "keywords": [
            "Open surgery",
            "Hand gesture",
            "surgery assessment",
            "hand tracking"
        ],
        "affiliation": "Télécom SudParis",
        "presenter": "Noé Constans"
    },
    {
        "title": "Specify and Edit: Overcoming Ambiguity in Text-Based Image Editing",
        "abstract": "Text-based editing diffusion models exhibit limited performance when the user's input instruction is ambiguous. To solve this problem, we propose Specify ANd Edit (SANE), a zero-shot inference pipeline for diffusion-based editing systems. We use a large language model (LLM) to decompose the input instruction into specific instructions, i.e. well-defined interventions to apply to the input image to satisfy the user's request. We benefit from the LLM-derived instructions along the original one, thanks to a novel denoising guidance strategy specifically designed for the task. Our experiments with three baselines and on two datasets demonstrate the benefits of SANE in all setups. Moreover, our pipeline improves the interpretability of editing models, and boosts the output diversity. Our code is publicly available at https://github.com/fabvio/SANE.",
        "keywords": [
            "image editing",
            "diffusion models",
            "zero-shot"
        ],
        "affiliation": "Télécom Paris",
        "presenter": "Ekaterina Iakovleva"
    },
    {
        "title": "Training-Free Synthetic Data Generation with Dual IP-Adapter Guidance",
        "abstract": "Few-shot image classification remains challenging due to the limited availability of labeled examples. Recent approaches have explored generating synthetic training data using text-to-image diffusion models, but often require extensive model fine-tuning or external information sources. We present a novel training-free approach, called DIPSY, that leverages IP-Adapter for image-to-image translation to generate highly discriminative synthetic images using only the available few-shot examples. DIPSY introduces three key innovations: (1) an extended classifier-free guidance scheme that enables independent control over positive and negative image conditioning; (2) a class similarity-based sampling strategy that identifies effective contrastive examples; and (3) a simple yet effective pipeline that requires no model fine-tuning or external captioning and filtering. Experiments across ten benchmark datasets demonstrate that our approach achieves state-of-the-art or comparable performance, while eliminating the need for generative model adaptation or reliance on external tools for caption generation and image filtering. Our results highlight the effectiveness of leveraging dual image prompting with positive-negative guidance for generating class-discriminative features, particularly for fine-grained classification tasks.",
        "keywords": [
            "Generative models",
            "diffusion models",
            "few-shot classification",
            "synthetic data",
            "multimodal conditioning"
        ],
        "affiliation": "École Polytechnique",
        "presenter": "Eleftherios Tsonis"
    },
    {
        "title": "Self supervsied 3D estimation",
        "abstract": "We introduce an unified transformer-based feedforward model that predicts both 3D and semantic information using fully self-supervised training. Our method jointly learns depth, 3D structure, and semantic representations directly from unlabeled videos, without requiring curated 3D datasets, specialized sensors, or manual annotations. Extensive experiments performed on various datasets show that our approach produces meaningful depth maps, consistent 3D structure, and high-level semantic predictions across diverse scenes.",
        "keywords": [
            "Vision",
            "Self supervised learning",
            "3D"
        ],
        "affiliation": "ENSTA",
        "presenter": "Marwane Hariat"
    },
    {
        "title": "Watermarking Large Language Models: from a buzzword to a cross-model solution",
        "abstract": "LLM (Large Language Models) have gradually evolved into general-purposefoundation models, and thanks to Vision Transformers (ViTs) they have a significantpotential role to play in multimodal application domains, such as image/videoprocessing. As domain specific LLMs are the result of substantial computational andfinancial costs, protecting such models against unauthorized use, theft, or modificationhas also become a critical concern, and watermarking is an appealing solution in thisrespect. While NN watermarking is already a complex research field, LLMs comeacross with additional constraints: while the watermark insertion should not require thecomplete training of the model, it should be compatible with strategies such asparameter-efficient fine-tuning (PEFT) or the addition of lightweight, trainable modules,while keeping the core model frozen.Started in June 2025, our study leverages on the equivariance properties of RotaryPositional Embeddings (RoPE) to design a watermarking mechanism for Transformer-based LLMs. RoPE encodes positional information through the multiplication of queryand key vectors by rotation matrices, inducing structured phase shifts within theattention mechanism. We thus inject a hidden signal (a watermark) at the input levelby applying non-uniform token displacements, which induces controlled, segment-wisephase shifts in the attention computation. As modifying/retraining the positionalencoding is not required, this method can be implemented with minimal fine-tuning.The experiments consider GPT-2, which is first adapted by replacing its absolutepositional embeddings with RoPE, then fine-tuned on a subset of the OpenWebTextdataset. Subsequently, the model is trained jointly with a lightweight decoder taskedwith extracting the watermark from the output logits. The experimental results can beconsidered as a preliminary proof of concepts: while the mark recovery from triggeredsamples is successful, the thorough evaluation of the imperceptibility property is on-going. Moreover, ablation studies show that detection not only depends on the non-uniform geometric transformation but also on semantic recognition of spacer tokens.On-going studies also relate to the synergies to be established between RoPE andVision Transformers and Swin Transformers.",
        "keywords": [
            "LLM VLM Watermarking"
        ],
        "affiliation": "Télécom SudParis",
        "presenter": "Elliot Cole"
    },
    {
        "title": "Self-Supervised Multiview X-ray Matching",
        "abstract": "Accurate interpretation of multi-view radiographs is crucial for diagnosing fractures, muscular injuries, and other anomalies. While significant advances have been made in AI-based analysis of single images, current methods often struggle to establish robust correspondences between different X-ray views, an essential capability for precise clinical evaluations. In this work, we present a novel self-supervised pipeline that eliminates the need for manual annotation by automatically generating a many-to-many correspondence matrix between synthetic X-ray views. This is achieved using digitally reconstructed radiographs (DRR), which are automatically derived from unannotated CT volumes. Our approach incorporates a transformer-based training phase to accurately predict correspondences across two or more X-ray views. Furthermore, we demonstrate that learning correspondences among synthetic X-ray views can be leveraged as a pretraining strategy to enhance automatic multi-view fracture detection on real data. Extensive evaluations on both synthetic and real X-ray datasets show that incorporating correspondences improves performance in multi-view fracture classification.",
        "keywords": [
            "Multi-view",
            "Matching",
            "Self-supervision",
            "Transformers"
        ],
        "affiliation": "Télécom Paris",
        "presenter": "Mohamad Dabboussi"
    },
    {
        "title": "Panoptic Segmentation for Embedded Systems",
        "abstract": "We present a lightweight panoptic segmentation framework designed for embedded robotic systems, where computation, memory, and latency are critical constraints.Our approach preserves strong semantic and instance segmentation quality while significantly reducing FLOPs and enabling real-time inference on low-power hardware.By selectively routing and compressing multi-scale features, we demonstrate that panoptic perception can be made deployment-ready without relying on heavy architectures.",
        "keywords": [
            "Panoptic Segmentation",
            "Embedded Vision",
            "Efficient Deep Learning",
            "Robotic Perception",
            "Real-Time Inference"
        ],
        "affiliation": "ENSTA",
        "presenter": "Calvin Galagain"
    },
    {
        "title": "How far can we go with ImageNet for text-to-image generation?",
        "abstract": "Recent text-to-image (T2I) generation models have achieved remarkable sucess by training on billion-scale datasets, following a `bigger is better' paradigm that prioritizes data quantity over availability (closed vs open source) and reproducibility (data decay vs established collections). We challenge this established paradigm by demonstrating that one can achieve capabilities of models trained on massive web-scraped collections, using only ImageNet enhanced with well-designed text and image augmentations. With this much simpler setup, we achieve a +6% overall score over SD-XL on GenEval and +5% on DPGBench while using just 1/10th the parameters and 1/1000th the training images. We also show that ImageNet pretrained models can be finetuned on task specific datasets (like for high resolution aesthetic applications) with good results, indicating that ImageNet is sufficient for acquiring general capabilities. This opens the way for more reproducible research as ImageNet is widely available and the proposed standardized training setup only requires 500 hours of H100 to train a text-to-image model.",
        "keywords": [
            "Text-to-image generation",
            "diffusion models",
            "ImageNet"
        ],
        "affiliation": "École Polytechnique",
        "presenter": "Lucas Degeorge"
    },
    {
        "title": "A geometric unification of concepts learning with concept cones",
        "abstract": "www.arxiv.org/abs/2512.07355",
        "keywords": [
            "Explainable AI", "Mechanistic Interpretability", "Sparse Auto Encoders (SAE)", "Concept Bottleneck Models (CBM)", "Dictionnary Learning"
        ],
        "affiliation": "ENSTA",
        "presenter": "Alexandre Rocchi--Henry"
    },
    {
        "title": "Multimodal embodiment-aware navigation transformer",
        "abstract": "Goal-conditioned navigation models for groundrobots trained using supervised learning show promising zero-shot transfer, but their collision-avoidance capability neverthelessdegrades under distribution shift, i.e. environmental, robot orsensor configuration changes. We propose a multi-modal, attention-based policy for goal navigation, trained onheterogeneous data from multiple platforms and environments,which improves robustness with two key features. First, we fuseRGB images, a goal embedding and arobot’s embodiment descriptor with a transformer architectureto capture complementary geometry and appearance cues. Thetransformer’s output is used to condition a diffusion modelthat generates navigable trajectories. Second, using automaticallygenerated offline labels, we train a collision prediction head forscoring and ranking trajectories produced by the diffusion model.The diffusion conditioning as well as the trajectory rankinghead depend on a robot’s embodiment token that allows ourmodel to generate and select trajectories with respect to therobot’s dimensions.",
        "keywords": [
            "Off-road navigation",
            "local planner",
            "imitation learning"
        ],
        "affiliation": "ENSTA",
        "presenter": "Louis Dezons"
    },
    {
        "title": "T-REGS: Minimum Spanning Tree Regularization for Self-Supervised Learning",
        "abstract": "Self-supervised learning (SSL) has emerged as a powerful paradigm for learning representations without labeled data, often by enforcing invariance to input transformations such as rotations or blurring. Recent studies have highlighted two pivotal properties for effective representations: (i) avoiding dimensional collapse-where the learned features occupy only a low-dimensional subspace, and (ii) enhancing uniformity of the induced distribution. In this work, we introduce T-REGS, a simple regularization framework for SSL based on the length of the Minimum Spanning Tree (MST) over the learned representation. We provide theoretical analysis demonstrating that T-REGS simultaneously mitigates dimensional collapse and promotes distribution uniformity on arbitrary compact Riemannian manifolds. Several experiments on synthetic data and on classical SSL benchmarks validate the effectiveness of our approach at enhancing representation quality.",
        "keywords": [
            "self-supervised learning",
            "minimum spanning tree",
            "dimensional collapse",
            "dimension estimation",
            "topological data analysis"
        ],
        "affiliation": "École Polytechnique",
        "presenter": "Julie Mordacq"
    },
    {
        "title": "Beyond Low-rank Decomposition: A Shortcut Approach for Efficient On-Device Learning",
        "abstract": "On-device learning has emerged as a promising direction for AI development, particularly because of its potential to reduce latency issues and mitigate privacy risks associated with device-server communication, while improving energy efficiency. Despite these advantages, significant memory and computational constraints still represent major challenges for its deployment. Drawing on previous studies on low-rank decomposition methods that address activation memory bottlenecks in backpropagation, we propose a novel shortcut approach as an alternative. Our analysis and experiments demonstrate that our method can reduce activation memory usage, even up to $120.09\\times$ compared to vanilla training, while also reducing overall training FLOPs up to $1.86\\times$ when evaluated on traditional benchmarks.",
        "keywords": [
            "Deep Learning",
            "Compression",
            "Low rank",
            "Efficient",
            "Frugal",
            "Tiny"
        ],
        "affiliation": "",
        "presenter": "Le-Trung Nguyen"
    },
    {
        "title": "FOLDER: Accelerating Multi-modal Large Language Models with Enhanced Performance",
        "abstract": "Recently, Multi-modal Large Language Models (MLLMs) have shown remarkable effectiveness for multi-modal tasks due to their ability of cross-modal understanding. However, processing long sequences of visual tokens extracted from visual backbones poses challenges for deployment in real-time applications. To address this issue, we introduce FOLDER, a simple yet effective plug-and-play module designed to reduce the length of the visual token sequence, mitigating computational and memory demands during both training and inference. Through a comprehensive analysis of the token reduction process in the vision encoder, we analyze the information loss introduced by different reduction strategies and develop FOLDER to preserve key information while removing visual redundancy. We show the effectiveness of FOLDER by integrating it into the visual backbone of various MLLMs, significantly accelerating the inference phase. Furthermore, we evaluate its utility as a training accelerator or even performance booster for MLLMs. FOLDER achieves comparable or even better performance than the original models, while dramatically reducing complexity by removing up to 70% of visual tokens.",
        "keywords": [
            "Multi-modal Large Language Models",
            "Token Pruning",
            "Transformer",
            "Efficiency"
        ],
        "affiliation": "Télécom Paris",
        "presenter": "Gabriele Spadaro"
    },
    {
        "title": "Controllable blind deblurring with diffusion models",
        "abstract": "Blind deblurring aims to recover a clean image from a degraded measurement without knowledge of the degradation kernel. In practice, some high-frequency content can be completely lost; therefore, end-to-end methods that only learn to invert a degradation are often insufficient. This motivates the use of generative priors to synthesize plausible details conditioned on the degraded image. In this work, we propose a diffusion-based blind deblurring method and study two strategies for conditioning the diffusion backbone: with a ControlNet adapter and direct finetuning of the diffusion backbone. We find that the ControlNet-based model can be biased by the frozen diffusion backbone and is more prone to generating inconsistent content, while the fully finetuned backbone enforces better fidelity to the degraded image and achieves better perceptual results. In addition, we address the underexplored challenge of controllability by designing a blur measure that controls the model’s generation strength and provides explicit control over the fidelity/creativity trade-off, resulting in a controllable blind deblurring method.",
        "keywords": [
            "Blind deblurring", "Diffusion models", "Latent diffusion", "Conditional generation", "Controllable restoration"
        ],
        "affiliation": "Télécom Paris",
        "presenter": "Imane Si Salah"
    }
];
