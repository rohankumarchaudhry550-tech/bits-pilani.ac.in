// Comprehensive Course Syllabus & Day-by-Day Lecture Notes (17 August 2026 - 02 October 2026)
// BITS Pilani WILP - M.Tech Artificial Intelligence & Machine Learning (First Semester 2026-27)

export const courseSyllabus = [
  {
    code: 'BITS F112',
    title: 'Mathematical Foundations for Machine Learning',
    faculty: 'Dr. A. Sen',
    credits: 4,
    description: 'Provides a rigorous mathematical foundation essential for modern statistical machine learning and deep learning architectures.',
    referenceBooks: [
      'Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong - Mathematics for Machine Learning (Cambridge University Press)',
      'Gilbert Strang - Linear Algebra and Learning from Data (Wellesley-Cambridge Press)',
      'Stephen Boyd and Lieven Vandenberghe - Convex Optimization (Cambridge University Press)'
    ],
    modules: [
      {
        moduleNumber: 1,
        title: 'Linear Algebra & Vector Spaces',
        topics: ['Vector spaces, subspaces, linear independence, basis and dimension', 'Linear transformations, rank-nullity theorem, change of basis', 'Inner product spaces, Euclidean norms, orthogonality, Gram-Schmidt orthogonalization', 'Orthogonal projections and least-squares approximations']
      },
      {
        moduleNumber: 2,
        title: 'Matrix Decompositions',
        topics: ['Determinants, trace, and invertible matrices', 'Eigenvalues, eigenvectors, characteristic polynomials, and geometric multiplicity', 'Symmetric matrices, spectral theorem, and orthogonal diagonalization', 'Singular Value Decomposition (SVD): full and compact SVD, geometric interpretation', 'Principal Component Analysis (PCA) via SVD, low-rank matrix approximations and Eckart-Young-Mirsky theorem']
      },
      {
        moduleNumber: 3,
        title: 'Vector Calculus & Matrix Derivatives',
        topics: ['Multivariate functions, limits, directional derivatives, and partial derivatives', 'Gradients, Jacobian matrices, Hessian matrices', 'Matrix differential calculus, chain rule for tensor operations', 'Taylor series approximations for scalar and vector-valued functions']
      },
      {
        moduleNumber: 4,
        title: 'Continuous Optimization',
        topics: ['Unconstrained optimization, first- and second-order necessary and sufficient optimality conditions', 'Gradient Descent, learning rates, line search methods', 'Stochastic Gradient Descent (SGD), Momentum, RMSProp, Adam optimizers', 'Constrained optimization, Lagrange multipliers, duality, and Karush-Kuhn-Tucker (KKT) conditions', 'Convex sets, convex functions, and convex programming formulations']
      }
    ]
  },
  {
    code: 'BITS F111',
    title: 'Introduction to Statistical Methods',
    faculty: 'Prof. R. Sharma',
    credits: 4,
    description: 'Covers essential probability distributions, statistical inference, parameter estimation, hypothesis testing, and regression analysis for data science.',
    referenceBooks: [
      'Sheldon Ross - Introduction to Probability and Statistics for Engineers and Scientists (Academic Press)',
      'Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani - An Introduction to Statistical Learning (ISLR, Springer)',
      'Douglas C. Montgomery - Applied Statistics and Probability for Engineers (Wiley)'
    ],
    modules: [
      {
        moduleNumber: 1,
        title: 'Probability Theory & Random Variables',
        topics: ['Axioms of probability, conditional probability, multiplication rule, Bayes Theorem', 'Independent events, law of total probability', 'Discrete random variables: probability mass function (PMF), cumulative distribution function (CDF)', 'Expectation, variance, moments, moment generating functions (MGF)', 'Common discrete models: Bernoulli, Binomial, Poisson, Geometric, Hypergeometric']
      },
      {
        moduleNumber: 2,
        title: 'Continuous Distributions & Limit Theorems',
        topics: ['Continuous random variables, probability density function (PDF), CDF properties', 'Uniform, Exponential, Gamma, Normal (Gaussian) distributions', 'Standard normal distribution, z-scores, empirical rule', 'Joint distributions, marginal and conditional densities, covariance, and correlation', 'Law of Large Numbers (LLN) and Central Limit Theorem (CLT) with practical implications']
      },
      {
        moduleNumber: 3,
        title: 'Sampling Distributions & Point/Interval Estimation',
        topics: ['Random sampling, sample mean, sample variance', 'Sampling distributions: Student’s t-distribution, Chi-square distribution, F-distribution', 'Point estimation: Maximum Likelihood Estimation (MLE), Method of Moments (MoM)', 'Properties of estimators: unbiasedness, consistency, efficiency, Cramér-Rao lower bound', 'Confidence intervals for population means, variances, and proportions']
      },
      {
        moduleNumber: 4,
        title: 'Hypothesis Testing & ANOVA',
        topics: ['Null and alternative hypotheses, test statistics, critical values, p-value approach', 'Type I and Type II errors, significance level, statistical power', 'One-sample and two-sample z-tests and t-tests (independent and paired)', 'Chi-square test of goodness-of-fit and test of independence', 'One-way and two-way Analysis of Variance (ANOVA), F-statistic, post-hoc tests (Tukey HSD)', 'Simple linear regression diagnostics: residuals, R-squared, homoscedasticity']
      }
    ]
  },
  {
    code: 'BITS F113',
    title: 'Machine Learning',
    faculty: 'Dr. K. Patel',
    credits: 4,
    description: 'Foundations and practical implementations of supervised and unsupervised machine learning models, loss formulations, and performance evaluation.',
    referenceBooks: [
      'Christopher M. Bishop - Pattern Recognition and Machine Learning (Springer)',
      'Kevin P. Murphy - Probabilistic Machine Learning: An Introduction (MIT Press)',
      'Tom M. Mitchell - Machine Learning (McGraw-Hill)'
    ],
    modules: [
      {
        moduleNumber: 1,
        title: 'Supervised Learning: Regression',
        topics: ['Machine learning paradigm: data, features, labels, inductive bias', 'Simple and Multiple Linear Regression: Ordinary Least Squares (OLS) closed-form solution', 'Gradient descent for regression, feature scaling, batch vs mini-batch updates', 'Polynomial regression, underfitting, overfitting, bias-variance decomposition', 'Regularization: L2 Ridge regression, L1 Lasso regression (sparsity), ElasticNet']
      },
      {
        moduleNumber: 2,
        title: 'Supervised Learning: Classification',
        topics: ['Binary classification, logistic sigmoid activation, odds ratio and log-odds', 'Binary cross-entropy loss function, gradient derivation', 'Multinomial logistic regression (Softmax classification) for multi-class problems', 'K-Nearest Neighbors (k-NN): distance metrics, curse of dimensionality', 'Generative vs discriminative classifiers: Naive Bayes (Gaussian, Multinomial, Bernoulli)']
      },
      {
        moduleNumber: 3,
        title: 'Tree-Based Methods & SVM',
        topics: ['Decision Trees: ID3, C4.5, CART algorithms, impurity metrics (Entropy, Gini)', 'Information gain, splitting criteria, regression trees (MSE minimization)', 'Tree pruning: pre-pruning, cost-complexity post-pruning', 'Support Vector Machines (SVM): maximal margin classifier, geometric margin', 'Soft-margin SVM (slack variables C), primal and dual formulations, Mercer’s theorem and Kernels (RBF, Polynomial)']
      },
      {
        moduleNumber: 4,
        title: 'Ensemble Learning & Model Evaluation',
        topics: ['Ensemble philosophy: reducing variance vs reducing bias', 'Bootstrap Aggregating (Bagging), Random Forests, feature subsampling, Out-Of-Bag (OOB) error', 'Boosting concepts: AdaBoost, Gradient Boosting, XGBoost fundamentals', 'Evaluation metrics: Confusion matrix, Precision, Recall, F1-score, ROC curve, AUC-ROC, PR curve', 'K-Fold cross-validation, stratified splits, grid search hyperparameter tuning']
      }
    ]
  },
  {
    code: 'BITS F114',
    title: 'Artificial and Computational Intelligence',
    faculty: 'Prof. S. Das',
    credits: 4,
    description: 'Comprehensive study of rational agents, classical state-space search, heuristic algorithms, adversarial search in games, and formal logic reasoning.',
    referenceBooks: [
      'Stuart Russell and Peter Norvig - Artificial Intelligence: A Modern Approach (4th Edition, Pearson)',
      'Nils J. Nilsson - Principles of Artificial Intelligence (Morgan Kaufmann)',
      'David Poole and Alan Mackworth - Artificial Intelligence: Foundations of Computational Agents (Cambridge University Press)'
    ],
    modules: [
      {
        moduleNumber: 1,
        title: 'Intelligent Agents & Problem Solving',
        topics: ['Agent architectures, PEAS (Performance, Environment, Actuators, Sensors) framework', 'Environment characteristics: observable, deterministic, episodic, static, discrete, single-agent', 'State-space problem formulations: initial state, actions, transition model, goal test, path cost', 'Formulating classic problems: 8-puzzle, 8-queens, vacuum world, route finding']
      },
      {
        moduleNumber: 2,
        title: 'Uninformed & Informed Heuristic Search',
        topics: ['Search tree data structures, node expansion, open/closed lists (frontier/explored)', 'Uninformed search: Breadth-First Search (BFS), Uniform-Cost Search (Dijkstra), Depth-First Search (DFS), Depth-Limited Search, Iterative Deepening Search (IDS)', 'Time and space complexity, completeness, and optimality comparisons', 'Informed search: Heuristic evaluation functions h(n), Greedy Best-First Search', 'A* Search: evaluation function f(n) = g(n) + h(n), conditions for optimality: admissibility and consistency (monotonicity)', 'Memory-bounded heuristic search: Iterative-Deepening A* (IDA*), Recursive Best-First Search (RBFS), Simplified Memory Bounded A* (SMA*)', 'Dominance among heuristics, generating heuristics from relaxed problems and pattern databases']
      },
      {
        moduleNumber: 3,
        title: 'Adversarial Search & Game Playing',
        topics: ['Game formulation: two-player, zero-sum, perfect information games', 'Minimax algorithm, game trees, backed-up values, optimal decision making', 'Alpha-Beta pruning: pruning conditions, effectiveness of move ordering', 'Heuristic evaluation functions in cut-off search, quiescence search, horizon effect', 'Transposition tables, state hashing, and game-playing engines']
      },
      {
        moduleNumber: 4,
        title: 'Knowledge Representation & Classical Logic',
        topics: ['Knowledge-based agents, Wumpus World environment', 'Propositional logic: syntax, semantics, truth tables, entailment, validity, satisfiability', 'Inference rules: Modus Ponens, Resolution principle, Conjunctive Normal Form (CNF)', 'Horn clauses, forward chaining, and backward chaining algorithms', 'First-Order Logic (FOL): syntax, terms, predicates, quantifiers (universal, existential), unification, generalized Modus Ponens']
      }
    ]
  }
];

export const dailyNotes = [
  // ===================== WEEK 1 (17 Aug - 22 Aug 2026) =====================
  {
    id: 'lec-01',
    date: '17 Aug 2026',
    day: 'Monday',
    week: 1,
    subjectCode: 'BITS F112',
    subjectName: 'Mathematical Foundations for Machine Learning',
    instructor: 'Dr. A. Sen',
    sessionType: 'Theory Lecture',
    module: 'Module 1: Linear Algebra & Vector Spaces',
    title: 'Lecture 1: Vector Spaces, Subspaces, Linear Combinations & Span',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Introduction to vector spaces over real fields, formal axioms, definition of vector subspaces, linear independence, spanning sets, and basis.',
    keyFormulas: [
      'Linear Combination: v = \\sum_{i=1}^k c_i v_i \\quad (c_i \\in \\mathbb{R})',
      'Linear Independence: \\sum_{i=1}^n c_i v_i = 0 \\implies c_1 = c_2 = \\dots = c_n = 0',
      'Subspace Criteria: (i) 0 \\in S, \\; (ii) u, v \\in S \\implies u+v \\in S, \\; (iii) c \\in \\mathbb{R}, u \\in S \\implies cu \\in S'
    ],
    detailedNotes: `
### 1. Vector Spaces & Structural Axioms
A vector space over the field of real numbers $\\mathbb{R}$ is a set $V$ equipped with two binary operations: vector addition $(+)$ and scalar multiplication $(\\cdot)$, satisfying:
1. **Closure**: $\\forall u, v \\in V, u + v \\in V$ and $\\forall c \\in \\mathbb{R}, c u \\in V$.
2. **Associativity & Commutativity**: $u + (v + w) = (u + v) + w$ and $u + v = v + u$.
3. **Additive Identity & Inverse**: $\\exists \\mathbf{0} \\in V$ such that $v + \\mathbf{0} = v$, and $\\forall v, \\exists -v$ such that $v + (-v) = \\mathbf{0}$.
4. **Distributivity**: $c(u + v) = cu + cv$ and $(c + d)v = cv + dv$.

### 2. Vector Subspaces
A subset $S \\subseteq V$ is a subspace of $V$ if and only if:
- The zero vector $\\mathbf{0} \\in S$.
- $S$ is closed under vector addition: $\\forall u, v \\in S \\implies u + v \\in S$.
- $S$ is closed under scalar multiplication: $\\forall c \\in \\mathbb{R}, u \\in S \\implies c u \\in S$.

### 3. Linear Span and Independence
- **Span**: The set of all linear combinations of a set of vectors $\\{v_1, \\dots, v_k\\}$ is denoted $\\text{span}(v_1, \\dots, v_k)$. It forms the smallest subspace containing these vectors.
- **Linear Independence**: Vectors $\\{v_1, \\dots, v_k\\}$ are linearly independent if no vector in the set can be expressed as a linear combination of the others.
- **Basis**: A linearly independent set that spans the entire vector space $V$. The number of vectors in any basis of $V$ is called the **dimension** of $V$, $\\dim(V)$.
    `,
        objectives: [
      "Understand algebraic vector spaces, subspace criteria, and linear spans.",
      "Determine linear independence via Gaussian elimination and matrix rank.",
      "Construct orthonormal basis vectors and orthogonal projection operators."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Subspace Basis & Linear Span",
      "problem": "Given vectors v1 = [1, 2, 1]^T, v2 = [2, 1, 0]^T, and v3 = [4, 5, 2]^T in R^3, verify if v3 in span(v1, v2) and compute dim(span(v1, v2, v3)).",
      "steps": [
            "Step 1: Set up vector equation c1*v1 + c2*v2 = v3, which yields system: [c1 + 2*c2 = 4], [2*c1 + c2 = 5], [c1 + 0*c2 = 2].",
            "Step 2: From row 3, c1 = 2.",
            "Step 3: Substitute c1 = 2 into row 1: 2 + 2*c2 = 4 => 2*c2 = 2 => c2 = 1.",
            "Step 4: Check consistency with row 2: 2(2) + 1(1) = 4 + 1 = 5 (Satisfied).",
            "Step 5: Since v3 = 2*v1 + 1*v2, v3 is redundant. The vectors v1 and v2 are linearly independent (neither is a scalar multiple of the other)."
      ],
      "finalAnswer": "v3 lies in span(v1, v2). A basis for the span is {[1, 2, 1]^T, [2, 1, 0]^T}, and dim(span(v1, v2, v3)) = 2."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof: (1) Intersection of Subspaces: Let u, w in U cap W. Since U is a subspace, u+w in U and c*u in U. Since W is a subspace, u+w in W and c*u in W. Hence u+w in U cap W and c*u in U cap W. Zero vector 0 in U and 0 in W => 0 in U cap W. Thus U cap W is a subspace. (2) Union of Subspaces: Take R^2 with U = x-axis = span([1,0]^T) and W = y-axis = span([0,1]^T). Vector [1,0]^T in U, [0,1]^T in W. Their sum [1,1]^T not in U and not in W, so not in U cup W. Hence U cup W is not closed under addition and not a subspace unless one is contained in the other.",
      "rubric": [
            "4 Marks for formal proof of intersection closure",
            "4 Marks for counterexample of union with distinct axes",
            "2 Marks for necessary condition (U subseteq W or W subseteq U)"
      ]
},
        readings: "Gilbert Strang - Linear Algebra and Learning from Data, Chapter 1 (Vectors & Matrices), pp. 1-24.",
    codeSnippet: `import numpy as np

# Check linear independence via matrix rank
A = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])
rank = np.linalg.matrix_rank(A)
print(f"Matrix Rank: {rank}")  # Rank is 2, indicating linear dependence (col 3 = 2*col 2 - col 1)`,
    mstReviewQuestion: 'Prove that the intersection of two subspaces U and W of a vector space V is also a subspace of V, but their union is generally not a subspace.'
  },
  {
    id: 'lec-02',
    date: '18 Aug 2026',
    day: 'Tuesday',
    week: 1,
    subjectCode: 'BITS F111',
    subjectName: 'Introduction to Statistical Methods',
    instructor: 'Prof. R. Sharma',
    sessionType: 'Theory Lecture',
    module: 'Module 1: Probability Theory & Random Variables',
    title: 'Lecture 1: Axioms of Probability, Conditional Probability & Bayes Theorem',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Probability foundations, Kolmogorov axioms, sample spaces, law of total probability, and Bayes Theorem with machine learning prior/posterior derivations.',
    keyFormulas: [
      'Kolmogorov Axioms: P(E) \\ge 0, \\; P(\\Omega) = 1, \\; P(\\cup_{i=1}^\\infty E_i) = \\sum_{i=1}^\\infty P(E_i) \\text{ (disjoint)}',
      'Conditional Probability: P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(B) > 0',
      'Law of Total Probability: P(B) = \\sum_{i=1}^k P(B|A_i) P(A_i)',
      'Bayes Theorem: P(A_j|B) = \\frac{P(B|A_j) P(A_j)}{\\sum_{i=1}^k P(B|A_i) P(A_i)}'
    ],
    detailedNotes: `
### 1. Sample Space and Probability Axioms
Let $\\Omega$ be the sample space of an experiment. An event $E$ is a subset of $\\Omega$. Probability is a measure $P: \\mathcal{F} \\to [0, 1]$ satisfying:
- $0 \\le P(E) \\le 1$ for any event $E$.
- $P(\\Omega) = 1$ and $P(\\emptyset) = 0$.
- For mutually exclusive events $A_1, A_2, \\dots$, $P(\\bigcup_i A_i) = \\sum_i P(A_i)$.

### 2. Conditional Probability and Independence
- Two events $A$ and $B$ are statistically independent if and only if $P(A \\cap B) = P(A) \\cdot P(B)$, which implies $P(A|B) = P(A)$.
- Conditional probability updates belief based on evidence: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.

### 3. Bayes Theorem in Data Science
Bayes theorem provides the mathematical framework for updating beliefs:
$$P(\\theta | D) = \\frac{P(D | \\theta) \\cdot P(\\theta)}{P(D)}$$
Where:
- $P(\\theta)$ is the **Prior** distribution.
- $P(D | \\theta)$ is the **Likelihood** of the data given parameters.
- $P(D)$ is the **Marginal Likelihood** (evidence).
- $P(\\theta | D)$ is the **Posterior** distribution.
    `,
        objectives: [
      "Master Kolmogorov axioms and conditional probability rules.",
      "Derive Bayes' Theorem and apply it to posterior probability calculations.",
      "Understand Base Rate Fallacy and evidence weighting in classification."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Bayesian Posterior Calculation",
      "problem": "In an automated spam filter, 20% of incoming emails are spam. The word 'FREE' appears in 70% of spam emails, but only in 5% of non-spam emails. If an email contains 'FREE', compute the probability that it is spam.",
      "steps": [
            "Step 1: Identify given probabilities: Prior P(Spam) = 0.20, P(Ham) = 0.80. Likelihood P(FREE | Spam) = 0.70, P(FREE | Ham) = 0.05.",
            "Step 2: Compute marginal probability P(FREE) via Total Probability: P(FREE) = P(FREE|Spam)*P(Spam) + P(FREE|Ham)*P(Ham).",
            "Step 3: Calculate terms: (0.70 * 0.20) = 0.14. (0.05 * 0.80) = 0.04. Total P(FREE) = 0.14 + 0.04 = 0.18.",
            "Step 4: Apply Bayes' Theorem: P(Spam | FREE) = P(FREE | Spam)*P(Spam) / P(FREE) = 0.14 / 0.18 = 7/9 = 0.7778."
      ],
      "finalAnswer": "P(Spam | 'FREE') = 77.78%. The presence of the word 'FREE' increases the probability of spam from 20% prior to 77.78% posterior."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Let S denote spam and F denote word 'FREE'. P(S)=0.20, P(H)=0.80, P(F|S)=0.70, P(F|H)=0.05. (a) By Law of Total Probability: P(F) = P(F|S)P(S) + P(F|H)P(H) = (0.70)(0.20) + (0.05)(0.80) = 0.14 + 0.04 = 0.18. (b) By Bayes Theorem: P(S|F) = [P(F|S)P(S)] / P(F) = 0.14 / 0.18 = 0.7778 (77.78%). Interpretation: The likelihood ratio P(F|S)/P(F|H) = 0.70/0.05 = 14:1 strongly shifts the odds in favor of the spam hypothesis.",
      "rubric": [
            "2 Marks for setting up prior and likelihood equations",
            "4 Marks for total probability denominator calculation",
            "3 Marks for posterior probability calculation",
            "1 Mark for concluding interpretation"
      ]
},
        readings: "Sheldon Ross - Introduction to Probability and Statistics, Chapter 3, pp. 68-85.",
    codeSnippet: `def bayes_posterior(prior_A, likelihood_B_given_A, prior_not_A, likelihood_B_given_not_A):
    # P(B) via law of total probability
    marginal_B = (likelihood_B_given_A * prior_A) + (likelihood_B_given_not_A * prior_not_A)
    # Posterior P(A|B)
    posterior_A = (likelihood_B_given_A * prior_A) / marginal_B
    return posterior_A

# Example: Disease prevalence 1%, test sensitivity 99%, false positive 5%
p_disease_given_pos = bayes_posterior(0.01, 0.99, 0.99, 0.05)
print(f"P(Disease | Positive Test) = {p_disease_given_pos:.4f}")  # ~16.64%`,
    mstReviewQuestion: 'A rare disease affects 0.5% of the population. A screening test has 98% sensitivity and 3% false-positive rate. If an individual tests positive, what is the probability they actually have the disease?'
  },
  {
    id: 'lec-03',
    date: '19 Aug 2026',
    day: 'Wednesday',
    week: 1,
    subjectCode: 'BITS F113',
    subjectName: 'Machine Learning',
    instructor: 'Dr. K. Patel',
    sessionType: 'Theory Lecture',
    module: 'Module 1: Supervised Learning - Regression',
    title: 'Lecture 1: Introduction to Supervised Learning & Ordinary Least Squares (OLS)',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Supervised learning paradigm, hypothesis space, Mean Squared Error loss formulation, and analytical Normal Equation derivation for Linear Regression.',
    keyFormulas: [
      'Hypothesis Model: \\hat{y} = h_\\theta(x) = \\theta^T x = \\theta_0 + \\theta_1 x_1 + \\dots + \\theta_d x_d',
      'Cost Function (MSE): J(\\theta) = \\frac{1}{2m} \\sum_{i=1}^m (h_\\theta(x^{(i)}) - y^{(i)})^2 = \\frac{1}{2m} ||X\\theta - y||_2^2',
      'Normal Equation (Closed-form): \\theta^* = (X^T X)^{-1} X^T y'
    ],
    detailedNotes: `
### 1. The Supervised Learning Framework
Given a dataset of $m$ labeled training instances $D = \\{(x^{(1)}, y^{(1)}), \\dots, (x^{(m)}, y^{(m)})\\}$ where $x^{(i)} \\in \\mathbb{R}^d$ is the feature vector and $y^{(i)} \\in \\mathbb{R}$ is the continuous target:
- Goal: Find a hypothesis function $h: \\mathcal{X} \\to \\mathcal{Y}$ that minimizes the expected generalization error.

### 2. Ordinary Least Squares (OLS) Derivation
Expressing the cost function in matrix form:
$$J(\\theta) = \\frac{1}{2m} (X\\theta - y)^T (X\\theta - y)$$
Expanding:
$$J(\\theta) = \\frac{1}{2m} (\\theta^T X^T X \\theta - 2 y^T X \\theta + y^T y)$$
Taking gradient with respect to $\\theta$ and equating to 0:
$$\\nabla_\\theta J(\\theta) = \\frac{1}{m} (X^T X \\theta - X^T y) = 0$$
$$X^T X \\theta = X^T y \\implies \\theta^* = (X^T X)^{-1} X^T y$$
Provided $X^T X$ is full rank (invertible), this gives the unique global minimum.
    `,
        objectives: [
      "Formulate empirical risk minimization for linear regression.",
      "Derive the closed-form Normal Equations using vector differential calculus.",
      "Analyze multicollinearity and numerical conditioning of design matrix X."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Computing OLS Normal Equations by Hand",
      "problem": "Given 3 observations: (x=1, y=2), (x=2, y=3), and (x=3, y=5), compute the optimal parameters theta = [theta_0, theta_1]^T using Normal Equations.",
      "steps": [
            "Step 1: Set up design matrix X and target y: X = [[1, 1], [1, 2], [1, 3]], y = [2, 3, 5]^T.",
            "Step 2: Compute X^T X = [[3, 6], [6, 14]]. Determinant det(X^T X) = 3(14) - 36 = 6.",
            "Step 3: Invert X^T X: (X^T X)^(-1) = (1/6) * [[14, -6], [-6, 3]].",
            "Step 4: Compute X^T y = [1*2 + 1*3 + 1*5, 1*2 + 2*3 + 3*5]^T = [10, 23]^T.",
            "Step 5: Multiply: theta = (1/6) * [[14*10 - 6*23], [-6*10 + 3*23]] = (1/6) * [2, 9]^T = [0.333, 1.500]^T."
      ],
      "finalAnswer": "Fitted model: y_hat = 0.333 + 1.500*x. Intercept theta_0 = 0.333, slope theta_1 = 1.500."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "1. Derivation: Cost J(theta) = (1/2m) (X*theta - y)^T (X*theta - y). Expanding: J(theta) = (1/2m) [theta^T X^T X theta - 2 y^T X theta + y^T y]. Taking derivative w.r.t theta: grad J(theta) = (1/m) [X^T X theta - X^T y] = 0. Therefore X^T X theta = X^T y => theta* = (X^T X)^(-1) X^T y. 2. Non-invertibility: Occurs when rank(X) < d (multicollinearity between features or d > m samples). 3. Remedy: Ridge regularization adds lambda*I, making (X^T X + lambda*I) strictly positive definite with positive eigenvalues, guaranteeing unique invertibility.",
      "rubric": [
            "4 Marks for complete matrix derivative derivation",
            "3 Marks for explaining two singularity conditions",
            "3 Marks for Ridge regularization positive-definiteness proof"
      ]
},
        readings: "Christopher Bishop - PRML, Chapter 3 (Linear Models for Regression), pp. 137-152.",
    codeSnippet: `import numpy as np

# Analytical Ordinary Least Squares via Normal Equations
X = np.array([[1, 1], [1, 2], [1, 3], [1, 4]]) # with intercept column
y = np.array([2.1, 3.9, 6.2, 8.0])

# theta = (X^T X)^(-1) X^T y
theta = np.linalg.inv(X.T @ X) @ X.T @ y
print(f"Optimal parameters (intercept, slope): {theta}")`,
    mstReviewQuestion: 'Derive the normal equation for multiple linear regression. Explain two conditions under which X^T X is non-invertible (singular) and how regularization overcomes this issue.'
  },
  {
    id: 'lec-04',
    date: '20 Aug 2026',
    day: 'Thursday',
    week: 1,
    subjectCode: 'BITS F114',
    subjectName: 'Artificial and Computational Intelligence',
    instructor: 'Prof. S. Das',
    sessionType: 'Theory Lecture',
    module: 'Module 1: Intelligent Agents & Problem Solving',
    title: 'Lecture 1: Intelligent Agents, PEAS Framework & State Space Formulation',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Rational agents, agent function vs agent program, PEAS specification, environment properties, and formal 5-tuple state-space search formulation.',
    keyFormulas: [
      'Agent Function: f: P^* \\to A \\quad (Percept \\; sequences \\to Actions)',
      'Search Problem 5-Tuple: \\langle S_0, \\text{Actions}(s), \\text{Result}(s, a), \\text{Goal-Test}(s), \\text{Path-Cost}(c) \\rangle',
      'Branching Factor: b, \\; \\text{Depth}: d \\implies \\text{Total Nodes} = 1 + b + b^2 + \\dots + b^d = O(b^d)'
    ],
    detailedNotes: `
### 1. Rational Agents and PEAS Framework
A rational agent selects actions that maximize its expected performance measure given its percept history:
- **P**erformance measure: Evaluation criterion of agent behavior.
- **E**nvironment: External context/surroundings the agent operates in.
- **A**ctuators: Mechanisms by which the agent modifies the environment.
- **S**ensors: Sensory inputs through which percepts are received.

### 2. Environment Taxonomy
- **Fully Observable vs Partially Observable**: Complete sensory state vs incomplete.
- **Deterministic vs Stochastic**: Next state uniquely determined by current state and action.
- **Episodic vs Sequential**: Action selection in an episode is independent of previous episodes.
- **Static vs Dynamic**: Environment does not change while the agent is deliberating.
- **Discrete vs Continuous**: Finite distinct states/actions vs continuous real values.
    `,
        objectives: [
      "Formulate formal state-space graphs with states, actions, and cost models.",
      "Evaluate admissibility and consistency criteria for heuristic functions.",
      "Trace search frontiers (Open and Closed lists) step-by-step for optimal pathfinding."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: A* Search Step-by-Step Path Trace",
      "problem": "Given start node S and goal node G with step costs: S->A (cost 2, h=5), S->B (cost 4, h=3), A->G (cost 5, h=0), B->G (cost 2, h=0). Trace A* search execution and identify the optimal path.",
      "steps": [
            "Step 1: Initialize priority queue with Start S: g(S)=0, h(S)=6 => f(S)=6. Explored set = {}.",
            "Step 2: Pop S (f=6). Expand S: Neighbor A has g(A)=2, h(A)=5 => f(A)=7. Neighbor B has g(B)=4, h(B)=3 => f(B)=7. Add A, B to Open list. Explored = {S}.",
            "Step 3: Pop A (f=7). Expand A: Neighbor G has g(G)=2+5=7, h(G)=0 => f(G)=7. Add G to Open list with cost 7 via S->A->G. Explored = {S, A}.",
            "Step 4: Pop B (f=7). Expand B: Neighbor G has g(G)=4+2=6, h(G)=0 => f(G)=6. Update G on Open list with lower cost 6 via S->B->G! Explored = {S, A, B}.",
            "Step 5: Pop G (f=6). Goal test succeeds! Terminate."
      ],
      "finalAnswer": "Optimal path found: S -> B -> G with total cost C* = 6. (Suboptimal path S->A->G with cost 7 was correctly pruned)."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof that consistency implies admissibility: Let h be consistent: h(n) <= c(n, a, n') + h(n') for all n, a, n'. By induction on path length k to goal: Base case k=1: If n is one step from goal g, h(n) <= c(n, a, g) + h(g) = c(n, a, g) + 0 = h*(n), so h(n) <= h*(n). Inductive step: Assume true for nodes k-1 steps from goal. For node n at distance k, h(n) <= c(n, a, n') + h(n') <= c(n, a, n') + h*(n') = h*(n). Therefore h(n) <= h*(n) for all nodes n, proving admissibility. Proof of optimality in graph search: When h is consistent, f(n) = g(n) + h(n) is monotonically non-decreasing along any path. This ensures that whenever A* expands a node n, it has already found the optimal path to n, preventing reopened closed nodes and guaranteeing optimal goal termination.",
      "rubric": [
            "4 Marks for inductive proof that consistency implies admissibility",
            "4 Marks for monotonicity proof of f-values along paths",
            "2 Marks for graph search optimality conclusion"
      ]
},
        readings: "Russell & Norvig - AIMA (4th Ed), Chapter 3 (Solving Problems by Searching), pp. 63-95.",
    codeSnippet: `# Classical State Space Representation for 8-Puzzle
class PuzzleState:
    def __init__(self, board, parent=None, action=None, cost=0):
        self.board = board  # 3x3 tuple
        self.parent = parent
        self.action = action
        self.cost = cost

    def get_actions(self):
        # returns valid moves for blank tile (0)
        blank_idx = self.board.index(0)
        row, col = divmod(blank_idx, 3)
        moves = []
        if row > 0: moves.append('UP')
        if row < 2: moves.append('DOWN')
        if col > 0: moves.append('LEFT')
        if col < 2: moves.append('RIGHT')
        return moves`,
    mstReviewQuestion: 'Specify the PEAS framework and environment characteristics for an Automated Diagnostic Medical Advisor system.'
  },
  {
    id: 'lec-05',
    date: '21 Aug 2026',
    day: 'Friday',
    week: 1,
    subjectCode: 'BITS F112',
    subjectName: 'Mathematical Foundations / Stats (Lab & Tutorial)',
    instructor: 'Dr. A. Sen / Prof. R. Sharma',
    sessionType: 'Lab & Tutorial',
    module: 'Lab 1: Computational Linear Algebra & Probability Simulation',
    title: 'Tutorial 1: Vector Space Simulations, Matrix Rank & Empirical Probability',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Hands-on Python laboratory on matrix subspaces, verifying linear independence using SVD/QR decompositions, and Monte Carlo probability simulations.',
    keyFormulas: [
      'Condition Number: \\kappa(A) = \\frac{\\sigma_{\\max}(A)}{\\sigma_{\\min}(A)}',
      'Relative Error Bound: \\frac{||\\delta x||}{||x||} \\le \\kappa(A) \\frac{||\\delta b||}{||b||}'
    ],
    detailedNotes: `
### Lab Objectives:
1. Constructing arbitrary random vector spaces in NumPy and measuring linear subspace dimensions.
2. Checking matrix rank, column space basis, and null space basis using scipy.linalg.null_space.
3. Conducting 100,000 Monte Carlo trials to empirically verify Bayes theorem and conditional distributions.
    `,
        objectives: [
      "Understand algebraic vector spaces, subspace criteria, and linear spans.",
      "Determine linear independence via Gaussian elimination and matrix rank.",
      "Construct orthonormal basis vectors and orthogonal projection operators."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Subspace Basis & Linear Span",
      "problem": "Given vectors v1 = [1, 2, 1]^T, v2 = [2, 1, 0]^T, and v3 = [4, 5, 2]^T in R^3, verify if v3 in span(v1, v2) and compute dim(span(v1, v2, v3)).",
      "steps": [
            "Step 1: Set up vector equation c1*v1 + c2*v2 = v3, which yields system: [c1 + 2*c2 = 4], [2*c1 + c2 = 5], [c1 + 0*c2 = 2].",
            "Step 2: From row 3, c1 = 2.",
            "Step 3: Substitute c1 = 2 into row 1: 2 + 2*c2 = 4 => 2*c2 = 2 => c2 = 1.",
            "Step 4: Check consistency with row 2: 2(2) + 1(1) = 4 + 1 = 5 (Satisfied).",
            "Step 5: Since v3 = 2*v1 + 1*v2, v3 is redundant. The vectors v1 and v2 are linearly independent (neither is a scalar multiple of the other)."
      ],
      "finalAnswer": "v3 lies in span(v1, v2). A basis for the span is {[1, 2, 1]^T, [2, 1, 0]^T}, and dim(span(v1, v2, v3)) = 2."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof: (1) Intersection of Subspaces: Let u, w in U cap W. Since U is a subspace, u+w in U and c*u in U. Since W is a subspace, u+w in W and c*u in W. Hence u+w in U cap W and c*u in U cap W. Zero vector 0 in U and 0 in W => 0 in U cap W. Thus U cap W is a subspace. (2) Union of Subspaces: Take R^2 with U = x-axis = span([1,0]^T) and W = y-axis = span([0,1]^T). Vector [1,0]^T in U, [0,1]^T in W. Their sum [1,1]^T not in U and not in W, so not in U cup W. Hence U cup W is not closed under addition and not a subspace unless one is contained in the other.",
      "rubric": [
            "4 Marks for formal proof of intersection closure",
            "4 Marks for counterexample of union with distinct axes",
            "2 Marks for necessary condition (U subseteq W or W subseteq U)"
      ]
},
        readings: "Gilbert Strang - Linear Algebra and Learning from Data, Chapter 1 (Vectors & Matrices), pp. 1-24.",
    codeSnippet: `import numpy as np
from scipy import linalg

# Nullspace and Column space analysis
A = np.array([[1, 2, 3], [2, 4, 6], [1, 1, 1]], dtype=float)
ns = linalg.null_space(A)
print(f"Null space basis vector:\n{ns}")
print(f"Verification A @ ns = 0:\n{np.allclose(A @ ns, 0)}")`,
    mstReviewQuestion: 'Explain why the condition number of a matrix determines the numerical stability when solving linear systems Ax = b.'
  },
  {
    id: 'lec-06',
    date: '22 Aug 2026',
    day: 'Saturday',
    week: 1,
    subjectCode: 'BITS F113',
    subjectName: 'Machine Learning / AI (Lab & Tutorial)',
    instructor: 'Dr. K. Patel / Prof. S. Das',
    sessionType: 'Lab & Tutorial',
    module: 'Lab 1: Optimization & State Space Algorithms',
    title: 'Tutorial 1: Vectorized Batch Gradient Descent & State Space Graph Builders',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Implementing vectorized batch gradient descent from scratch for linear regression and creating problem transition graphs for 8-puzzle and graph search.',
    keyFormulas: [
      'Gradient Descent Step: \\theta^{(t+1)} = \\theta^{(t)} - \\alpha \\frac{1}{m} X^T (X\\theta^{(t)} - y)',
      'Learning Rate Criterion: 0 < \\alpha < \\frac{2}{\\lambda_{\\max}(X^T X)}'
    ],
    detailedNotes: `
### Lab Objectives:
1. Implemented Batch Gradient Descent without any third-party ML packages (pure NumPy).
2. Monitored cost function $J(\\theta)$ convergence across varying learning rates $\\alpha \\in \\{0.001, 0.01, 0.1, 0.5\\}$.
3. Verified the equivalence between analytical Normal Equation weights and Gradient Descent converged weights.
    `,
        objectives: [
      "Understand algebraic vector spaces, subspace criteria, and linear spans.",
      "Determine linear independence via Gaussian elimination and matrix rank.",
      "Construct orthonormal basis vectors and orthogonal projection operators."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Subspace Basis & Linear Span",
      "problem": "Given vectors v1 = [1, 2, 1]^T, v2 = [2, 1, 0]^T, and v3 = [4, 5, 2]^T in R^3, verify if v3 in span(v1, v2) and compute dim(span(v1, v2, v3)).",
      "steps": [
            "Step 1: Set up vector equation c1*v1 + c2*v2 = v3, which yields system: [c1 + 2*c2 = 4], [2*c1 + c2 = 5], [c1 + 0*c2 = 2].",
            "Step 2: From row 3, c1 = 2.",
            "Step 3: Substitute c1 = 2 into row 1: 2 + 2*c2 = 4 => 2*c2 = 2 => c2 = 1.",
            "Step 4: Check consistency with row 2: 2(2) + 1(1) = 4 + 1 = 5 (Satisfied).",
            "Step 5: Since v3 = 2*v1 + 1*v2, v3 is redundant. The vectors v1 and v2 are linearly independent (neither is a scalar multiple of the other)."
      ],
      "finalAnswer": "v3 lies in span(v1, v2). A basis for the span is {[1, 2, 1]^T, [2, 1, 0]^T}, and dim(span(v1, v2, v3)) = 2."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof: (1) Intersection of Subspaces: Let u, w in U cap W. Since U is a subspace, u+w in U and c*u in U. Since W is a subspace, u+w in W and c*u in W. Hence u+w in U cap W and c*u in U cap W. Zero vector 0 in U and 0 in W => 0 in U cap W. Thus U cap W is a subspace. (2) Union of Subspaces: Take R^2 with U = x-axis = span([1,0]^T) and W = y-axis = span([0,1]^T). Vector [1,0]^T in U, [0,1]^T in W. Their sum [1,1]^T not in U and not in W, so not in U cup W. Hence U cup W is not closed under addition and not a subspace unless one is contained in the other.",
      "rubric": [
            "4 Marks for formal proof of intersection closure",
            "4 Marks for counterexample of union with distinct axes",
            "2 Marks for necessary condition (U subseteq W or W subseteq U)"
      ]
},
        readings: "Gilbert Strang - Linear Algebra and Learning from Data, Chapter 1 (Vectors & Matrices), pp. 1-24.",
    codeSnippet: `def batch_gradient_descent(X, y, alpha=0.01, epochs=1000):
    m, n = X.shape
    theta = np.zeros(n)
    cost_history = []
    
    for _ in range(epochs):
        error = X @ theta - y
        grad = (1 / m) * (X.T @ error)
        theta -= alpha * grad
        cost = (1 / (2 * m)) * np.sum(error ** 2)
        cost_history.append(cost)
        
    return theta, cost_history`,
    mstReviewQuestion: 'Explain how learning rate selection affects gradient descent convergence. What happens if the learning rate is too small vs too large?'
  },

  // ===================== WEEK 2 (24 Aug - 29 Aug 2026) =====================
  {
    id: 'lec-07',
    date: '24 Aug 2026',
    day: 'Monday',
    week: 2,
    subjectCode: 'BITS F112',
    subjectName: 'Mathematical Foundations for Machine Learning',
    instructor: 'Dr. A. Sen',
    sessionType: 'Theory Lecture',
    module: 'Module 1: Linear Algebra & Vector Spaces',
    title: 'Lecture 2: Inner Products, Orthogonality, Gram-Schmidt & Projections',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Inner product spaces, Cauchy-Schwarz inequality, orthogonal complements, projection theorem, and Gram-Schmidt orthogonalization process.',
    keyFormulas: [
      'Cauchy-Schwarz Inequality: |\\langle u, v \\rangle| \\le ||u|| \\cdot ||v||',
      'Orthogonal Projection of y onto x: \\text{proj}_x(y) = \\frac{\\langle y, x \\rangle}{||x||^2} x',
      'Projection Matrix onto Subspace col(A): P = A(A^T A)^{-1} A^T \\quad (P^2 = P, P^T = P)',
      'Gram-Schmidt Formula: u_k = v_k - \\sum_{j=1}^{k-1} \\frac{\\langle v_k, u_j \\rangle}{||u_j||^2} u_j'
    ],
    detailedNotes: `
### 1. Inner Product Spaces and Geometric Angles
An inner product $\\langle u, v \\rangle$ generalizes dot products to abstract vector spaces. The angle $\\theta$ between vectors is defined by:
$$\\cos \\theta = \\frac{\\langle u, v \\rangle}{||u|| \\cdot ||v||}$$
Two vectors are orthogonal ($u \\perp v$) iff $\\langle u, v \\rangle = 0$.

### 2. Orthogonal Projection Theorem
Let $W$ be a finite-dimensional subspace of an inner product space $V$. Every vector $y \\in V$ can be uniquely decomposed as:
$$y = \\hat{y} + z$$
where $\\hat{y} \\in W$ and $z \\in W^\\perp$. The vector $\\hat{y} = \\text{proj}_W(y)$ is the closest vector in $W$ to $y$, minimizing $||y - w||$ for all $w \\in W$.
    `,
        objectives: [
      "Comprehend core theoretical concepts, definitions, and operational mechanisms.",
      "Analyze mathematical formulations and verify algorithmic complexity guarantees.",
      "Apply practical computational methods and diagnose model behavior in ML/AI systems."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Analytical Calculation & Verification",
      "problem": "Given typical model inputs for Lecture 2, evaluate the system performance metric and determine the optimal decision threshold.",
      "steps": [
            "Step 1: Identify given parameters and state space constraints.",
            "Step 2: Apply the governing mathematical relationship and substitute model values.",
            "Step 3: Solve the algebraic system for unknown parameters.",
            "Step 4: Verify boundary conditions and numerical stability.",
            "Step 5: Compare final computed metric against empirical performance baselines."
      ],
      "finalAnswer": "Calculated optimal parameter satisfies all theoretical bounds with zero residual deviation."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Model Answer for MST Examination: (1) Theoretical Foundation: Formulate the problem statement using formal mathematical symbols and state assumptions clearly. (2) Analytical Derivation: Expand equations step-by-step, explaining each transition and theorem used. (3) Concrete Application: Solve the given numerical values to determine exact metrics. (4) Conclusion: Discuss computational complexity and practical engineering implications for large-scale AI/ML pipelines.",
      "rubric": [
            "3 Marks for formal definition and notation",
            "4 Marks for mathematical derivation steps",
            "3 Marks for correct final numerical answer and analysis"
      ]
},
        readings: "Marc Peter Deisenroth, A. Aldo Faisal - Mathematics for Machine Learning, Chapter 3-5.",
    codeSnippet: `def gram_schmidt(V):
    """V is a matrix whose columns are linearly independent vectors"""
    k = V.shape[1]
    U = np.zeros_like(V, dtype=float)
    for i in range(k):
        v = V[:, i]
        projection = sum((np.dot(v, U[:, j]) / np.dot(U[:, j], U[:, j])) * U[:, j] for j in range(i))
        U[:, i] = v - projection
    # Normalize to orthonormal basis
    Q = U / np.linalg.norm(U, axis=0)
    return Q`,
    mstReviewQuestion: 'Show that the projection matrix P = A(A^T A)^{-1} A^T is both idempotent (P^2 = P) and symmetric (P^T = P).'
  },
  {
    id: 'lec-08',
    date: '25 Aug 2026',
    day: 'Tuesday',
    week: 2,
    subjectCode: 'BITS F111',
    subjectName: 'Introduction to Statistical Methods',
    instructor: 'Prof. R. Sharma',
    sessionType: 'Theory Lecture',
    module: 'Module 1: Probability Theory & Random Variables',
    title: 'Lecture 2: Discrete Random Variables, PMF, Expectation & Common Distributions',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Formal treatment of discrete random variables, Cumulative Distribution Functions, moments, variance, and deep dive into Bernoulli, Binomial, and Poisson processes.',
    keyFormulas: [
      'Expectation: E[X] = \\sum_{x} x \\cdot P(X = x)',
      'Variance: \\text{Var}(X) = E[X^2] - (E[X])^2',
      'Binomial PMF: P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad E[X]=np, \\; \\text{Var}(X)=np(1-p)',
      'Poisson PMF: P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad E[X] = \\lambda, \\; \\text{Var}(X) = \\lambda'
    ],
    detailedNotes: `
### 1. Discrete Random Variables
A random variable $X$ is a measurable function mapping the sample space $\\Omega$ into the real numbers $\\mathbb{R}$.
- Probability Mass Function (PMF): $p_X(x) = P(X = x)$ such that $\\sum_x p_X(x) = 1$ and $p_X(x) \\ge 0$.
- Cumulative Distribution Function (CDF): $F_X(x) = P(X \\le x) = \\sum_{k \\le x} p_X(k)$.

### 2. The Poisson Approximation to the Binomial
When $n$ is large and $p$ is small such that $\\lambda = np$ remains constant:
$$\\lim_{n \\to \\infty} \\binom{n}{k} p^k (1-p)^{n-k} = \\frac{\\lambda^k e^{-\\lambda}}{k!}$$
Used extensively in modeling call center arrivals, website traffic hits, and packet drop occurrences.
    `,
        objectives: [
      "Distinguish between continuous and discrete probability distributions.",
      "Standardize variables into standard normal Z-scores.",
      "Apply the Central Limit Theorem to calculate sample mean confidence intervals."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Central Limit Theorem & Sample Mean Probability",
      "problem": "Execution times of database query logs have a mean of mu = 45 ms and standard deviation sigma = 12 ms (skewed non-normal distribution). For a random sample of n = 36 queries, compute the probability that the sample mean exceeds 48 ms.",
      "steps": [
            "Step 1: Check CLT conditions: Sample size n = 36 >= 30, so by the Central Limit Theorem, the sample mean X_bar is approximately Gaussian.",
            "Step 2: Compute mean of sample mean: mu_Xbar = mu = 45 ms.",
            "Step 3: Compute Standard Error of the mean (SEM): sigma_Xbar = sigma / sqrt(n) = 12 / sqrt(36) = 12 / 6 = 2.0 ms.",
            "Step 4: Standardize to Z-score: Z = (48 - 45) / 2.0 = 3 / 2.0 = 1.50.",
            "Step 5: Lookup standard normal tail probability: P(Z > 1.50) = 1 - Phi(1.50) = 1 - 0.9332 = 0.0668."
      ],
      "finalAnswer": "Probability P(X_bar > 48 ms) = 0.0668 (6.68%)."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Formal Statement of Central Limit Theorem (Lindeberg-Levy): Let X1, X2, ..., Xn be a sequence of independent and identically distributed (i.i.d.) random variables with mean E[Xi] = mu and finite variance Var(Xi) = sigma^2 < infinity. Let X_bar_n = (1/n) sum_{i=1}^n Xi. Then as n -> infinity, the standardized variable Zn = (X_bar_n - mu) / (sigma / sqrt(n)) converges in distribution to the standard normal distribution N(0, 1): lim_{n->inf} P(Zn <= z) = Phi(z). Proof Outline using MGFs: Let Yi = (Xi - mu)/sigma, so E[Yi]=0, Var(Yi)=1. The standardized sum is Zn = (1/sqrt(n)) sum Yi. MGF of Zn is M_Zn(t) = [M_Y(t/sqrt(n))]^n. Taylor expansion of M_Y: M_Y(s) = 1 + s E[Y] + (s^2/2) E[Y^2] + o(s^2) = 1 + 0 + s^2/2 + o(s^2). Thus M_Zn(t) = [1 + t^2/(2n) + o(t^2/n)]^n -> exp(t^2 / 2) as n -> infinity, which is the exact MGF of the standard normal N(0, 1). By the continuity theorem, Zn converges in distribution to N(0, 1).",
      "rubric": [
            "4 Marks for formal theorem conditions and mathematical limit statement",
            "4 Marks for MGF expansion and limit to exp(t^2/2)",
            "2 Marks for statistical significance explanation in inference"
      ]
},
        readings: "Sheldon Ross - Introduction to Probability and Statistics, Chapter 5 (Special Random Variables), pp. 165-192.",
    codeSnippet: `from scipy.stats import binom, poisson

# Binomial vs Poisson comparison (n=100, p=0.03 => lambda=3.0)
n, p = 100, 0.03
lam = n * p
k = 3
p_binom = binom.pmf(k, n, p)
p_poisson = poisson.pmf(k, lam)
print(f"Binomial P(X=3): {p_binom:.5f} | Poisson Approximation: {p_poisson:.5f}")`,
    mstReviewQuestion: 'Derive the mean and variance of a Poisson distributed random variable starting from its probability mass function.'
  },
  {
    id: 'lec-09',
    date: '26 Aug 2026',
    day: 'Wednesday',
    week: 2,
    subjectCode: 'BITS F113',
    subjectName: 'Machine Learning',
    instructor: 'Dr. K. Patel',
    sessionType: 'Theory Lecture',
    module: 'Module 1: Supervised Learning - Regression',
    title: 'Lecture 2: Multiple Linear Regression, Polynomial Features & Bias-Variance Tradeoff',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Expanding to multi-dimensional feature spaces, non-linear modeling via polynomial feature mappings, and mathematical formulation of the Bias-Variance Decomposition.',
    keyFormulas: [
      'Generalization Error Decomposition: E[(y - \\hat{f}(x))^2] = \\text{Bias}^2(\\hat{f}(x)) + \\text{Var}(\\hat{f}(x)) + \\sigma^2',
      '\\text{Bias}(\\hat{f}(x)) = E[\\hat{f}(x)] - f(x)',
      '\\text{Var}(\\hat{f}(x)) = E[(\\hat{f}(x) - E[\\hat{f}(x)])^2]',
      'Irreducible Noise: \\sigma^2 = \\text{Var}(\\epsilon)'
    ],
    detailedNotes: `
### 1. Multiple Linear Regression Matrix Formulation
Given target vector $y \\in \\mathbb{R}^m$ and design matrix $X \\in \\mathbb{R}^{m \\times (d+1)}$:
$$y = X \\beta + \\epsilon, \\quad \\epsilon \\sim \\mathcal{N}(0, \\sigma^2 I)$$
The Gauss-Markov theorem states that the OLS estimator $\\hat{\\beta} = (X^T X)^{-1} X^T y$ is the **BLUE** (Best Linear Unbiased Estimator).

### 2. The Fundamental Bias-Variance Tradeoff
- **High Bias (Underfitting)**: Simple model fails to capture underlying data structure. High training and test errors.
- **High Variance (Overfitting)**: Model fits noise in training data. Low training error, very high test error.
- As model complexity increases, bias strictly decreases while variance monotonically increases.
    `,
        objectives: [
      "Understand algebraic vector spaces, subspace criteria, and linear spans.",
      "Determine linear independence via Gaussian elimination and matrix rank.",
      "Construct orthonormal basis vectors and orthogonal projection operators."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Subspace Basis & Linear Span",
      "problem": "Given vectors v1 = [1, 2, 1]^T, v2 = [2, 1, 0]^T, and v3 = [4, 5, 2]^T in R^3, verify if v3 in span(v1, v2) and compute dim(span(v1, v2, v3)).",
      "steps": [
            "Step 1: Set up vector equation c1*v1 + c2*v2 = v3, which yields system: [c1 + 2*c2 = 4], [2*c1 + c2 = 5], [c1 + 0*c2 = 2].",
            "Step 2: From row 3, c1 = 2.",
            "Step 3: Substitute c1 = 2 into row 1: 2 + 2*c2 = 4 => 2*c2 = 2 => c2 = 1.",
            "Step 4: Check consistency with row 2: 2(2) + 1(1) = 4 + 1 = 5 (Satisfied).",
            "Step 5: Since v3 = 2*v1 + 1*v2, v3 is redundant. The vectors v1 and v2 are linearly independent (neither is a scalar multiple of the other)."
      ],
      "finalAnswer": "v3 lies in span(v1, v2). A basis for the span is {[1, 2, 1]^T, [2, 1, 0]^T}, and dim(span(v1, v2, v3)) = 2."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof: (1) Intersection of Subspaces: Let u, w in U cap W. Since U is a subspace, u+w in U and c*u in U. Since W is a subspace, u+w in W and c*u in W. Hence u+w in U cap W and c*u in U cap W. Zero vector 0 in U and 0 in W => 0 in U cap W. Thus U cap W is a subspace. (2) Union of Subspaces: Take R^2 with U = x-axis = span([1,0]^T) and W = y-axis = span([0,1]^T). Vector [1,0]^T in U, [0,1]^T in W. Their sum [1,1]^T not in U and not in W, so not in U cup W. Hence U cup W is not closed under addition and not a subspace unless one is contained in the other.",
      "rubric": [
            "4 Marks for formal proof of intersection closure",
            "4 Marks for counterexample of union with distinct axes",
            "2 Marks for necessary condition (U subseteq W or W subseteq U)"
      ]
},
        readings: "Gilbert Strang - Linear Algebra and Learning from Data, Chapter 1 (Vectors & Matrices), pp. 1-24.",
    codeSnippet: `from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

# Polynomial Feature mapping
poly = PolynomialFeatures(degree=3, include_bias=False)
X_poly = poly.fit_transform(X) # generates [x, x^2, x^3]
model = LinearRegression().fit(X_poly, y)`,
    mstReviewQuestion: 'Mathematically derive the decomposition of expected mean squared error into Bias^2, Variance, and Irreducible Noise.'
  },
  {
    id: 'lec-10',
    date: '27 Aug 2026',
    day: 'Thursday',
    week: 2,
    subjectCode: 'BITS F114',
    subjectName: 'Artificial and Computational Intelligence',
    instructor: 'Prof. S. Das',
    sessionType: 'Theory Lecture',
    module: 'Module 2: Uninformed Search Strategies',
    title: 'Lecture 2: Uninformed Search: BFS, DFS, Uniform-Cost Search & Iterative Deepening',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Graph search algorithm design, node frontier structures, and thorough comparative analysis of BFS, DFS, UCS, and IDS in terms of completeness, optimality, time and space complexity.',
    keyFormulas: [
      'BFS: Time = O(b^d), \\; Space = O(b^d) \\; (Complete, Optimal for unit step costs)',
      'DFS: Time = O(b^m), \\; Space = O(bm) \\; (Not Complete, Not Optimal)',
      'Uniform Cost Search: Time = O(b^{1 + \\lfloor C^* / \\epsilon \\rfloor}), \\; Space = O(b^{1 + \\lfloor C^* / \\epsilon \\rfloor}) \\; (Complete & Optimal)',
      'Iterative Deepening Search: Time = O(b^d), \\; Space = O(bd) \\; (Complete & Optimal)'
    ],
    detailedNotes: `
### 1. Graph Search vs Tree Search
- **Tree Search**: Explores paths without checking for repeated states; can get trapped in infinite loops.
- **Graph Search**: Maintains an **explored set (closed list)** to ensure no state is expanded more than once.

### 2. Uniform-Cost Search (UCS / Dijkstra)
- Expands node with the lowest path cost $g(n)$ from the start node.
- Implemented using a Priority Queue ordered by $g(n)$.
- **Optimality Condition**: Goal test is applied when a node is *selected for expansion*, NOT when it is generated.

### 3. Iterative Deepening Search (IDS)
Combines the space-efficiency of DFS ($O(bd)$) with the completeness and optimality of BFS ($O(b^d)$).
Nodes at bottom depth $d$ are generated once; nodes at level $1$ are generated $d$ times:
$$N = d(b) + (d-1)b^2 + \\dots + 1(b^d) = O(b^d)$$
    `,
        objectives: [
      "Formulate formal state-space graphs with states, actions, and cost models.",
      "Evaluate admissibility and consistency criteria for heuristic functions.",
      "Trace search frontiers (Open and Closed lists) step-by-step for optimal pathfinding."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: A* Search Step-by-Step Path Trace",
      "problem": "Given start node S and goal node G with step costs: S->A (cost 2, h=5), S->B (cost 4, h=3), A->G (cost 5, h=0), B->G (cost 2, h=0). Trace A* search execution and identify the optimal path.",
      "steps": [
            "Step 1: Initialize priority queue with Start S: g(S)=0, h(S)=6 => f(S)=6. Explored set = {}.",
            "Step 2: Pop S (f=6). Expand S: Neighbor A has g(A)=2, h(A)=5 => f(A)=7. Neighbor B has g(B)=4, h(B)=3 => f(B)=7. Add A, B to Open list. Explored = {S}.",
            "Step 3: Pop A (f=7). Expand A: Neighbor G has g(G)=2+5=7, h(G)=0 => f(G)=7. Add G to Open list with cost 7 via S->A->G. Explored = {S, A}.",
            "Step 4: Pop B (f=7). Expand B: Neighbor G has g(G)=4+2=6, h(G)=0 => f(G)=6. Update G on Open list with lower cost 6 via S->B->G! Explored = {S, A, B}.",
            "Step 5: Pop G (f=6). Goal test succeeds! Terminate."
      ],
      "finalAnswer": "Optimal path found: S -> B -> G with total cost C* = 6. (Suboptimal path S->A->G with cost 7 was correctly pruned)."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof that consistency implies admissibility: Let h be consistent: h(n) <= c(n, a, n') + h(n') for all n, a, n'. By induction on path length k to goal: Base case k=1: If n is one step from goal g, h(n) <= c(n, a, g) + h(g) = c(n, a, g) + 0 = h*(n), so h(n) <= h*(n). Inductive step: Assume true for nodes k-1 steps from goal. For node n at distance k, h(n) <= c(n, a, n') + h(n') <= c(n, a, n') + h*(n') = h*(n). Therefore h(n) <= h*(n) for all nodes n, proving admissibility. Proof of optimality in graph search: When h is consistent, f(n) = g(n) + h(n) is monotonically non-decreasing along any path. This ensures that whenever A* expands a node n, it has already found the optimal path to n, preventing reopened closed nodes and guaranteeing optimal goal termination.",
      "rubric": [
            "4 Marks for inductive proof that consistency implies admissibility",
            "4 Marks for monotonicity proof of f-values along paths",
            "2 Marks for graph search optimality conclusion"
      ]
},
        readings: "Russell & Norvig - AIMA (4th Ed), Chapter 3 (Solving Problems by Searching), pp. 63-95.",
    codeSnippet: `import heapq

def uniform_cost_search(start_state, goal_test, get_neighbors):
    frontier = []
    heapq.heappush(frontier, (0, start_state, []))
    explored = set()

    while frontier:
        cost, current, path = heapq.heappop(frontier)
        if goal_test(current):
            return path + [current], cost
        if current in explored:
            continue
        explored.add(current)
        for neighbor, step_cost in get_neighbors(current):
            if neighbor not in explored:
                heapq.heappush(frontier, (cost + step_cost, neighbor, path + [current]))
    return None, float('inf')`,
    mstReviewQuestion: 'Explain why Uniform Cost Search must apply the goal test when a node is popped from the priority queue (expanded) rather than when it is generated.'
  },
  {
    id: 'lec-11',
    date: '28 Aug 2026',
    day: 'Friday',
    week: 2,
    subjectCode: 'BITS F112',
    subjectName: 'Mathematical Foundations / Stats (Lab & Tutorial)',
    instructor: 'Dr. A. Sen / Prof. R. Sharma',
    sessionType: 'Lab & Tutorial',
    module: 'Lab 2: Gram-Schmidt & Distribution Visualizations',
    title: 'Tutorial 2: Matrix QR Factorization, Orthonormalization & Probability Densities',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Implementing Gram-Schmidt orthogonalization in NumPy, performing QR decomposition, and plotting Binomial vs Poisson PMFs in Matplotlib.',
    keyFormulas: [
      'QR Factorization: A = QR \\quad (Q^T Q = I, \\; R \\text{ is upper triangular})',
      'Least Squares via QR: Rx = Q^T b'
    ],
    detailedNotes: `
### Lab Objectives:
1. Validating Gram-Schmidt numerical instability and contrasting with Householder reflections (np.linalg.qr).
2. Plotting theoretical vs simulated Poisson processes.
    `,
        objectives: [
      "Master Kolmogorov axioms and conditional probability rules.",
      "Derive Bayes' Theorem and apply it to posterior probability calculations.",
      "Understand Base Rate Fallacy and evidence weighting in classification."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Bayesian Posterior Calculation",
      "problem": "In an automated spam filter, 20% of incoming emails are spam. The word 'FREE' appears in 70% of spam emails, but only in 5% of non-spam emails. If an email contains 'FREE', compute the probability that it is spam.",
      "steps": [
            "Step 1: Identify given probabilities: Prior P(Spam) = 0.20, P(Ham) = 0.80. Likelihood P(FREE | Spam) = 0.70, P(FREE | Ham) = 0.05.",
            "Step 2: Compute marginal probability P(FREE) via Total Probability: P(FREE) = P(FREE|Spam)*P(Spam) + P(FREE|Ham)*P(Ham).",
            "Step 3: Calculate terms: (0.70 * 0.20) = 0.14. (0.05 * 0.80) = 0.04. Total P(FREE) = 0.14 + 0.04 = 0.18.",
            "Step 4: Apply Bayes' Theorem: P(Spam | FREE) = P(FREE | Spam)*P(Spam) / P(FREE) = 0.14 / 0.18 = 7/9 = 0.7778."
      ],
      "finalAnswer": "P(Spam | 'FREE') = 77.78%. The presence of the word 'FREE' increases the probability of spam from 20% prior to 77.78% posterior."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Let S denote spam and F denote word 'FREE'. P(S)=0.20, P(H)=0.80, P(F|S)=0.70, P(F|H)=0.05. (a) By Law of Total Probability: P(F) = P(F|S)P(S) + P(F|H)P(H) = (0.70)(0.20) + (0.05)(0.80) = 0.14 + 0.04 = 0.18. (b) By Bayes Theorem: P(S|F) = [P(F|S)P(S)] / P(F) = 0.14 / 0.18 = 0.7778 (77.78%). Interpretation: The likelihood ratio P(F|S)/P(F|H) = 0.70/0.05 = 14:1 strongly shifts the odds in favor of the spam hypothesis.",
      "rubric": [
            "2 Marks for setting up prior and likelihood equations",
            "4 Marks for total probability denominator calculation",
            "3 Marks for posterior probability calculation",
            "1 Mark for concluding interpretation"
      ]
},
        readings: "Sheldon Ross - Introduction to Probability and Statistics, Chapter 3, pp. 68-85.",
    codeSnippet: `import numpy as np

A = np.random.randn(4, 3)
Q, R = np.linalg.qr(A)
print("Q is orthonormal:", np.allclose(Q.T @ Q, np.eye(3)))
print("R is upper triangular:\n", np.round(R, 3))`,
    mstReviewQuestion: 'Explain how QR factorization simplifies the solution of Ordinary Least Squares without computing (X^T X)^{-1}.'
  },
  {
    id: 'lec-12',
    date: '29 Aug 2026',
    day: 'Saturday',
    week: 2,
    subjectCode: 'BITS F113',
    subjectName: 'Machine Learning / AI (Lab & Tutorial)',
    instructor: 'Dr. K. Patel / Prof. S. Das',
    sessionType: 'Lab & Tutorial',
    module: 'Lab 2: Regression Pipelines & Search Frontiers',
    title: 'Tutorial 2: Polynomial Regression with Cross-Validation & Search Frontier Profiling',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Building polynomial pipelines using Scikit-Learn, executing K-Fold Cross Validation, and profiling node memory footprints for BFS vs DFS.',
    keyFormulas: [
      'K-Fold CV Score: \\text{CV}_{(K)} = \\frac{1}{K} \\sum_{k=1}^K \\text{MSE}_k'
    ],
    detailedNotes: `
### Lab Objectives:
1. Demonstrated degree-12 polynomial overfitting on a noisy sine wave.
2. Quantified test MSE vs training MSE curves as a function of polynomial degree.
    `,
        objectives: [
      "Formulate empirical risk minimization for linear regression.",
      "Derive the closed-form Normal Equations using vector differential calculus.",
      "Analyze multicollinearity and numerical conditioning of design matrix X."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Computing OLS Normal Equations by Hand",
      "problem": "Given 3 observations: (x=1, y=2), (x=2, y=3), and (x=3, y=5), compute the optimal parameters theta = [theta_0, theta_1]^T using Normal Equations.",
      "steps": [
            "Step 1: Set up design matrix X and target y: X = [[1, 1], [1, 2], [1, 3]], y = [2, 3, 5]^T.",
            "Step 2: Compute X^T X = [[3, 6], [6, 14]]. Determinant det(X^T X) = 3(14) - 36 = 6.",
            "Step 3: Invert X^T X: (X^T X)^(-1) = (1/6) * [[14, -6], [-6, 3]].",
            "Step 4: Compute X^T y = [1*2 + 1*3 + 1*5, 1*2 + 2*3 + 3*5]^T = [10, 23]^T.",
            "Step 5: Multiply: theta = (1/6) * [[14*10 - 6*23], [-6*10 + 3*23]] = (1/6) * [2, 9]^T = [0.333, 1.500]^T."
      ],
      "finalAnswer": "Fitted model: y_hat = 0.333 + 1.500*x. Intercept theta_0 = 0.333, slope theta_1 = 1.500."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "1. Derivation: Cost J(theta) = (1/2m) (X*theta - y)^T (X*theta - y). Expanding: J(theta) = (1/2m) [theta^T X^T X theta - 2 y^T X theta + y^T y]. Taking derivative w.r.t theta: grad J(theta) = (1/m) [X^T X theta - X^T y] = 0. Therefore X^T X theta = X^T y => theta* = (X^T X)^(-1) X^T y. 2. Non-invertibility: Occurs when rank(X) < d (multicollinearity between features or d > m samples). 3. Remedy: Ridge regularization adds lambda*I, making (X^T X + lambda*I) strictly positive definite with positive eigenvalues, guaranteeing unique invertibility.",
      "rubric": [
            "4 Marks for complete matrix derivative derivation",
            "3 Marks for explaining two singularity conditions",
            "3 Marks for Ridge regularization positive-definiteness proof"
      ]
},
        readings: "Christopher Bishop - PRML, Chapter 3 (Linear Models for Regression), pp. 137-152.",
    codeSnippet: `from sklearn.pipeline import make_pipeline
from sklearn.model_selection import cross_val_score

pipeline = make_pipeline(PolynomialFeatures(degree=4), LinearRegression())
scores = cross_val_score(pipeline, X, y, cv=5, scoring='neg_mean_squared_error')
print(f"Mean 5-Fold RMSE: {np.sqrt(-scores.mean()):.4f}")`,
    mstReviewQuestion: 'Explain how learning curves of training loss vs validation loss can be used to diagnose high bias vs high variance.'
  },

  // ===================== WEEK 3 (31 Aug - 05 Sep 2026) =====================
  {
    id: 'lec-13',
    date: '31 Aug 2026',
    day: 'Monday',
    week: 3,
    subjectCode: 'BITS F112',
    subjectName: 'Mathematical Foundations for Machine Learning',
    instructor: 'Dr. A. Sen',
    sessionType: 'Theory Lecture',
    module: 'Module 2: Matrix Decompositions',
    title: 'Lecture 3: Eigenvalues, Eigenvectors, Diagonalization & Spectral Theorem',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Characteristic equations, algebraic vs geometric multiplicity, matrix diagonalization, real symmetric matrices, and the Spectral Theorem.',
    keyFormulas: [
      'Eigenvalue Equation: A v = \\lambda v \\iff (A - \\lambda I)v = 0',
      'Characteristic Polynomial: p(\\lambda) = \\det(A - \\lambda I) = 0',
      'Diagonalization: A = P D P^{-1} \\quad (\\text{where columns of P are eigenvectors})',
      'Spectral Theorem (Real Symmetric A): A = Q \\Lambda Q^T = \\sum_{i=1}^n \\lambda_i q_i q_i^T'
    ],
    detailedNotes: `
### 1. Eigenvalues and Eigenvectors
For an $n \\times n$ matrix $A$, a scalar $\\lambda$ is an eigenvalue and non-zero vector $v$ is an eigenvector if $Av = \\lambda v$.
- The trace of $A$ equals the sum of its eigenvalues: $\\text{tr}(A) = \\sum_{i} \\lambda_i$.
- The determinant of $A$ equals the product of its eigenvalues: $\\det(A) = \\prod_{i} \\lambda_i$.

### 2. Spectral Theorem for Symmetric Matrices
If $A \\in \\mathbb{R}^{n \\times n}$ is real and symmetric ($A = A^T$):
1. All eigenvalues $\\lambda_1, \\dots, \\lambda_n$ are strictly real.
2. Eigenvectors corresponding to distinct eigenvalues are mutually orthogonal.
3. There exists an orthonormal basis of $\\mathbb{R}^n$ consisting of eigenvectors of $A$, meaning $A = Q \\Lambda Q^T$ where $Q^T Q = I$.
    `,
        objectives: [
      "Compute eigenvalues, eigenvectors, and characteristic polynomials.",
      "Decompose real symmetric matrices via the Spectral Theorem.",
      "Construct full and compact Singular Value Decompositions (SVD)."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Eigendecomposition of a 2x2 Symmetric Matrix",
      "problem": "Given symmetric matrix A = [[4, 2], [2, 1]], compute its eigenvalues, orthonormal eigenvectors, and verify the spectral decomposition A = Q Lambda Q^T.",
      "steps": [
            "Step 1: Characteristic polynomial: det(A - lambda*I) = (4 - lambda)(1 - lambda) - (2)(2) = lambda^2 - 5*lambda + 4 - 4 = lambda(lambda - 5) = 0.",
            "Step 2: Eigenvalues: lambda_1 = 5, lambda_2 = 0.",
            "Step 3: For lambda_1 = 5: (A - 5I)v = [[-1, 2], [2, -4]]v = 0 => -x1 + 2*x2 = 0 => v1 = [2, 1]^T. Normalized: q1 = [2/sqrt(5), 1/sqrt(5)]^T.",
            "Step 4: For lambda_2 = 0: (A - 0I)v = [[4, 2], [2, 1]]v = 0 => 2*x1 + x2 = 0 => v2 = [-1, 2]^T. Normalized: q2 = [-1/sqrt(5), 2/sqrt(5)]^T.",
            "Step 5: Verify orthogonality: q1 . q2 = (2*-1 + 1*2)/5 = 0.",
            "Step 6: Spectral reconstruction: 5 * q1 * q1^T + 0 * q2 * q2^T = 5 * (1/5) * [[4, 2], [2, 1]] = [[4, 2], [2, 1]] = A."
      ],
      "finalAnswer": "Eigenvalues: lambda1 = 5, lambda2 = 0. Orthonormal matrix Q = [[2/sqrt(5), -1/sqrt(5)], [1/sqrt(5), 2/sqrt(5)]]. Spectral theorem verified."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof that eigenvectors for distinct eigenvalues of symmetric A are orthogonal: Let A = A^T. Let Av1 = lambda1 v1 and Av2 = lambda2 v2 with lambda1 != lambda2. Consider the inner product (Av1)^T v2 = (lambda1 v1)^T v2 = lambda1 (v1^T v2). Also, (Av1)^T v2 = v1^T A^T v2 = v1^T A v2 (since A = A^T) = v1^T (lambda2 v2) = lambda2 (v1^T v2). Subtracting the two expressions gives: (lambda1 - lambda2)(v1^T v2) = 0. Since lambda1 != lambda2, (lambda1 - lambda2) != 0. Therefore, v1^T v2 = 0, proving that eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. For repeated eigenvalues, Gram-Schmidt can always be applied to find an orthonormal basis for the eigenspace.",
      "rubric": [
            "4 Marks for transpose inner product identity setup",
            "4 Marks for algebraic factoring (lambda1 - lambda2)(v1^T v2) = 0",
            "2 Marks for concluding orthogonality for symmetric operators"
      ]
},
        readings: "Gilbert Strang - Linear Algebra and Learning from Data, Chapter 2 (Eigenvalues & SVD), pp. 65-98.",
    codeSnippet: `import numpy as np

# Spectral decomposition of symmetric matrix
A = np.array([[4, 2], [2, 3]]) # symmetric
eigenvalues, eigenvectors = np.linalg.eigh(A)
print("Eigenvalues:", eigenvalues)
print("Orthonormal Eigenvectors:\n", eigenvectors)
# Reconstruct A = Q Lambda Q^T
reconstructed = eigenvectors @ np.diag(eigenvalues) @ eigenvectors.T
print("Reconstruction matches:", np.allclose(A, reconstructed))`,
    mstReviewQuestion: 'State and prove the Spectral Theorem for real symmetric matrices. Why is this property fundamental for Principal Component Analysis?'
  },
  {
    id: 'lec-14',
    date: '01 Sep 2026',
    day: 'Tuesday',
    week: 3,
    subjectCode: 'BITS F111',
    subjectName: 'Introduction to Statistical Methods',
    instructor: 'Prof. R. Sharma',
    sessionType: 'Theory Lecture',
    module: 'Module 2: Continuous Distributions & Limit Theorems',
    title: 'Lecture 3: Continuous Distributions, Normal Density & Central Limit Theorem',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Probability density functions, Uniform, Exponential, Gaussian distributions, Standardization, and the Central Limit Theorem (CLT) proof outline.',
    keyFormulas: [
      'Normal PDF: f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left( -\\frac{(x - \\mu)^2}{2\\sigma^2} \\right)',
      'Standard Normal (Z): Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)',
      'Central Limit Theorem: \\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i \\xrightarrow{d} \\mathcal{N}\\left(\\mu, \\frac{\\sigma^2}{n}\\right)'
    ],
    detailedNotes: `
### 1. The Gaussian (Normal) Distribution
The normal distribution $\\mathcal{N}(\\mu, \\sigma^2)$ is central to probability due to maximum entropy under variance constraints.
- Properties: Symmetric about $\\mu$, inflection points at $\\mu \\pm \\sigma$.
- Empirical Rule: $68.27\\%$ within $1\\sigma$, $95.45\\%$ within $2\\sigma$, $99.73\\%$ within $3\\sigma$.

### 2. Central Limit Theorem (CLT)
Let $X_1, X_2, \\dots, X_n$ be independent and identically distributed (i.i.d.) random variables with mean $\\mu$ and finite variance $\\sigma^2 < \\infty$. As $n \\to \\infty$, the standardized sample mean converges in distribution to standard normal:
$$Z_n = \\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0, 1)$$
    `,
        objectives: [
      "Distinguish between continuous and discrete probability distributions.",
      "Standardize variables into standard normal Z-scores.",
      "Apply the Central Limit Theorem to calculate sample mean confidence intervals."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Central Limit Theorem & Sample Mean Probability",
      "problem": "Execution times of database query logs have a mean of mu = 45 ms and standard deviation sigma = 12 ms (skewed non-normal distribution). For a random sample of n = 36 queries, compute the probability that the sample mean exceeds 48 ms.",
      "steps": [
            "Step 1: Check CLT conditions: Sample size n = 36 >= 30, so by the Central Limit Theorem, the sample mean X_bar is approximately Gaussian.",
            "Step 2: Compute mean of sample mean: mu_Xbar = mu = 45 ms.",
            "Step 3: Compute Standard Error of the mean (SEM): sigma_Xbar = sigma / sqrt(n) = 12 / sqrt(36) = 12 / 6 = 2.0 ms.",
            "Step 4: Standardize to Z-score: Z = (48 - 45) / 2.0 = 3 / 2.0 = 1.50.",
            "Step 5: Lookup standard normal tail probability: P(Z > 1.50) = 1 - Phi(1.50) = 1 - 0.9332 = 0.0668."
      ],
      "finalAnswer": "Probability P(X_bar > 48 ms) = 0.0668 (6.68%)."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Formal Statement of Central Limit Theorem (Lindeberg-Levy): Let X1, X2, ..., Xn be a sequence of independent and identically distributed (i.i.d.) random variables with mean E[Xi] = mu and finite variance Var(Xi) = sigma^2 < infinity. Let X_bar_n = (1/n) sum_{i=1}^n Xi. Then as n -> infinity, the standardized variable Zn = (X_bar_n - mu) / (sigma / sqrt(n)) converges in distribution to the standard normal distribution N(0, 1): lim_{n->inf} P(Zn <= z) = Phi(z). Proof Outline using MGFs: Let Yi = (Xi - mu)/sigma, so E[Yi]=0, Var(Yi)=1. The standardized sum is Zn = (1/sqrt(n)) sum Yi. MGF of Zn is M_Zn(t) = [M_Y(t/sqrt(n))]^n. Taylor expansion of M_Y: M_Y(s) = 1 + s E[Y] + (s^2/2) E[Y^2] + o(s^2) = 1 + 0 + s^2/2 + o(s^2). Thus M_Zn(t) = [1 + t^2/(2n) + o(t^2/n)]^n -> exp(t^2 / 2) as n -> infinity, which is the exact MGF of the standard normal N(0, 1). By the continuity theorem, Zn converges in distribution to N(0, 1).",
      "rubric": [
            "4 Marks for formal theorem conditions and mathematical limit statement",
            "4 Marks for MGF expansion and limit to exp(t^2/2)",
            "2 Marks for statistical significance explanation in inference"
      ]
},
        readings: "Sheldon Ross - Introduction to Probability and Statistics, Chapter 5 (Special Random Variables), pp. 165-192.",
    codeSnippet: `import numpy as np
import scipy.stats as stats

# CLT demonstration with uniform distribution
sample_means = [np.mean(np.random.uniform(0, 10, size=50)) for _ in range(10000)]
print(f"Empirical mean of means: {np.mean(sample_means):.3f} (True: 5.0)")
print(f"Empirical std of means: {np.std(sample_means):.3f} (True: {10/np.sqrt(12)/np.sqrt(50):.3f})")`,
    mstReviewQuestion: 'State the Central Limit Theorem formally. Explain its practical importance in establishing confidence intervals for population means.'
  },
  {
    id: 'lec-15',
    date: '02 Sep 2026',
    day: 'Wednesday',
    week: 3,
    subjectCode: 'BITS F113',
    subjectName: 'Machine Learning',
    instructor: 'Dr. K. Patel',
    sessionType: 'Theory Lecture',
    module: 'Module 2: Supervised Learning - Classification',
    title: 'Lecture 3: Logistic Regression, Sigmoid Function & Cross-Entropy Loss',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Binary classification mechanics, odds ratios, log-odds mapping, Sigmoid function, Maximum Likelihood Estimation, and Binary Cross-Entropy derivation.',
    keyFormulas: [
      'Logistic Sigmoid: \\sigma(z) = \\frac{1}{1 + e^{-z}}, \\quad \\sigma\'(z) = \\sigma(z)(1 - \\sigma(z))',
      'Likelihood: L(\\theta) = \\prod_{i=1}^m [h_\\theta(x^{(i)})]^{y^{(i)}} [1 - h_\\theta(x^{(i)})]^{1 - y^{(i)}}',
      'Binary Cross-Entropy Loss: J(\\theta) = -\\frac{1}{m} \\sum_{i=1}^m [y^{(i)} \\log(h_\\theta(x^{(i)})) + (1 - y^{(i)}) \\log(1 - h_\\theta(x^{(i)}))]',
      'Gradient: \\nabla_\\theta J(\\theta) = \\frac{1}{m} X^T (\\sigma(X\\theta) - y)'
    ],
    detailedNotes: `
### 1. From Linear to Logistic Regression
Linear regression is ill-suited for classification because its outputs are unbounded ($(-\\infty, \\infty)$). Logistic regression squashes linear outputs into probabilities $(0, 1)$ via the logistic sigmoid:
$$P(Y=1|X=x) = \\sigma(\\theta^T x) = \\frac{1}{1 + e^{-\\theta^T x}}$$
The log-odds (logit) is a linear function of $x$:
$$\\ln\\left(\\frac{p}{1 - p}\\right) = \\theta^T x$$

### 2. Loss Convexity
Unlike MSE with a sigmoid activation which is non-convex with numerous local minima, the Binary Cross-Entropy loss $J(\\theta)$ is strictly convex with a unique global minimum.
    `,
        objectives: [
      "Formulate empirical risk minimization for linear regression.",
      "Derive the closed-form Normal Equations using vector differential calculus.",
      "Analyze multicollinearity and numerical conditioning of design matrix X."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Computing OLS Normal Equations by Hand",
      "problem": "Given 3 observations: (x=1, y=2), (x=2, y=3), and (x=3, y=5), compute the optimal parameters theta = [theta_0, theta_1]^T using Normal Equations.",
      "steps": [
            "Step 1: Set up design matrix X and target y: X = [[1, 1], [1, 2], [1, 3]], y = [2, 3, 5]^T.",
            "Step 2: Compute X^T X = [[3, 6], [6, 14]]. Determinant det(X^T X) = 3(14) - 36 = 6.",
            "Step 3: Invert X^T X: (X^T X)^(-1) = (1/6) * [[14, -6], [-6, 3]].",
            "Step 4: Compute X^T y = [1*2 + 1*3 + 1*5, 1*2 + 2*3 + 3*5]^T = [10, 23]^T.",
            "Step 5: Multiply: theta = (1/6) * [[14*10 - 6*23], [-6*10 + 3*23]] = (1/6) * [2, 9]^T = [0.333, 1.500]^T."
      ],
      "finalAnswer": "Fitted model: y_hat = 0.333 + 1.500*x. Intercept theta_0 = 0.333, slope theta_1 = 1.500."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "1. Derivation: Cost J(theta) = (1/2m) (X*theta - y)^T (X*theta - y). Expanding: J(theta) = (1/2m) [theta^T X^T X theta - 2 y^T X theta + y^T y]. Taking derivative w.r.t theta: grad J(theta) = (1/m) [X^T X theta - X^T y] = 0. Therefore X^T X theta = X^T y => theta* = (X^T X)^(-1) X^T y. 2. Non-invertibility: Occurs when rank(X) < d (multicollinearity between features or d > m samples). 3. Remedy: Ridge regularization adds lambda*I, making (X^T X + lambda*I) strictly positive definite with positive eigenvalues, guaranteeing unique invertibility.",
      "rubric": [
            "4 Marks for complete matrix derivative derivation",
            "3 Marks for explaining two singularity conditions",
            "3 Marks for Ridge regularization positive-definiteness proof"
      ]
},
        readings: "Christopher Bishop - PRML, Chapter 3 (Linear Models for Regression), pp. 137-152.",
    codeSnippet: `import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-np.clip(z, -250, 250)))

def logistic_loss(theta, X, y):
    m = len(y)
    h = sigmoid(X @ theta)
    epsilon = 1e-15
    loss = - (1 / m) * np.sum(y * np.log(h + epsilon) + (1 - y) * np.log(1 - h + epsilon))
    return loss`,
    mstReviewQuestion: 'Derive the gradient of the Binary Cross-Entropy loss function with respect to weight parameter theta in Logistic Regression.'
  },
  {
    id: 'lec-16',
    date: '03 Sep 2026',
    day: 'Thursday',
    week: 3,
    subjectCode: 'BITS F114',
    subjectName: 'Artificial and Computational Intelligence',
    instructor: 'Prof. S. Das',
    sessionType: 'Theory Lecture',
    module: 'Module 2: Informed Search Strategies',
    title: 'Lecture 3: Heuristic Search: Greedy Best-First & A* Algorithm with Admissibility',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Heuristic evaluation functions, Greedy Best-First Search, A* evaluation function f(n)=g(n)+h(n), mathematical proof of A* optimality under admissible and consistent heuristics.',
    keyFormulas: [
      'A* Evaluation Function: f(n) = g(n) + h(n)',
      'Admissibility: 0 \\le h(n) \\le h^*(n) \\quad (\\forall n)',
      'Consistency (Triangle Inequality): h(n) \\le c(n, a, n\') + h(n\')'
    ],
    detailedNotes: `
### 1. The A* Search Algorithm
A* combines uniform-cost search (lowest path cost $g(n)$) and greedy best-first search (lowest estimated goal distance $h(n)$):
$$f(n) = g(n) + h(n)$$
where $g(n)$ is the exact cost from start to $n$, and $h(n)$ is the estimated cost from $n$ to goal.

### 2. Proof of A* Optimality
- **Tree Search**: A* is optimal if $h(n)$ is **admissible** (never overestimates the true cost to reach goal).
- **Graph Search**: A* is optimal if $h(n)$ is **consistent (monotonic)**:
$$h(n) \\le c(n, a, n') + h(n')$$
Consistency guarantees that the $f$-values along any path are monotonically non-decreasing, ensuring that the first time a goal node is expanded, it is guaranteed to be optimal.
    `,
        objectives: [
      "Formulate formal state-space graphs with states, actions, and cost models.",
      "Evaluate admissibility and consistency criteria for heuristic functions.",
      "Trace search frontiers (Open and Closed lists) step-by-step for optimal pathfinding."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: A* Search Step-by-Step Path Trace",
      "problem": "Given start node S and goal node G with step costs: S->A (cost 2, h=5), S->B (cost 4, h=3), A->G (cost 5, h=0), B->G (cost 2, h=0). Trace A* search execution and identify the optimal path.",
      "steps": [
            "Step 1: Initialize priority queue with Start S: g(S)=0, h(S)=6 => f(S)=6. Explored set = {}.",
            "Step 2: Pop S (f=6). Expand S: Neighbor A has g(A)=2, h(A)=5 => f(A)=7. Neighbor B has g(B)=4, h(B)=3 => f(B)=7. Add A, B to Open list. Explored = {S}.",
            "Step 3: Pop A (f=7). Expand A: Neighbor G has g(G)=2+5=7, h(G)=0 => f(G)=7. Add G to Open list with cost 7 via S->A->G. Explored = {S, A}.",
            "Step 4: Pop B (f=7). Expand B: Neighbor G has g(G)=4+2=6, h(G)=0 => f(G)=6. Update G on Open list with lower cost 6 via S->B->G! Explored = {S, A, B}.",
            "Step 5: Pop G (f=6). Goal test succeeds! Terminate."
      ],
      "finalAnswer": "Optimal path found: S -> B -> G with total cost C* = 6. (Suboptimal path S->A->G with cost 7 was correctly pruned)."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof that consistency implies admissibility: Let h be consistent: h(n) <= c(n, a, n') + h(n') for all n, a, n'. By induction on path length k to goal: Base case k=1: If n is one step from goal g, h(n) <= c(n, a, g) + h(g) = c(n, a, g) + 0 = h*(n), so h(n) <= h*(n). Inductive step: Assume true for nodes k-1 steps from goal. For node n at distance k, h(n) <= c(n, a, n') + h(n') <= c(n, a, n') + h*(n') = h*(n). Therefore h(n) <= h*(n) for all nodes n, proving admissibility. Proof of optimality in graph search: When h is consistent, f(n) = g(n) + h(n) is monotonically non-decreasing along any path. This ensures that whenever A* expands a node n, it has already found the optimal path to n, preventing reopened closed nodes and guaranteeing optimal goal termination.",
      "rubric": [
            "4 Marks for inductive proof that consistency implies admissibility",
            "4 Marks for monotonicity proof of f-values along paths",
            "2 Marks for graph search optimality conclusion"
      ]
},
        readings: "Russell & Norvig - AIMA (4th Ed), Chapter 3 (Solving Problems by Searching), pp. 63-95.",
    codeSnippet: `import heapq

def a_star_search(start, is_goal, get_neighbors, h):
    frontier = []
    heapq.heappush(frontier, (h(start), 0, start, []))
    explored = {}

    while frontier:
        f, g, current, path = heapq.heappop(frontier)
        if is_goal(current):
            return path + [current], g
        if current in explored and explored[current] <= g:
            continue
        explored[current] = g
        for neighbor, step_cost in get_neighbors(current):
            new_g = g + step_cost
            if neighbor not in explored or new_g < explored[neighbor]:
                heapq.heappush(frontier, (new_g + h(neighbor), new_g, neighbor, path + [current]))
    return None, float('inf')`,
    mstReviewQuestion: 'Prove that if a heuristic h(n) is consistent, it must also be admissible. Show why consistency guarantees optimality in graph search.'
  },
  {
    id: 'lec-17',
    date: '04 Sep 2026',
    day: 'Friday',
    week: 3,
    subjectCode: 'BITS F112',
    subjectName: 'Mathematical Foundations / Stats (Lab & Tutorial)',
    instructor: 'Dr. A. Sen / Prof. R. Sharma',
    sessionType: 'Lab & Tutorial',
    module: 'Lab 3: Eigendecomposition & Monte Carlo Inference',
    title: 'Tutorial 3: Computing Matrix Powers via Diagonalization & CLT Visualizer',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Using eigendecomposition to efficiently compute matrix powers A^k, verifying the Cayley-Hamilton theorem, and simulating CLT across Exponential and Poisson parent distributions.',
    keyFormulas: [
      'Matrix Powers via Diagonalization: A^k = P D^k P^{-1}'
    ],
    detailedNotes: `
### Lab Objectives:
1. Fast matrix exponentiation for Markov Chain state convergence.
2. Verified that sample means from heavily skewed Exponential distributions become strictly Gaussian for sample sizes $n \\ge 30$.
    `,
        objectives: [
      "Comprehend core theoretical concepts, definitions, and operational mechanisms.",
      "Analyze mathematical formulations and verify algorithmic complexity guarantees.",
      "Apply practical computational methods and diagnose model behavior in ML/AI systems."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Analytical Calculation & Verification",
      "problem": "Given typical model inputs for Tutorial 3, evaluate the system performance metric and determine the optimal decision threshold.",
      "steps": [
            "Step 1: Identify given parameters and state space constraints.",
            "Step 2: Apply the governing mathematical relationship and substitute model values.",
            "Step 3: Solve the algebraic system for unknown parameters.",
            "Step 4: Verify boundary conditions and numerical stability.",
            "Step 5: Compare final computed metric against empirical performance baselines."
      ],
      "finalAnswer": "Calculated optimal parameter satisfies all theoretical bounds with zero residual deviation."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Model Answer for MST Examination: (1) Theoretical Foundation: Formulate the problem statement using formal mathematical symbols and state assumptions clearly. (2) Analytical Derivation: Expand equations step-by-step, explaining each transition and theorem used. (3) Concrete Application: Solve the given numerical values to determine exact metrics. (4) Conclusion: Discuss computational complexity and practical engineering implications for large-scale AI/ML pipelines.",
      "rubric": [
            "3 Marks for formal definition and notation",
            "4 Marks for mathematical derivation steps",
            "3 Marks for correct final numerical answer and analysis"
      ]
},
        readings: "Marc Peter Deisenroth, A. Aldo Faisal - Mathematics for Machine Learning, Chapter 3-5.",
    codeSnippet: `import numpy as np

# Fast Markov transition matrix power via eigendecomposition
P = np.array([[0.8, 0.2], [0.3, 0.7]])
evals, evecs = np.linalg.eig(P)
# P^50 = V diag(evals)^50 V^(-1)
P_50 = evecs @ np.diag(evals**50) @ np.linalg.inv(evecs)
print("Stationary state reached:\n", P_50)`,
    mstReviewQuestion: 'Explain how matrix diagonalization enables computing A^{100} in O(n^3) time instead of 99 matrix multiplications.'
  },
  {
    id: 'lec-18',
    date: '05 Sep 2026',
    day: 'Saturday',
    week: 3,
    subjectCode: 'BITS F113',
    subjectName: 'Machine Learning / AI (Lab & Tutorial)',
    instructor: 'Dr. K. Patel / Prof. S. Das',
    sessionType: 'Lab & Tutorial',
    module: 'Lab 3: Logistic Regression & A* Pathfinders',
    title: 'Tutorial 3: Implementing Logistic Regression Classifier & A* Grid Maze Solver',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Gradient ascent for Logistic Regression likelihood, decision boundary plotting, and building an optimal 2D grid pathfinder using Manhattan vs Euclidean heuristics.',
    keyFormulas: [
      'Manhattan Distance: h(n) = |x_1 - x_2| + |y_1 - y_2|',
      'Euclidean Distance: h(n) = \\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}'
    ],
    detailedNotes: `
### Lab Objectives:
1. Coded 2-class logistic decision boundary visualization using contourf.
2. Compared node expansions of A* with Manhattan distance vs Euclidean distance in a grid with obstacles.
    `,
        objectives: [
      "Formulate empirical risk minimization for linear regression.",
      "Derive the closed-form Normal Equations using vector differential calculus.",
      "Analyze multicollinearity and numerical conditioning of design matrix X."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Computing OLS Normal Equations by Hand",
      "problem": "Given 3 observations: (x=1, y=2), (x=2, y=3), and (x=3, y=5), compute the optimal parameters theta = [theta_0, theta_1]^T using Normal Equations.",
      "steps": [
            "Step 1: Set up design matrix X and target y: X = [[1, 1], [1, 2], [1, 3]], y = [2, 3, 5]^T.",
            "Step 2: Compute X^T X = [[3, 6], [6, 14]]. Determinant det(X^T X) = 3(14) - 36 = 6.",
            "Step 3: Invert X^T X: (X^T X)^(-1) = (1/6) * [[14, -6], [-6, 3]].",
            "Step 4: Compute X^T y = [1*2 + 1*3 + 1*5, 1*2 + 2*3 + 3*5]^T = [10, 23]^T.",
            "Step 5: Multiply: theta = (1/6) * [[14*10 - 6*23], [-6*10 + 3*23]] = (1/6) * [2, 9]^T = [0.333, 1.500]^T."
      ],
      "finalAnswer": "Fitted model: y_hat = 0.333 + 1.500*x. Intercept theta_0 = 0.333, slope theta_1 = 1.500."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "1. Derivation: Cost J(theta) = (1/2m) (X*theta - y)^T (X*theta - y). Expanding: J(theta) = (1/2m) [theta^T X^T X theta - 2 y^T X theta + y^T y]. Taking derivative w.r.t theta: grad J(theta) = (1/m) [X^T X theta - X^T y] = 0. Therefore X^T X theta = X^T y => theta* = (X^T X)^(-1) X^T y. 2. Non-invertibility: Occurs when rank(X) < d (multicollinearity between features or d > m samples). 3. Remedy: Ridge regularization adds lambda*I, making (X^T X + lambda*I) strictly positive definite with positive eigenvalues, guaranteeing unique invertibility.",
      "rubric": [
            "4 Marks for complete matrix derivative derivation",
            "3 Marks for explaining two singularity conditions",
            "3 Marks for Ridge regularization positive-definiteness proof"
      ]
},
        readings: "Christopher Bishop - PRML, Chapter 3 (Linear Models for Regression), pp. 137-152.",
    codeSnippet: `import numpy as np

def manhattan_h(pos, goal):
    return abs(pos[0] - goal[0]) + abs(pos[1] - goal[1])

def euclidean_h(pos, goal):
    return np.sqrt((pos[0] - goal[0])**2 + (pos[1] - goal[1])**2)`,
    mstReviewQuestion: 'Between Manhattan and Euclidean distance heuristics on a 4-connected grid, which heuristic dominates the other and why?'
  },

  // ===================== WEEK 4 (07 Sep - 12 Sep 2026) =====================
  {
    id: 'lec-19',
    date: '07 Sep 2026',
    day: 'Monday',
    week: 4,
    subjectCode: 'BITS F112',
    subjectName: 'Mathematical Foundations for Machine Learning',
    instructor: 'Dr. A. Sen',
    sessionType: 'Theory Lecture',
    module: 'Module 2: Matrix Decompositions',
    title: 'Lecture 4: Singular Value Decomposition (SVD) & Low-Rank Approximations',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Full vs compact SVD, singular values and vectors, relationship to eigenvalues of A^T A, Eckart-Young-Mirsky theorem, and matrix rank reduction.',
    keyFormulas: [
      'SVD Equation: A = U \\Sigma V^T = \\sum_{i=1}^r \\sigma_i u_i v_i^T',
      'U \\in \\mathbb{R}^{m \\times m} \\; (A A^T \\text{ eigenvectors}), \\; V \\in \\mathbb{R}^{n \\times n} \\; (A^T A \\text{ eigenvectors})',
      'Singular Values: \\sigma_i = \\sqrt{\\lambda_i(A^T A)} \\ge \\sigma_2 \\ge \\dots \\ge \\sigma_r > 0',
      'Eckart-Young Theorem: A_k = \\sum_{i=1}^k \\sigma_i u_i v_i^T = \\arg\\min_{\\text{rank}(B)=k} ||A - B||_F'
    ],
    detailedNotes: `
### 1. Singular Value Decomposition
Every matrix $A \\in \\mathbb{R}^{m \\times n}$ can be factored as $A = U \\Sigma V^T$ where:
- $U$ is an $m \\times m$ orthogonal matrix (left singular vectors).
- $\\Sigma$ is an $m \\times n$ diagonal matrix with singular values $\\sigma_1 \\ge \\sigma_2 \\ge \\dots \\ge 0$.
- $V$ is an $n \\times n$ orthogonal matrix (right singular vectors).

### 2. Eckart-Young-Mirsky Theorem
The optimal rank-$k$ approximation ($k < r$) to $A$ under Frobenius or spectral norm is obtained by truncating the SVD expansion to the first $k$ terms:
$$A_k = \\sum_{i=1}^k \\sigma_i u_i v_i^T$$
The approximation error in Frobenius norm is $||A - A_k||_F = \\sqrt{\\sum_{j=k+1}^r \\sigma_j^2}$.
    `,
        objectives: [
      "Compute eigenvalues, eigenvectors, and characteristic polynomials.",
      "Decompose real symmetric matrices via the Spectral Theorem.",
      "Construct full and compact Singular Value Decompositions (SVD)."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Eigendecomposition of a 2x2 Symmetric Matrix",
      "problem": "Given symmetric matrix A = [[4, 2], [2, 1]], compute its eigenvalues, orthonormal eigenvectors, and verify the spectral decomposition A = Q Lambda Q^T.",
      "steps": [
            "Step 1: Characteristic polynomial: det(A - lambda*I) = (4 - lambda)(1 - lambda) - (2)(2) = lambda^2 - 5*lambda + 4 - 4 = lambda(lambda - 5) = 0.",
            "Step 2: Eigenvalues: lambda_1 = 5, lambda_2 = 0.",
            "Step 3: For lambda_1 = 5: (A - 5I)v = [[-1, 2], [2, -4]]v = 0 => -x1 + 2*x2 = 0 => v1 = [2, 1]^T. Normalized: q1 = [2/sqrt(5), 1/sqrt(5)]^T.",
            "Step 4: For lambda_2 = 0: (A - 0I)v = [[4, 2], [2, 1]]v = 0 => 2*x1 + x2 = 0 => v2 = [-1, 2]^T. Normalized: q2 = [-1/sqrt(5), 2/sqrt(5)]^T.",
            "Step 5: Verify orthogonality: q1 . q2 = (2*-1 + 1*2)/5 = 0.",
            "Step 6: Spectral reconstruction: 5 * q1 * q1^T + 0 * q2 * q2^T = 5 * (1/5) * [[4, 2], [2, 1]] = [[4, 2], [2, 1]] = A."
      ],
      "finalAnswer": "Eigenvalues: lambda1 = 5, lambda2 = 0. Orthonormal matrix Q = [[2/sqrt(5), -1/sqrt(5)], [1/sqrt(5), 2/sqrt(5)]]. Spectral theorem verified."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof that eigenvectors for distinct eigenvalues of symmetric A are orthogonal: Let A = A^T. Let Av1 = lambda1 v1 and Av2 = lambda2 v2 with lambda1 != lambda2. Consider the inner product (Av1)^T v2 = (lambda1 v1)^T v2 = lambda1 (v1^T v2). Also, (Av1)^T v2 = v1^T A^T v2 = v1^T A v2 (since A = A^T) = v1^T (lambda2 v2) = lambda2 (v1^T v2). Subtracting the two expressions gives: (lambda1 - lambda2)(v1^T v2) = 0. Since lambda1 != lambda2, (lambda1 - lambda2) != 0. Therefore, v1^T v2 = 0, proving that eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. For repeated eigenvalues, Gram-Schmidt can always be applied to find an orthonormal basis for the eigenspace.",
      "rubric": [
            "4 Marks for transpose inner product identity setup",
            "4 Marks for algebraic factoring (lambda1 - lambda2)(v1^T v2) = 0",
            "2 Marks for concluding orthogonality for symmetric operators"
      ]
},
        readings: "Gilbert Strang - Linear Algebra and Learning from Data, Chapter 2 (Eigenvalues & SVD), pp. 65-98.",
    codeSnippet: `import numpy as np

A = np.random.randn(20, 15)
U, S, Vt = np.linalg.svd(A, full_matrices=False)
k = 3 # rank-3 approximation
A_k = U[:, :k] @ np.diag(S[:k]) @ Vt[:k, :]
print(f"Rank of A_k: {np.linalg.matrix_rank(A_k)}")
print(f"Approximation Frobenius Error: {np.linalg.norm(A - A_k, 'fro'):.4f}")`,
    mstReviewQuestion: 'Explain the relationship between the Singular Value Decomposition (SVD) of matrix X and the Eigendecomposition of the covariance matrix X^T X.'
  },
  {
    id: 'lec-20',
    date: '08 Sep 2026',
    day: 'Tuesday',
    week: 4,
    subjectCode: 'BITS F111',
    subjectName: 'Introduction to Statistical Methods',
    instructor: 'Prof. R. Sharma',
    sessionType: 'Theory Lecture',
    module: 'Module 3: Sampling Distributions & Point/Interval Estimation',
    title: 'Lecture 4: Sampling Distributions: Student’s t, Chi-Square & F-Distributions',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Sampling distributions of sample mean and variance, Student’s t-distribution for small sample sizes, Chi-Square distribution for sample variance, and F-distribution for variance ratios.',
    keyFormulas: [
      'Sample Mean & Variance: \\bar{X} = \\frac{1}{n} \\sum X_i, \\quad S^2 = \\frac{1}{n-1} \\sum (X_i - \\bar{X})^2',
      'Chi-Square Statistic: \\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}',
      'Student’s t-Statistic: t = \\frac{\\bar{X} - \\mu}{S / \\sqrt{n}} \\sim t_{n-1}',
      'F-Statistic: F = \\frac{S_1^2 / \\sigma_1^2}{S_2^2 / \\sigma_2^2} \\sim F_{n_1-1, n_2-1}'
    ],
    detailedNotes: `
### 1. Student’s t-Distribution
When the population standard deviation $\\sigma$ is unknown and estimated by sample standard deviation $S$, the standardized mean follows a Student’s $t$-distribution with $\\nu = n - 1$ degrees of freedom:
- Shape: Bell-shaped and symmetric, but with heavier tails than the standard normal distribution.
- As $\\nu \\to \\infty$, $t_\\nu \\xrightarrow{d} \\mathcal{N}(0, 1)$.

### 2. Confidence Intervals
A $(1 - \\alpha)100\\%$ confidence interval for population mean $\\mu$ with unknown $\\sigma$:
$$\\bar{X} \\pm t_{\\alpha/2, n-1} \\frac{S}{\\sqrt{n}}$$
    `,
        objectives: [
      "Distinguish between continuous and discrete probability distributions.",
      "Standardize variables into standard normal Z-scores.",
      "Apply the Central Limit Theorem to calculate sample mean confidence intervals."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Central Limit Theorem & Sample Mean Probability",
      "problem": "Execution times of database query logs have a mean of mu = 45 ms and standard deviation sigma = 12 ms (skewed non-normal distribution). For a random sample of n = 36 queries, compute the probability that the sample mean exceeds 48 ms.",
      "steps": [
            "Step 1: Check CLT conditions: Sample size n = 36 >= 30, so by the Central Limit Theorem, the sample mean X_bar is approximately Gaussian.",
            "Step 2: Compute mean of sample mean: mu_Xbar = mu = 45 ms.",
            "Step 3: Compute Standard Error of the mean (SEM): sigma_Xbar = sigma / sqrt(n) = 12 / sqrt(36) = 12 / 6 = 2.0 ms.",
            "Step 4: Standardize to Z-score: Z = (48 - 45) / 2.0 = 3 / 2.0 = 1.50.",
            "Step 5: Lookup standard normal tail probability: P(Z > 1.50) = 1 - Phi(1.50) = 1 - 0.9332 = 0.0668."
      ],
      "finalAnswer": "Probability P(X_bar > 48 ms) = 0.0668 (6.68%)."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Formal Statement of Central Limit Theorem (Lindeberg-Levy): Let X1, X2, ..., Xn be a sequence of independent and identically distributed (i.i.d.) random variables with mean E[Xi] = mu and finite variance Var(Xi) = sigma^2 < infinity. Let X_bar_n = (1/n) sum_{i=1}^n Xi. Then as n -> infinity, the standardized variable Zn = (X_bar_n - mu) / (sigma / sqrt(n)) converges in distribution to the standard normal distribution N(0, 1): lim_{n->inf} P(Zn <= z) = Phi(z). Proof Outline using MGFs: Let Yi = (Xi - mu)/sigma, so E[Yi]=0, Var(Yi)=1. The standardized sum is Zn = (1/sqrt(n)) sum Yi. MGF of Zn is M_Zn(t) = [M_Y(t/sqrt(n))]^n. Taylor expansion of M_Y: M_Y(s) = 1 + s E[Y] + (s^2/2) E[Y^2] + o(s^2) = 1 + 0 + s^2/2 + o(s^2). Thus M_Zn(t) = [1 + t^2/(2n) + o(t^2/n)]^n -> exp(t^2 / 2) as n -> infinity, which is the exact MGF of the standard normal N(0, 1). By the continuity theorem, Zn converges in distribution to N(0, 1).",
      "rubric": [
            "4 Marks for formal theorem conditions and mathematical limit statement",
            "4 Marks for MGF expansion and limit to exp(t^2/2)",
            "2 Marks for statistical significance explanation in inference"
      ]
},
        readings: "Sheldon Ross - Introduction to Probability and Statistics, Chapter 5 (Special Random Variables), pp. 165-192.",
    codeSnippet: `from scipy import stats
import numpy as np

data = np.array([23.4, 25.1, 24.8, 26.2, 23.9, 25.5, 24.1])
n = len(data)
mean = np.mean(data)
sem = stats.sem(data)
ci_95 = stats.t.interval(0.95, df=n-1, loc=mean, scale=sem)
print(f"95% CI for mean: [{ci_95[0]:.2f}, {ci_95[1]:.2f}]")`,
    mstReviewQuestion: 'Why is Student’s t-distribution preferred over standard normal distribution when constructing confidence intervals for small samples (n < 30) with unknown variance?'
  },
  {
    id: 'lec-21',
    date: '09 Sep 2026',
    day: 'Wednesday',
    week: 4,
    subjectCode: 'BITS F113',
    subjectName: 'Machine Learning',
    instructor: 'Dr. K. Patel',
    sessionType: 'Theory Lecture',
    module: 'Module 3: Tree-Based Methods & SVM',
    title: 'Lecture 4: Decision Trees: ID3, C4.5, CART, Entropy & Gini Impurity',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Decision tree architecture, recursive partitioning, splitting criteria (Shannon Entropy vs Gini Index), Information Gain, and handling continuous features.',
    keyFormulas: [
      'Shannon Entropy: H(S) = -\\sum_{c=1}^C p_c \\log_2(p_c)',
      'Gini Impurity: G(S) = 1 - \\sum_{c=1}^C p_c^2',
      'Information Gain: \\text{IG}(S, A) = H(S) - \\sum_{v \\in \\text{Values}(A)} \\frac{|S_v|}{|S|} H(S_v)',
      'Gain Ratio: \\text{GR}(S, A) = \\frac{\\text{IG}(S, A)}{\\text{SplitInfo}(S, A)}'
    ],
    detailedNotes: `
### 1. Decision Tree Construction
Decision trees perform greedy top-down recursive binary or multi-way splitting:
1. Select the attribute that maximizes Information Gain (ID3) or Gini decrease (CART).
2. Partition the dataset according to selected attribute values.
3. Terminate recursion when nodes are pure, maximum depth is achieved, or minimum sample split thresholds are met.

### 2. Gini Impurity vs Entropy
Both metrics peak at uniform distributions and equal 0 at pure nodes.
- Gini is computationally faster as it avoids computing logarithms.
- Entropy tends to generate slightly more balanced trees.
    `,
        objectives: [
      "Compute Shannon Entropy and Gini Impurity for parent and child partitions.",
      "Calculate Information Gain to identify the optimal splitting feature in decision trees.",
      "Analyze pre-pruning and cost-complexity post-pruning techniques."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Information Gain & Gini Impurity on Attribute Split",
      "problem": "A parent dataset has 14 instances: 9 Positive and 5 Negative. An attribute A splits the data into Left Node (6 Positive, 2 Negative) and Right Node (3 Positive, 3 Negative). Compute the Information Gain of attribute A.",
      "steps": [
            "Step 1: Compute parent entropy H(S): p1 = 9/14 = 0.643, p2 = 5/14 = 0.357. H(S) = - [0.643*log2(0.643) + 0.357*log2(0.357)] = - [-0.409 - 0.531] = 0.940 bits.",
            "Step 2: Left child S_L (size 8): p1 = 6/8 = 0.75, p2 = 2/8 = 0.25. H(S_L) = - [0.75*log2(0.75) + 0.25*log2(0.25)] = - [-0.311 - 0.500] = 0.811 bits.",
            "Step 3: Right child S_R (size 6): p1 = 3/6 = 0.50, p2 = 3/6 = 0.50. H(S_R) = - [0.5*log2(0.5) + 0.5*log2(0.5)] = 1.000 bits.",
            "Step 4: Compute weighted entropy of split: H(S, A) = (8/14)*H(S_L) + (6/14)*H(S_R) = (8/14)*0.811 + (6/14)*1.000 = 0.463 + 0.429 = 0.892 bits.",
            "Step 5: Information Gain = H(S) - H(S, A) = 0.940 - 0.892 = 0.048 bits."
      ],
      "finalAnswer": "Parent Entropy = 0.940 bits, Weighted Split Entropy = 0.892 bits, Information Gain IG(S, A) = 0.048 bits."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "1. Parent Node Calculations: H(S) = -(9/14)log2(9/14) - (5/14)log2(5/14) = 0.940 bits. Gini(S) = 1 - (9/14)^2 - (5/14)^2 = 1 - 0.413 - 0.128 = 0.459. 2. Partitioned Subsets: Subset 1 (Size 8): H(S1) = -(6/8)log2(6/8) - (2/8)log2(2/8) = 0.811 bits. Gini(S1) = 1 - (6/8)^2 - (2/8)^2 = 0.375. Subset 2 (Size 6): H(S2) = -(3/6)log2(3/6) - (3/6)log2(3/6) = 1.000 bit. Gini(S2) = 1 - (3/6)^2 - (3/6)^2 = 0.500. 3. Information Gain: IG(S, A) = H(S) - [(8/14)H(S1) + (6/14)H(S2)] = 0.940 - [0.463 + 0.429] = 0.048 bits. 4. Gini Reduction: Delta Gini = Gini(S) - [(8/14)Gini(S1) + (6/14)Gini(S2)] = 0.459 - [(8/14)(0.375) + (6/14)(0.500)] = 0.459 - [0.214 + 0.214] = 0.031. Conclusion: Attribute A provides modest information gain (0.048 bits). CART favors splits that minimize weighted Gini index without computing costly log2 terms.",
      "rubric": [
            "3 Marks for Parent entropy and Gini calculations",
            "4 Marks for weighted child entropy calculations",
            "3 Marks for Information gain and comparative analysis"
      ]
},
        readings: "Tom Mitchell - Machine Learning, Chapter 3 (Decision Tree Learning), pp. 52-78.",
    codeSnippet: `import numpy as np

def entropy(labels):
    probs = np.bincount(labels) / len(labels)
    return -np.sum([p * np.log2(p) for p in probs if p > 0])

def gini(labels):
    probs = np.bincount(labels) / len(labels)
    return 1 - np.sum(probs**2)

labels = np.array([0, 0, 0, 1, 1, 1, 1, 1])
print(f"Entropy: {entropy(labels):.3f} | Gini: {gini(labels):.3f}")`,
    mstReviewQuestion: 'Calculate the Information Gain for a binary dataset of 14 instances (9 positive, 5 negative) split on an attribute with subsets of size 8 (6 pos, 2 neg) and 6 (3 pos, 3 neg).'
  },
  {
    id: 'lec-22',
    date: '10 Sep 2026',
    day: 'Thursday',
    week: 4,
    subjectCode: 'BITS F114',
    subjectName: 'Artificial and Computational Intelligence',
    instructor: 'Prof. S. Das',
    sessionType: 'Theory Lecture',
    module: 'Module 2: Informed Search Strategies',
    title: 'Lecture 4: Memory-Bounded Search: IDA*, RBFS & SMA* Algorithms',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Overcoming A* exponential memory limitations, Iterative-Deepening A* (IDA*) f-cost cutoff mechanics, Recursive Best-First Search (RBFS), and Simplified Memory Bounded A* (SMA*).',
    keyFormulas: [
      'IDA* Space Complexity: O(bd) \\; \\text{linear in depth}',
      'Cutoff Update: \\text{next\\_cutoff} = \\min \\{ f(n) \\mid f(n) > \\text{current\\_cutoff} \\}'
    ],
    detailedNotes: `
### 1. The Memory Bottleneck in A*
While A* is complete and optimally efficient in terms of expanded nodes, its space complexity $O(b^d)$ exhausts available RAM long before CPU time is exhausted on challenging combinatorial problems.

### 2. Iterative-Deepening A* (IDA*)
- Operates like Iterative Deepening Search, but cutoff thresholds are based on $f(n) = g(n) + h(n)$ values instead of depth.
- Each iteration expands all nodes with $f(n) \\le \\text{cutoff}$.
- The next cutoff is the minimum $f$-value among all pruned frontier nodes.
    `,
        objectives: [
      "Formulate formal state-space graphs with states, actions, and cost models.",
      "Evaluate admissibility and consistency criteria for heuristic functions.",
      "Trace search frontiers (Open and Closed lists) step-by-step for optimal pathfinding."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: A* Search Step-by-Step Path Trace",
      "problem": "Given start node S and goal node G with step costs: S->A (cost 2, h=5), S->B (cost 4, h=3), A->G (cost 5, h=0), B->G (cost 2, h=0). Trace A* search execution and identify the optimal path.",
      "steps": [
            "Step 1: Initialize priority queue with Start S: g(S)=0, h(S)=6 => f(S)=6. Explored set = {}.",
            "Step 2: Pop S (f=6). Expand S: Neighbor A has g(A)=2, h(A)=5 => f(A)=7. Neighbor B has g(B)=4, h(B)=3 => f(B)=7. Add A, B to Open list. Explored = {S}.",
            "Step 3: Pop A (f=7). Expand A: Neighbor G has g(G)=2+5=7, h(G)=0 => f(G)=7. Add G to Open list with cost 7 via S->A->G. Explored = {S, A}.",
            "Step 4: Pop B (f=7). Expand B: Neighbor G has g(G)=4+2=6, h(G)=0 => f(G)=6. Update G on Open list with lower cost 6 via S->B->G! Explored = {S, A, B}.",
            "Step 5: Pop G (f=6). Goal test succeeds! Terminate."
      ],
      "finalAnswer": "Optimal path found: S -> B -> G with total cost C* = 6. (Suboptimal path S->A->G with cost 7 was correctly pruned)."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof that consistency implies admissibility: Let h be consistent: h(n) <= c(n, a, n') + h(n') for all n, a, n'. By induction on path length k to goal: Base case k=1: If n is one step from goal g, h(n) <= c(n, a, g) + h(g) = c(n, a, g) + 0 = h*(n), so h(n) <= h*(n). Inductive step: Assume true for nodes k-1 steps from goal. For node n at distance k, h(n) <= c(n, a, n') + h(n') <= c(n, a, n') + h*(n') = h*(n). Therefore h(n) <= h*(n) for all nodes n, proving admissibility. Proof of optimality in graph search: When h is consistent, f(n) = g(n) + h(n) is monotonically non-decreasing along any path. This ensures that whenever A* expands a node n, it has already found the optimal path to n, preventing reopened closed nodes and guaranteeing optimal goal termination.",
      "rubric": [
            "4 Marks for inductive proof that consistency implies admissibility",
            "4 Marks for monotonicity proof of f-values along paths",
            "2 Marks for graph search optimality conclusion"
      ]
},
        readings: "Russell & Norvig - AIMA (4th Ed), Chapter 3 (Solving Problems by Searching), pp. 63-95.",
    codeSnippet: `# Conceptual structure of IDA*
def ida_star(root, is_goal, h):
    cutoff = h(root)
    while True:
        t = search(root, 0, cutoff, is_goal, h)
        if t == "FOUND": return True
        if t == float('inf'): return False
        cutoff = t`,
    mstReviewQuestion: 'Explain the tradeoff between IDA* and standard A* regarding node regeneration and memory consumption.'
  },
  {
    id: 'lec-23',
    date: '11 Sep 2026',
    day: 'Friday',
    week: 4,
    subjectCode: 'BITS F112',
    subjectName: 'Mathematical Foundations / Stats (Lab & Tutorial)',
    instructor: 'Dr. A. Sen / Prof. R. Sharma',
    sessionType: 'Lab & Tutorial',
    module: 'Lab 4: SVD Compression & Confidence Bounds',
    title: 'Tutorial 4: Grayscale Image Compression with SVD & Empirical Confidence Intervals',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Compressing grayscale and RGB images via low-rank SVD truncation, calculating compression ratios, and running 10,000 CI simulations to evaluate nominal 95% coverage.',
    keyFormulas: [
      'Compression Storage Ratio: \\frac{k(m + n + 1)}{mn}'
    ],
    detailedNotes: `
### Lab Objectives:
1. Reconstructed a 512x512 image using rank-5, rank-20, and rank-50 approximations, retaining 92% of variance with only 15% of storage.
2. Verified that exactly ~950 out of 1000 computed Student-t confidence intervals contain the true population mean.
    `,
        objectives: [
      "Compute eigenvalues, eigenvectors, and characteristic polynomials.",
      "Decompose real symmetric matrices via the Spectral Theorem.",
      "Construct full and compact Singular Value Decompositions (SVD)."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Eigendecomposition of a 2x2 Symmetric Matrix",
      "problem": "Given symmetric matrix A = [[4, 2], [2, 1]], compute its eigenvalues, orthonormal eigenvectors, and verify the spectral decomposition A = Q Lambda Q^T.",
      "steps": [
            "Step 1: Characteristic polynomial: det(A - lambda*I) = (4 - lambda)(1 - lambda) - (2)(2) = lambda^2 - 5*lambda + 4 - 4 = lambda(lambda - 5) = 0.",
            "Step 2: Eigenvalues: lambda_1 = 5, lambda_2 = 0.",
            "Step 3: For lambda_1 = 5: (A - 5I)v = [[-1, 2], [2, -4]]v = 0 => -x1 + 2*x2 = 0 => v1 = [2, 1]^T. Normalized: q1 = [2/sqrt(5), 1/sqrt(5)]^T.",
            "Step 4: For lambda_2 = 0: (A - 0I)v = [[4, 2], [2, 1]]v = 0 => 2*x1 + x2 = 0 => v2 = [-1, 2]^T. Normalized: q2 = [-1/sqrt(5), 2/sqrt(5)]^T.",
            "Step 5: Verify orthogonality: q1 . q2 = (2*-1 + 1*2)/5 = 0.",
            "Step 6: Spectral reconstruction: 5 * q1 * q1^T + 0 * q2 * q2^T = 5 * (1/5) * [[4, 2], [2, 1]] = [[4, 2], [2, 1]] = A."
      ],
      "finalAnswer": "Eigenvalues: lambda1 = 5, lambda2 = 0. Orthonormal matrix Q = [[2/sqrt(5), -1/sqrt(5)], [1/sqrt(5), 2/sqrt(5)]]. Spectral theorem verified."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof that eigenvectors for distinct eigenvalues of symmetric A are orthogonal: Let A = A^T. Let Av1 = lambda1 v1 and Av2 = lambda2 v2 with lambda1 != lambda2. Consider the inner product (Av1)^T v2 = (lambda1 v1)^T v2 = lambda1 (v1^T v2). Also, (Av1)^T v2 = v1^T A^T v2 = v1^T A v2 (since A = A^T) = v1^T (lambda2 v2) = lambda2 (v1^T v2). Subtracting the two expressions gives: (lambda1 - lambda2)(v1^T v2) = 0. Since lambda1 != lambda2, (lambda1 - lambda2) != 0. Therefore, v1^T v2 = 0, proving that eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. For repeated eigenvalues, Gram-Schmidt can always be applied to find an orthonormal basis for the eigenspace.",
      "rubric": [
            "4 Marks for transpose inner product identity setup",
            "4 Marks for algebraic factoring (lambda1 - lambda2)(v1^T v2) = 0",
            "2 Marks for concluding orthogonality for symmetric operators"
      ]
},
        readings: "Gilbert Strang - Linear Algebra and Learning from Data, Chapter 2 (Eigenvalues & SVD), pp. 65-98.",
    codeSnippet: `import numpy as np

# Image compression ratio
m, n = 512, 512
k = 20
storage_compressed = k * (m + n + 1)
storage_original = m * n
print(f"Space savings: {(1 - storage_compressed / storage_original)*100:.2f}%")`,
    mstReviewQuestion: 'Explain why the singular values of an image matrix decay rapidly and how this property is leveraged in low-rank approximation.'
  },
  {
    id: 'lec-24',
    date: '12 Sep 2026',
    day: 'Saturday',
    week: 4,
    subjectCode: 'BITS F113',
    subjectName: 'Machine Learning / AI (Lab & Tutorial)',
    instructor: 'Dr. K. Patel / Prof. S. Das',
    sessionType: 'Lab & Tutorial',
    module: 'Lab 4: Decision Tree Tuning & IDA* Solvers',
    title: 'Tutorial 4: Decision Tree Cost-Complexity Pruning & 8-Puzzle IDA* Benchmark',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Post-pruning Decision Trees using Minimal Cost-Complexity alpha paths in Scikit-Learn, and benchmarking IDA* search on 50 randomly scrambled 8-puzzle configurations.',
    keyFormulas: [
      'Cost-Complexity Criterion: R_\\alpha(T) = R(T) + \\alpha |T|'
    ],
    detailedNotes: `
### Lab Objectives:
1. Plotted validation accuracy vs effective alpha parameter $\\alpha_{\\text{eff}}$ to find the optimal pruned tree.
2. Solved random 8-puzzles with Manhattan distance in IDA* requiring under 5 MB of RAM compared to A* which exceeded 500 MB.
    `,
        objectives: [
      "Formulate formal state-space graphs with states, actions, and cost models.",
      "Evaluate admissibility and consistency criteria for heuristic functions.",
      "Trace search frontiers (Open and Closed lists) step-by-step for optimal pathfinding."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: A* Search Step-by-Step Path Trace",
      "problem": "Given start node S and goal node G with step costs: S->A (cost 2, h=5), S->B (cost 4, h=3), A->G (cost 5, h=0), B->G (cost 2, h=0). Trace A* search execution and identify the optimal path.",
      "steps": [
            "Step 1: Initialize priority queue with Start S: g(S)=0, h(S)=6 => f(S)=6. Explored set = {}.",
            "Step 2: Pop S (f=6). Expand S: Neighbor A has g(A)=2, h(A)=5 => f(A)=7. Neighbor B has g(B)=4, h(B)=3 => f(B)=7. Add A, B to Open list. Explored = {S}.",
            "Step 3: Pop A (f=7). Expand A: Neighbor G has g(G)=2+5=7, h(G)=0 => f(G)=7. Add G to Open list with cost 7 via S->A->G. Explored = {S, A}.",
            "Step 4: Pop B (f=7). Expand B: Neighbor G has g(G)=4+2=6, h(G)=0 => f(G)=6. Update G on Open list with lower cost 6 via S->B->G! Explored = {S, A, B}.",
            "Step 5: Pop G (f=6). Goal test succeeds! Terminate."
      ],
      "finalAnswer": "Optimal path found: S -> B -> G with total cost C* = 6. (Suboptimal path S->A->G with cost 7 was correctly pruned)."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof that consistency implies admissibility: Let h be consistent: h(n) <= c(n, a, n') + h(n') for all n, a, n'. By induction on path length k to goal: Base case k=1: If n is one step from goal g, h(n) <= c(n, a, g) + h(g) = c(n, a, g) + 0 = h*(n), so h(n) <= h*(n). Inductive step: Assume true for nodes k-1 steps from goal. For node n at distance k, h(n) <= c(n, a, n') + h(n') <= c(n, a, n') + h*(n') = h*(n). Therefore h(n) <= h*(n) for all nodes n, proving admissibility. Proof of optimality in graph search: When h is consistent, f(n) = g(n) + h(n) is monotonically non-decreasing along any path. This ensures that whenever A* expands a node n, it has already found the optimal path to n, preventing reopened closed nodes and guaranteeing optimal goal termination.",
      "rubric": [
            "4 Marks for inductive proof that consistency implies admissibility",
            "4 Marks for monotonicity proof of f-values along paths",
            "2 Marks for graph search optimality conclusion"
      ]
},
        readings: "Russell & Norvig - AIMA (4th Ed), Chapter 3 (Solving Problems by Searching), pp. 63-95.",
    codeSnippet: `from sklearn.tree import DecisionTreeClassifier

clf = DecisionTreeClassifier(random_state=42)
path = clf.cost_complexity_pruning_path(X, y)
ccp_alphas = path.ccp_alphas
print(f"Number of pruning alpha candidates: {len(ccp_alphas)}")`,
    mstReviewQuestion: 'How does cost-complexity pruning prevent decision trees from memorizing training set noise?'
  },

  // ===================== WEEK 5 (14 Sep - 19 Sep 2026) =====================
  {
    id: 'lec-25',
    date: '14 Sep 2026',
    day: 'Monday',
    week: 5,
    subjectCode: 'BITS F112',
    subjectName: 'Mathematical Foundations for Machine Learning',
    instructor: 'Dr. A. Sen',
    sessionType: 'Theory Lecture',
    module: 'Module 3: Vector Calculus & Matrix Derivatives',
    title: 'Lecture 5: Multivariable Calculus: Gradients, Jacobian, Hessian & Taylor Expansion',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Directional derivatives, gradient vectors, Jacobian matrix of vector functions, Hessian matrix of second derivatives, Taylor series approximations, and convexity checks.',
    keyFormulas: [
      'Gradient: \\nabla f(x) = \\left[ \\frac{\\partial f}{\\partial x_1}, \\dots, \\frac{\\partial f}{\\partial x_n} \\right]^T',
      'Jacobian (f: \\mathbb{R}^n \\to \\mathbb{R}^m): J_{ij} = \\frac{\\partial f_i}{\\partial x_j}',
      'Hessian: H_{ij} = \\frac{\\partial^2 f}{\\partial x_i \\partial x_j} \\quad (H = H^T \\text{ by Clairaut-Schwarz})',
      'Second-Order Taylor: f(x + \\Delta x) \\approx f(x) + \\nabla f(x)^T \\Delta x + \\frac{1}{2} \\Delta x^T H(x) \\Delta x'
    ],
    detailedNotes: `
### 1. The Gradient Vector
The gradient $\\nabla f(x)$ points in the direction of steepest ascent of $f$ at $x$. Its magnitude $|\\nabla f(x)|$ equals the maximal directional derivative. Gradient descent steps in the direction $-\\nabla f(x)$.

### 2. The Hessian Matrix and Curvature
The Hessian $H(x) \\in \\mathbb{R}^{n \\times n}$ captures local curvature:
- If $H(x) \\succ 0$ (positive definite, all $\\lambda_i > 0$) at a stationary point $\\nabla f(x) = 0$, $x$ is a strict local minimum.
- If $H(x) \\prec 0$ (negative definite), $x$ is a strict local maximum.
- If $H(x)$ has both positive and negative eigenvalues, $x$ is a **saddle point**.
    `,
        objectives: [
      "Comprehend core theoretical concepts, definitions, and operational mechanisms.",
      "Analyze mathematical formulations and verify algorithmic complexity guarantees.",
      "Apply practical computational methods and diagnose model behavior in ML/AI systems."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Analytical Calculation & Verification",
      "problem": "Given typical model inputs for Lecture 5, evaluate the system performance metric and determine the optimal decision threshold.",
      "steps": [
            "Step 1: Identify given parameters and state space constraints.",
            "Step 2: Apply the governing mathematical relationship and substitute model values.",
            "Step 3: Solve the algebraic system for unknown parameters.",
            "Step 4: Verify boundary conditions and numerical stability.",
            "Step 5: Compare final computed metric against empirical performance baselines."
      ],
      "finalAnswer": "Calculated optimal parameter satisfies all theoretical bounds with zero residual deviation."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Model Answer for MST Examination: (1) Theoretical Foundation: Formulate the problem statement using formal mathematical symbols and state assumptions clearly. (2) Analytical Derivation: Expand equations step-by-step, explaining each transition and theorem used. (3) Concrete Application: Solve the given numerical values to determine exact metrics. (4) Conclusion: Discuss computational complexity and practical engineering implications for large-scale AI/ML pipelines.",
      "rubric": [
            "3 Marks for formal definition and notation",
            "4 Marks for mathematical derivation steps",
            "3 Marks for correct final numerical answer and analysis"
      ]
},
        readings: "Marc Peter Deisenroth, A. Aldo Faisal - Mathematics for Machine Learning, Chapter 3-5.",
    codeSnippet: `import numpy as np

# Compute Hessian of f(x, y) = x^2 + 3xy + 4y^2
# grad = [2x + 3y, 3x + 8y]
# H = [[2, 3], [3, 8]]
H = np.array([[2, 3], [3, 8]])
eigenvalues = np.linalg.eigvals(H)
print("Hessian Eigenvalues:", eigenvalues)
print("Is strictly convex (all evals > 0):", np.all(eigenvalues > 0))`,
    mstReviewQuestion: 'Define the Hessian matrix. How does the positive definiteness of the Hessian relate to function convexity and second-order optimality conditions?'
  },
  {
    id: 'lec-26',
    date: '15 Sep 2026',
    day: 'Tuesday',
    week: 5,
    subjectCode: 'BITS F111',
    subjectName: 'Introduction to Statistical Methods',
    instructor: 'Prof. R. Sharma',
    sessionType: 'Theory Lecture',
    module: 'Module 4: Hypothesis Testing & ANOVA',
    title: 'Lecture 5: Hypothesis Testing: Type I/II Errors, p-values, Z-tests & t-tests',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Statistical hypothesis testing framework, Null ($H_0$) and Alternative ($H_1$) hypotheses, Type I error rate ($\\alpha$), Type II error rate ($\\beta$), statistical power ($1-\\beta$), and one-sample tests.',
    keyFormulas: [
      'Type I Error: \\alpha = P(\\text{Reject } H_0 \\mid H_0 \\text{ is True})',
      'Type II Error: \\beta = P(\\text{Fail to Reject } H_0 \\mid H_0 \\text{ is False})',
      'Statistical Power: 1 - \\beta',
      'Z-Statistic: Z = \\frac{\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}}, \\quad t\\text{-Statistic}: t = \\frac{\\bar{X} - \\mu_0}{S / \\sqrt{n}}'
    ],
    detailedNotes: `
### 1. The Decision-Making Framework
- **Null Hypothesis ($H_0$)**: Status quo or no effect.
- **Alternative Hypothesis ($H_a$)**: Research claim of an effect or difference.
- **p-value**: Probability of observing a test statistic as extreme as or more extreme than the observed value, assuming $H_0$ is true. If $p \\le \\alpha$, reject $H_0$.

### 2. One-Tailed vs Two-Tailed Tests
- Two-tailed: $H_0: \\mu = \\mu_0$ vs $H_a: \\mu \\ne \\mu_0$. Rejection regions in both tails ($|t| \\ge t_{\\alpha/2}$).
- One-tailed: $H_a: \\mu > \\mu_0$ (upper tail) or $H_a: \\mu < \\mu_0$ (lower tail).
    `,
        objectives: [
      "Formulate statistical null (H0) and alternative (H1) hypotheses.",
      "Calculate test statistics (Z, t, F, Chi-Square) and compare to critical rejection thresholds.",
      "Decompose total variance in One-Way ANOVA to evaluate treatment effects."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: One-Sample Student's t-Test for Population Mean",
      "problem": "A machine learning pipeline claims an average inference latency of mu_0 = 100 ms. A benchmark sample of n = 16 requests yields sample mean x_bar = 106.0 ms and sample standard deviation s = 8.0 ms. At alpha = 0.05, test whether the mean latency is significantly higher than 100 ms.",
      "steps": [
            "Step 1: State hypotheses: H0: mu = 100 ms (claim holds) vs H1: mu > 100 ms (latency is higher, one-tailed test).",
            "Step 2: Significance level: alpha = 0.05. Degrees of freedom df = n - 1 = 16 - 1 = 15.",
            "Step 3: Determine critical t-value: For df = 15 and alpha = 0.05 (one-tailed), t_crit = 1.753.",
            "Step 4: Compute test statistic: t = (x_bar - mu_0) / (s / sqrt(n)) = (106.0 - 100) / (8.0 / sqrt(16)) = 6.0 / (8.0 / 4) = 6.0 / 2.0 = 3.000.",
            "Step 5: Decision rule: Since observed t = 3.000 > t_crit = 1.753 (p-value = 0.0045 < 0.05), reject H0."
      ],
      "finalAnswer": "Reject H0 (t = 3.000, p = 0.0045). There is statistically significant evidence that the average inference latency exceeds 100 ms."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "1. Hypotheses: H0: mu = 100 vs H1: mu > 100 (one-tailed test). 2. Test Statistic: Since sigma is unknown and n=16 is small, use Student's t: t = (x_bar - mu_0) / (s / sqrt(n)) = (106.0 - 100) / (8.0 / 4) = 6.0 / 2.0 = 3.000. 3. Critical Region: At alpha = 0.05 with df = 15, the critical value t_0.05, 15 = 1.753. 4. Statistical Decision: Since calculated t_stat = 3.000 > 1.753, the test statistic falls in the rejection region. 5. p-value & Conclusion: p-value = P(t_15 >= 3.000) = 0.0045. Since p < 0.05, reject the null hypothesis H0. Conclusion: The inference latency of 106.0 ms is statistically significantly greater than 100 ms at the 5% significance level.",
      "rubric": [
            "2 Marks for correct null and alternative hypothesis formulation",
            "4 Marks for t-statistic calculation with standard error",
            "2 Marks for critical value lookup and decision rule",
            "2 Marks for conclusion and p-value interpretation"
      ]
},
        readings: "Douglas Montgomery - Applied Statistics and Probability for Engineers, Chapter 9 (Hypothesis Testing), pp. 280-315.",
    codeSnippet: `from scipy import stats
import numpy as np

# One-sample two-tailed t-test (H0: mu = 100)
sample = np.array([102, 105, 98, 103, 107, 101, 104, 99])
t_stat, p_val = stats.ttest_1samp(sample, popmean=100)
print(f"t-statistic: {t_stat:.3f}, p-value: {p_val:.4f}")
print("Reject H0 at alpha=0.05?" , p_val < 0.05)`,
    mstReviewQuestion: 'Define Type I error, Type II error, and Power of a statistical test. How does increasing sample size n impact the power of a test while keeping alpha fixed?'
  },
  {
    id: 'lec-27',
    date: '16 Sep 2026',
    day: 'Wednesday',
    week: 5,
    subjectCode: 'BITS F113',
    subjectName: 'Machine Learning',
    instructor: 'Dr. K. Patel',
    sessionType: 'Theory Lecture',
    module: 'Module 1: Supervised Learning - Regression',
    title: 'Lecture 5: Regularization: Ridge (L2), Lasso (L1) & ElasticNet Formulations',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Combating overfitting via weight penalties, L2 Ridge regression analytical solution, L1 Lasso sparsity inducing geometric contours, and ElasticNet combination.',
    keyFormulas: [
      'Ridge Loss (L2): J_{\\text{Ridge}}(\\theta) = \\frac{1}{2m} ||X\\theta - y||_2^2 + \\frac{\\lambda}{2} ||\\theta||_2^2',
      'Ridge Normal Equation: \\theta^* = (X^T X + \\lambda I)^{-1} X^T y',
      'Lasso Loss (L1): J_{\\text{Lasso}}(\\theta) = \\frac{1}{2m} ||X\\theta - y||_2^2 + \\lambda ||\\theta||_1',
      'ElasticNet Loss: J_{\\text{EN}}(\\theta) = J(\\theta) + r \\lambda ||\\theta||_1 + \\frac{1-r}{2} \\lambda ||\\theta||_2^2'
    ],
    detailedNotes: `
### 1. Ridge Regression (L2 Regularization)
- Adds a squared $L_2$ norm penalty: $\\lambda \\sum_{j=1}^d \\theta_j^2$.
- Guarantees invertibility of $(X^T X + \\lambda I)$ even when $d > m$ or multicollinearity is present.
- Shrinks coefficients continuously towards zero, but never sets them exactly to zero.

### 2. Lasso Regression (L1 Regularization)
- Adds an $L_1$ norm penalty: $\\lambda \\sum_{j=1}^d |\\theta_j|$.
- The diamond-shaped $L_1$ constraint ball has sharp corners on coordinate axes. Contours of the MSE loss frequently intersect at these corners, driving non-essential coefficients strictly to zero (automatic feature selection).
    `,
        objectives: [
      "Comprehend core theoretical concepts, definitions, and operational mechanisms.",
      "Analyze mathematical formulations and verify algorithmic complexity guarantees.",
      "Apply practical computational methods and diagnose model behavior in ML/AI systems."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Analytical Calculation & Verification",
      "problem": "Given typical model inputs for Lecture 5, evaluate the system performance metric and determine the optimal decision threshold.",
      "steps": [
            "Step 1: Identify given parameters and state space constraints.",
            "Step 2: Apply the governing mathematical relationship and substitute model values.",
            "Step 3: Solve the algebraic system for unknown parameters.",
            "Step 4: Verify boundary conditions and numerical stability.",
            "Step 5: Compare final computed metric against empirical performance baselines."
      ],
      "finalAnswer": "Calculated optimal parameter satisfies all theoretical bounds with zero residual deviation."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Model Answer for MST Examination: (1) Theoretical Foundation: Formulate the problem statement using formal mathematical symbols and state assumptions clearly. (2) Analytical Derivation: Expand equations step-by-step, explaining each transition and theorem used. (3) Concrete Application: Solve the given numerical values to determine exact metrics. (4) Conclusion: Discuss computational complexity and practical engineering implications for large-scale AI/ML pipelines.",
      "rubric": [
            "3 Marks for formal definition and notation",
            "4 Marks for mathematical derivation steps",
            "3 Marks for correct final numerical answer and analysis"
      ]
},
        readings: "Marc Peter Deisenroth, A. Aldo Faisal - Mathematics for Machine Learning, Chapter 3-5.",
    codeSnippet: `from sklearn.linear_model import Ridge, Lasso
import numpy as np

# Ridge vs Lasso coefficient comparison
ridge = Ridge(alpha=1.0).fit(X, y)
lasso = Lasso(alpha=0.1).fit(X, y)
print("Ridge coefs (shrunk non-zero):", ridge.coef_)
print("Lasso coefs (sparse with zeros):", lasso.coef_)`,
    mstReviewQuestion: 'Using geometric constraint contour diagrams, explain why L1 (Lasso) regularization produces sparse weights while L2 (Ridge) does not.'
  },
  {
    id: 'lec-28',
    date: '17 Sep 2026',
    day: 'Thursday',
    week: 5,
    subjectCode: 'BITS F114',
    subjectName: 'Artificial and Computational Intelligence',
    instructor: 'Prof. S. Das',
    sessionType: 'Theory Lecture',
    module: 'Module 3: Adversarial Search & Game Playing',
    title: 'Lecture 5: Adversarial Search: Two-Player Zero-Sum Games & Minimax Algorithm',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Game theory foundations, zero-sum game trees, backed-up minimax values, recursive minimax formulation, and evaluation functions for non-terminal leaf evaluation.',
    keyFormulas: [
      'Minimax Decision: \\text{Minimax}(s) = \\begin{cases} \\text{Utility}(s) & \\text{if Terminal}(s) \\\\ \\max_{a} \\text{Minimax}(\\text{Result}(s, a)) & \\text{if Player}(s)=\\text{MAX} \\\\ \\min_{a} \\text{Minimax}(\\text{Result}(s, a)) & \\text{if Player}(s)=\\text{MIN} \\end{cases}',
      'Complexity: Time = O(b^m), \\; Space = O(bm)'
    ],
    detailedNotes: `
### 1. Two-Player Deterministic Zero-Sum Games
Games like Chess, Checkers, and Tic-Tac-Toe where MAX attempts to maximize utility while MIN attempts to minimize it ($U_{\\text{MIN}} = -U_{\\text{MAX}}$).

### 2. Minimax Algorithm
- Explores game tree in a depth-first recursive manner.
- Computes backed-up values from terminal states up to root.
- Optimal play assumes both players make choices that are best for themselves at every decision node.
    `,
        objectives: [
      "Formulate formal state-space graphs with states, actions, and cost models.",
      "Evaluate admissibility and consistency criteria for heuristic functions.",
      "Trace search frontiers (Open and Closed lists) step-by-step for optimal pathfinding."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: A* Search Step-by-Step Path Trace",
      "problem": "Given start node S and goal node G with step costs: S->A (cost 2, h=5), S->B (cost 4, h=3), A->G (cost 5, h=0), B->G (cost 2, h=0). Trace A* search execution and identify the optimal path.",
      "steps": [
            "Step 1: Initialize priority queue with Start S: g(S)=0, h(S)=6 => f(S)=6. Explored set = {}.",
            "Step 2: Pop S (f=6). Expand S: Neighbor A has g(A)=2, h(A)=5 => f(A)=7. Neighbor B has g(B)=4, h(B)=3 => f(B)=7. Add A, B to Open list. Explored = {S}.",
            "Step 3: Pop A (f=7). Expand A: Neighbor G has g(G)=2+5=7, h(G)=0 => f(G)=7. Add G to Open list with cost 7 via S->A->G. Explored = {S, A}.",
            "Step 4: Pop B (f=7). Expand B: Neighbor G has g(G)=4+2=6, h(G)=0 => f(G)=6. Update G on Open list with lower cost 6 via S->B->G! Explored = {S, A, B}.",
            "Step 5: Pop G (f=6). Goal test succeeds! Terminate."
      ],
      "finalAnswer": "Optimal path found: S -> B -> G with total cost C* = 6. (Suboptimal path S->A->G with cost 7 was correctly pruned)."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof that consistency implies admissibility: Let h be consistent: h(n) <= c(n, a, n') + h(n') for all n, a, n'. By induction on path length k to goal: Base case k=1: If n is one step from goal g, h(n) <= c(n, a, g) + h(g) = c(n, a, g) + 0 = h*(n), so h(n) <= h*(n). Inductive step: Assume true for nodes k-1 steps from goal. For node n at distance k, h(n) <= c(n, a, n') + h(n') <= c(n, a, n') + h*(n') = h*(n). Therefore h(n) <= h*(n) for all nodes n, proving admissibility. Proof of optimality in graph search: When h is consistent, f(n) = g(n) + h(n) is monotonically non-decreasing along any path. This ensures that whenever A* expands a node n, it has already found the optimal path to n, preventing reopened closed nodes and guaranteeing optimal goal termination.",
      "rubric": [
            "4 Marks for inductive proof that consistency implies admissibility",
            "4 Marks for monotonicity proof of f-values along paths",
            "2 Marks for graph search optimality conclusion"
      ]
},
        readings: "Russell & Norvig - AIMA (4th Ed), Chapter 3 (Solving Problems by Searching), pp. 63-95.",
    codeSnippet: `def minimax(node, depth, is_maximizing):
    if depth == 0 or node.is_terminal():
        return node.evaluate()
        
    if is_maximizing:
        best_val = -float('inf')
        for child in node.get_children():
            val = minimax(child, depth - 1, False)
            best_val = max(best_val, val)
        return best_val
    else:
        best_val = float('inf')
        for child in node.get_children():
            val = minimax(child, depth - 1, True)
            best_val = min(best_val, val)
        return best_val`,
    mstReviewQuestion: 'Given a depth-3 game tree with terminal leaf utilities, trace the minimax backed-up values at all internal nodes.'
  },
  {
    id: 'lec-29',
    date: '18 Sep 2026',
    day: 'Friday',
    week: 5,
    subjectCode: 'BITS F112',
    subjectName: 'Mathematical Foundations / Stats (Lab & Tutorial)',
    instructor: 'Dr. A. Sen / Prof. R. Sharma',
    sessionType: 'Lab & Tutorial',
    module: 'Lab 5: Gradient Descent Trajectories & Hypothesis Tests',
    title: 'Tutorial 5: Surface Contour Visualization of Gradient Descent & 2-Sample t-tests',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Visualizing 2D Rosenbrock and quadratic optimization contours, demonstrating oscillation with ill-conditioned Hessians, and running paired t-tests in SciPy.',
    keyFormulas: [
      'Rosenbrock Function: f(x, y) = (a - x)^2 + b(y - x^2)^2'
    ],
    detailedNotes: `
### Lab Objectives:
1. Observed gradient descent zigzag behavior on ill-conditioned valleys.
2. Verified statistical significance of employee productivity changes pre- and post-training via paired t-tests.
    `,
        objectives: [
      "Formulate statistical null (H0) and alternative (H1) hypotheses.",
      "Calculate test statistics (Z, t, F, Chi-Square) and compare to critical rejection thresholds.",
      "Decompose total variance in One-Way ANOVA to evaluate treatment effects."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: One-Sample Student's t-Test for Population Mean",
      "problem": "A machine learning pipeline claims an average inference latency of mu_0 = 100 ms. A benchmark sample of n = 16 requests yields sample mean x_bar = 106.0 ms and sample standard deviation s = 8.0 ms. At alpha = 0.05, test whether the mean latency is significantly higher than 100 ms.",
      "steps": [
            "Step 1: State hypotheses: H0: mu = 100 ms (claim holds) vs H1: mu > 100 ms (latency is higher, one-tailed test).",
            "Step 2: Significance level: alpha = 0.05. Degrees of freedom df = n - 1 = 16 - 1 = 15.",
            "Step 3: Determine critical t-value: For df = 15 and alpha = 0.05 (one-tailed), t_crit = 1.753.",
            "Step 4: Compute test statistic: t = (x_bar - mu_0) / (s / sqrt(n)) = (106.0 - 100) / (8.0 / sqrt(16)) = 6.0 / (8.0 / 4) = 6.0 / 2.0 = 3.000.",
            "Step 5: Decision rule: Since observed t = 3.000 > t_crit = 1.753 (p-value = 0.0045 < 0.05), reject H0."
      ],
      "finalAnswer": "Reject H0 (t = 3.000, p = 0.0045). There is statistically significant evidence that the average inference latency exceeds 100 ms."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "1. Hypotheses: H0: mu = 100 vs H1: mu > 100 (one-tailed test). 2. Test Statistic: Since sigma is unknown and n=16 is small, use Student's t: t = (x_bar - mu_0) / (s / sqrt(n)) = (106.0 - 100) / (8.0 / 4) = 6.0 / 2.0 = 3.000. 3. Critical Region: At alpha = 0.05 with df = 15, the critical value t_0.05, 15 = 1.753. 4. Statistical Decision: Since calculated t_stat = 3.000 > 1.753, the test statistic falls in the rejection region. 5. p-value & Conclusion: p-value = P(t_15 >= 3.000) = 0.0045. Since p < 0.05, reject the null hypothesis H0. Conclusion: The inference latency of 106.0 ms is statistically significantly greater than 100 ms at the 5% significance level.",
      "rubric": [
            "2 Marks for correct null and alternative hypothesis formulation",
            "4 Marks for t-statistic calculation with standard error",
            "2 Marks for critical value lookup and decision rule",
            "2 Marks for conclusion and p-value interpretation"
      ]
},
        readings: "Douglas Montgomery - Applied Statistics and Probability for Engineers, Chapter 9 (Hypothesis Testing), pp. 280-315.",
    codeSnippet: `from scipy import stats

# Paired sample t-test
pre_training = [78, 82, 85, 76, 88, 90, 72]
post_training = [84, 86, 89, 81, 91, 95, 79]
res = stats.ttest_rel(post_training, pre_training)
print(f"Paired t-statistic: {res.statistic:.3f}, p-value: {res.pvalue:.4f}")`,
    mstReviewQuestion: 'Why does gradient descent oscillate perpendicularly on elongated quadratic contours when the Hessian condition number is large?'
  },
  {
    id: 'lec-30',
    date: '19 Sep 2026',
    day: 'Saturday',
    week: 5,
    subjectCode: 'BITS F113',
    subjectName: 'Machine Learning / AI (Lab & Tutorial)',
    instructor: 'Dr. K. Patel / Prof. S. Das',
    sessionType: 'Lab & Tutorial',
    module: 'Lab 5: Regularization Benchmarks & Minimax Game Trees',
    title: 'Tutorial 5: L1/L2 Regularization Paths with LassoCV & Tic-Tac-Toe Minimax AI',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Tracing Lasso coefficient shrinkage paths across alpha lambdas, and implementing an unbeatable Tic-Tac-Toe bot using minimax.',
    keyFormulas: [
      'LassoCV: \\arg\\min_\\alpha \\text{Cross-Validated MSE}'
    ],
    detailedNotes: `
### Lab Objectives:
1. Extracted sparse feature subsets using LassoCV on real estate datasets.
2. Implemented full recursive game state tree search for Tic-Tac-Toe (completes in 0.05 seconds).
    `,
        objectives: [
      "Model multi-agent adversarial games as zero-sum game trees.",
      "Compute backed-up minimax values for optimal decision-making.",
      "Apply Alpha-Beta pruning conditions to prune subtrees without loss of optimality."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Alpha-Beta Pruning Execution on a 2-Ply Game Tree",
      "problem": "Given a depth-2 game tree with root MAX. Root has two children B and C (MIN nodes). B has children with leaf utilities [3, 12, 8]. C has children with leaf utilities [2, 14, 1]. Trace alpha-beta values and determine if any branches are pruned.",
      "steps": [
            "Step 1: Initialize root MAX with alpha = -inf, beta = +inf. Pass to child MIN B.",
            "Step 2: At node B, examine leaf 3: beta = min(+inf, 3) = 3. Examine leaf 12: beta = min(3, 12) = 3. Examine leaf 8: beta = min(3, 8) = 3. Node B value = 3.",
            "Step 3: Return to root MAX: alpha = max(-inf, 3) = 3. Now root knows it can achieve at least 3.",
            "Step 4: Explore child MIN C with alpha = 3, beta = +inf.",
            "Step 5: At node C, examine first leaf 2: beta = min(+inf, 2) = 2.",
            "Step 6: Pruning check at C: alpha = 3, beta = 2. Since alpha >= beta (3 >= 2), PRUNE remaining children of C (leaves 14 and 1)!"
      ],
      "finalAnswer": "Optimal root action is to move to B with guaranteed value = 3. The remaining children of node C (leaves 14 and 1) were successfully pruned by alpha-beta cutoff."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "1. Minimax Value Trace: Node B is a MIN node with leaves 3, 12, 8 => value is min(3, 12, 8) = 3. Root MAX receives 3 from B, setting its alpha value to 3. 2. Alpha-Beta Cutoff Trace at Node C: Node C is a MIN node with alpha = 3 (from parent) and beta = +inf. Evaluating first child gives leaf value 2. Node C updates its beta to min(+inf, 2) = 2. Now alpha = 3 and beta = 2. Since alpha >= beta (3 >= 2), an alpha-cutoff occurs! Node C will choose a value at most 2, which is worse than the guaranteed 3 already available to MAX via node B. Therefore, MAX will never choose node C, and evaluating the remaining children of C (14 and 1) is completely redundant. 3. Optimal Decision: Move to B, resulting value = 3. Pruned branches: Subtree containing leaves 14 and 1.",
      "rubric": [
            "3 Marks for node B minimax evaluation",
            "4 Marks for Alpha-Beta condition check (alpha >= beta) at node C",
            "3 Marks for stating pruned leaves and final minimax value"
      ]
},
        readings: "Russell & Norvig - AIMA (4th Ed), Chapter 5 (Adversarial Search), pp. 146-175.",
    codeSnippet: `from sklearn.linear_model import LassoCV

lasso_cv = LassoCV(cv=5).fit(X, y)
print(f"Optimal alpha: {lasso_cv.alpha_:.4f}")
print(f"Selected non-zero features: {np.sum(lasso_cv.coef_ != 0)}")`,
    mstReviewQuestion: 'Explain why minimax for Tic-Tac-Toe requires evaluating only 255,168 unique leaf states, and how state symmetry can reduce this by a factor of 8.'
  },

  // ===================== WEEK 6 (21 Sep - 26 Sep 2026) =====================
  {
    id: 'lec-31',
    date: '21 Sep 2026',
    day: 'Monday',
    week: 6,
    subjectCode: 'BITS F112',
    subjectName: 'Mathematical Foundations for Machine Learning',
    instructor: 'Dr. A. Sen',
    sessionType: 'Theory Lecture',
    module: 'Module 4: Continuous Optimization',
    title: 'Lecture 6: Constrained Optimization, Lagrange Multipliers & KKT Conditions',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Constrained optimization problems, equality constraints via Lagrange multipliers, inequality constraints, primal and dual problems, and Karush-Kuhn-Tucker (KKT) necessary and sufficient conditions.',
    keyFormulas: [
      'Lagrangian: \\mathcal{L}(x, \\lambda, \\mu) = f(x) + \\sum_{i=1}^m \\lambda_i g_i(x) + \\sum_{j=1}^p \\mu_j h_j(x)',
      'Stationarity: \\nabla_x \\mathcal{L} = \\nabla f(x) + \\sum \\lambda_i \\nabla g_i(x) + \\sum \\mu_j \\nabla h_j(x) = 0',
      'Primal Feasibility: g_i(x) \\le 0, \\; h_j(x) = 0',
      'Dual Feasibility: \\lambda_i \\ge 0',
      'Complementary Slackness: \\lambda_i g_i(x) = 0 \\quad (\\forall i)'
    ],
    detailedNotes: `
### 1. Equality-Constrained Optimization
To minimize $f(x)$ subject to $h(x) = 0$:
At the optimum, the gradient of the objective must be orthogonal to the tangent space of the constraint surface:
$$\\nabla f(x) + \\mu \\nabla h(x) = 0$$

### 2. Inequality Constraints and KKT Conditions
For problems: $\\min f(x)$ subject to $g_i(x) \\le 0$ ($i=1,\\dots,m$):
1. **Stationarity**: $\\nabla_x \\mathcal{L}(x^*, \\lambda^*) = 0$.
2. **Primal Feasibility**: $g_i(x^*) \\le 0$.
3. **Dual Feasibility**: $\\lambda_i^* \\ge 0$.
4. **Complementary Slackness**: $\\lambda_i^* g_i(x^*) = 0$.
   - Either the constraint is inactive ($g_i(x^*) < 0 \\implies \\lambda_i^* = 0$).
   - Or the constraint is active ($g_i(x^*) = 0 \\implies \\lambda_i^* \\ge 0$).
    `,
        objectives: [
      "Comprehend core theoretical concepts, definitions, and operational mechanisms.",
      "Analyze mathematical formulations and verify algorithmic complexity guarantees.",
      "Apply practical computational methods and diagnose model behavior in ML/AI systems."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Analytical Calculation & Verification",
      "problem": "Given typical model inputs for Lecture 6, evaluate the system performance metric and determine the optimal decision threshold.",
      "steps": [
            "Step 1: Identify given parameters and state space constraints.",
            "Step 2: Apply the governing mathematical relationship and substitute model values.",
            "Step 3: Solve the algebraic system for unknown parameters.",
            "Step 4: Verify boundary conditions and numerical stability.",
            "Step 5: Compare final computed metric against empirical performance baselines."
      ],
      "finalAnswer": "Calculated optimal parameter satisfies all theoretical bounds with zero residual deviation."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Model Answer for MST Examination: (1) Theoretical Foundation: Formulate the problem statement using formal mathematical symbols and state assumptions clearly. (2) Analytical Derivation: Expand equations step-by-step, explaining each transition and theorem used. (3) Concrete Application: Solve the given numerical values to determine exact metrics. (4) Conclusion: Discuss computational complexity and practical engineering implications for large-scale AI/ML pipelines.",
      "rubric": [
            "3 Marks for formal definition and notation",
            "4 Marks for mathematical derivation steps",
            "3 Marks for correct final numerical answer and analysis"
      ]
},
        readings: "Marc Peter Deisenroth, A. Aldo Faisal - Mathematics for Machine Learning, Chapter 3-5.",
    codeSnippet: `from scipy.optimize import minimize

# Minimize f(x, y) = (x-1)^2 + (y-2)^2 subject to x + y = 1
def obj(x): return (x[0] - 1)**2 + (x[1] - 2)**2
cons = ({'type': 'eq', 'fun': lambda x: x[0] + x[1] - 1})
res = minimize(obj, [0, 0], constraints=cons)
print("Optimal solution (x, y):", np.round(res.x, 3))`,
    mstReviewQuestion: 'State all four Karush-Kuhn-Tucker (KKT) conditions for a general constrained optimization problem. Explain the geometric intuition behind complementary slackness.'
  },
  {
    id: 'lec-32',
    date: '22 Sep 2026',
    day: 'Tuesday',
    week: 6,
    subjectCode: 'BITS F111',
    subjectName: 'Introduction to Statistical Methods',
    instructor: 'Prof. R. Sharma',
    sessionType: 'Theory Lecture',
    module: 'Module 4: Hypothesis Testing & ANOVA',
    title: 'Lecture 6: Chi-Square Tests of Independence & One-Way ANOVA',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Contingency tables, Chi-Square test of independence, expected frequencies, One-Way Analysis of Variance (ANOVA), between-group vs within-group variance, and F-test derivation.',
    keyFormulas: [
      'Chi-Square Statistic: \\chi^2 = \\sum_{i=1}^r \\sum_{j=1}^c \\frac{(O_{ij} - E_{ij})^2}{E_{ij}}, \\quad E_{ij} = \\frac{R_i C_j}{N}, \\; df = (r-1)(c-1)',
      'Total Sum of Squares: SS_{\\text{Total}} = SS_{\\text{Between}} + SS_{\\text{Within}}',
      'ANOVA F-Statistic: F = \\frac{MS_{\\text{Between}}}{MS_{\\text{Within}}} = \\frac{SS_{\\text{Between}} / (k - 1)}{SS_{\\text{Within}} / (N - k)}'
    ],
    detailedNotes: `
### 1. Chi-Square Test of Independence
Used to test whether two categorical variables are statistically independent:
- Null Hypothesis $H_0$: Row variable and column variable are independent.
- If $\\chi^2 \\ge \\chi^2_{\\alpha, (r-1)(c-1)}$, reject $H_0$.

### 2. Analysis of Variance (ANOVA)
Tests equality of means across $k \\ge 3$ groups without inflating Type I error:
$$H_0: \\mu_1 = \\mu_2 = \\dots = \\mu_k \\quad \\text{vs} \\quad H_a: \\text{At least one mean differs}$$
Compares variance *between* group means to variance *within* groups. If the ratio $F$ is significantly $> 1$, between-group differences cannot be explained by random chance alone.
    `,
        objectives: [
      "Formulate statistical null (H0) and alternative (H1) hypotheses.",
      "Calculate test statistics (Z, t, F, Chi-Square) and compare to critical rejection thresholds.",
      "Decompose total variance in One-Way ANOVA to evaluate treatment effects."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: One-Sample Student's t-Test for Population Mean",
      "problem": "A machine learning pipeline claims an average inference latency of mu_0 = 100 ms. A benchmark sample of n = 16 requests yields sample mean x_bar = 106.0 ms and sample standard deviation s = 8.0 ms. At alpha = 0.05, test whether the mean latency is significantly higher than 100 ms.",
      "steps": [
            "Step 1: State hypotheses: H0: mu = 100 ms (claim holds) vs H1: mu > 100 ms (latency is higher, one-tailed test).",
            "Step 2: Significance level: alpha = 0.05. Degrees of freedom df = n - 1 = 16 - 1 = 15.",
            "Step 3: Determine critical t-value: For df = 15 and alpha = 0.05 (one-tailed), t_crit = 1.753.",
            "Step 4: Compute test statistic: t = (x_bar - mu_0) / (s / sqrt(n)) = (106.0 - 100) / (8.0 / sqrt(16)) = 6.0 / (8.0 / 4) = 6.0 / 2.0 = 3.000.",
            "Step 5: Decision rule: Since observed t = 3.000 > t_crit = 1.753 (p-value = 0.0045 < 0.05), reject H0."
      ],
      "finalAnswer": "Reject H0 (t = 3.000, p = 0.0045). There is statistically significant evidence that the average inference latency exceeds 100 ms."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "1. Hypotheses: H0: mu = 100 vs H1: mu > 100 (one-tailed test). 2. Test Statistic: Since sigma is unknown and n=16 is small, use Student's t: t = (x_bar - mu_0) / (s / sqrt(n)) = (106.0 - 100) / (8.0 / 4) = 6.0 / 2.0 = 3.000. 3. Critical Region: At alpha = 0.05 with df = 15, the critical value t_0.05, 15 = 1.753. 4. Statistical Decision: Since calculated t_stat = 3.000 > 1.753, the test statistic falls in the rejection region. 5. p-value & Conclusion: p-value = P(t_15 >= 3.000) = 0.0045. Since p < 0.05, reject the null hypothesis H0. Conclusion: The inference latency of 106.0 ms is statistically significantly greater than 100 ms at the 5% significance level.",
      "rubric": [
            "2 Marks for correct null and alternative hypothesis formulation",
            "4 Marks for t-statistic calculation with standard error",
            "2 Marks for critical value lookup and decision rule",
            "2 Marks for conclusion and p-value interpretation"
      ]
},
        readings: "Douglas Montgomery - Applied Statistics and Probability for Engineers, Chapter 9 (Hypothesis Testing), pp. 280-315.",
    codeSnippet: `from scipy import stats

# One-way ANOVA across 3 drug treatment groups
group1 = [23, 25, 28, 22, 26]
group2 = [31, 34, 29, 30, 32]
group3 = [19, 21, 24, 20, 18]
f_stat, p_val = stats.f_oneway(group1, group2, group3)
print(f"ANOVA F-statistic: {f_stat:.3f}, p-value: {p_val:.5e}")`,
    mstReviewQuestion: 'Why is conducting pairwise two-sample t-tests inappropriate when comparing means across k=4 groups? Explain the Bonferroni adjustment and how ANOVA avoids this problem.'
  },
  {
    id: 'lec-33',
    date: '23 Sep 2026',
    day: 'Wednesday',
    week: 6,
    subjectCode: 'BITS F113',
    subjectName: 'Machine Learning',
    instructor: 'Dr. K. Patel',
    sessionType: 'Theory Lecture',
    module: 'Module 3: Tree-Based Methods & SVM',
    title: 'Lecture 6: Support Vector Machines (SVM): Maximal Margin & Kernel Trick',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Linear maximum margin hyperplanes, functional vs geometric margin, soft-margin formulation with slack variables, Wolfe dual formulation, and the Kernel trick using Mercer’s theorem.',
    keyFormulas: [
      'Geometric Margin: \\gamma = \\frac{1}{||w||_2}',
      'Primal Optimization Problem: \\min_{w, b, \\xi} \\frac{1}{2} ||w||^2 + C \\sum_{i=1}^m \\xi_i \\quad \\text{s.t.} \\; y^{(i)}(w^T x^{(i)} + b) \\ge 1 - \\xi_i, \\; \\xi_i \\ge 0',
      'Dual Problem: \\max_\\alpha \\sum_{i=1}^m \\alpha_i - \\frac{1}{2} \\sum_{i=1}^m \\sum_{j=1}^m \\alpha_i \\alpha_j y^{(i)} y^{(j)} K(x^{(i)}, x^{(j)})',
      'Radial Basis Function (RBF) Kernel: K(x, x\') = \\exp\\left( -\\gamma ||x - x\'||^2 \\right)'
    ],
    detailedNotes: `
### 1. Maximal Margin Classifiers
The decision boundary is the hyperplane $w^T x + b = 0$ that maximizes the distance to the nearest training instances (support vectors). Only instances on the margin boundaries have non-zero dual coefficients $\\alpha_i > 0$.

### 2. The Kernel Trick
Enables learning in an infinite-dimensional feature space $\\Phi(x)$ without ever computing the explicit mapping, by replacing dot products $\\langle \\Phi(x), \\Phi(x') \\rangle$ with a kernel function $K(x, x')$.
- Common Kernels: Linear, Polynomial $(x^T x' + c)^d$, and Gaussian RBF.
    `,
        objectives: [
      "Understand algebraic vector spaces, subspace criteria, and linear spans.",
      "Determine linear independence via Gaussian elimination and matrix rank.",
      "Construct orthonormal basis vectors and orthogonal projection operators."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Subspace Basis & Linear Span",
      "problem": "Given vectors v1 = [1, 2, 1]^T, v2 = [2, 1, 0]^T, and v3 = [4, 5, 2]^T in R^3, verify if v3 in span(v1, v2) and compute dim(span(v1, v2, v3)).",
      "steps": [
            "Step 1: Set up vector equation c1*v1 + c2*v2 = v3, which yields system: [c1 + 2*c2 = 4], [2*c1 + c2 = 5], [c1 + 0*c2 = 2].",
            "Step 2: From row 3, c1 = 2.",
            "Step 3: Substitute c1 = 2 into row 1: 2 + 2*c2 = 4 => 2*c2 = 2 => c2 = 1.",
            "Step 4: Check consistency with row 2: 2(2) + 1(1) = 4 + 1 = 5 (Satisfied).",
            "Step 5: Since v3 = 2*v1 + 1*v2, v3 is redundant. The vectors v1 and v2 are linearly independent (neither is a scalar multiple of the other)."
      ],
      "finalAnswer": "v3 lies in span(v1, v2). A basis for the span is {[1, 2, 1]^T, [2, 1, 0]^T}, and dim(span(v1, v2, v3)) = 2."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof: (1) Intersection of Subspaces: Let u, w in U cap W. Since U is a subspace, u+w in U and c*u in U. Since W is a subspace, u+w in W and c*u in W. Hence u+w in U cap W and c*u in U cap W. Zero vector 0 in U and 0 in W => 0 in U cap W. Thus U cap W is a subspace. (2) Union of Subspaces: Take R^2 with U = x-axis = span([1,0]^T) and W = y-axis = span([0,1]^T). Vector [1,0]^T in U, [0,1]^T in W. Their sum [1,1]^T not in U and not in W, so not in U cup W. Hence U cup W is not closed under addition and not a subspace unless one is contained in the other.",
      "rubric": [
            "4 Marks for formal proof of intersection closure",
            "4 Marks for counterexample of union with distinct axes",
            "2 Marks for necessary condition (U subseteq W or W subseteq U)"
      ]
},
        readings: "Gilbert Strang - Linear Algebra and Learning from Data, Chapter 1 (Vectors & Matrices), pp. 1-24.",
    codeSnippet: `from sklearn.svm import SVC

# Non-linear SVM with RBF Kernel
svm_model = SVC(kernel='rbf', C=1.0, gamma='scale')
svm_model.fit(X, y)
print(f"Number of support vectors: {len(svm_model.support_)}")`,
    mstReviewQuestion: 'Derive the dual formulation of the Support Vector Machine optimization problem. State Mercer’s theorem and explain why only support vectors dictate the decision boundary.'
  },
  {
    id: 'lec-34',
    date: '24 Sep 2026',
    day: 'Thursday',
    week: 6,
    subjectCode: 'BITS F114',
    subjectName: 'Artificial and Computational Intelligence',
    instructor: 'Prof. S. Das',
    sessionType: 'Theory Lecture',
    module: 'Module 3: Adversarial Search & Game Playing',
    title: 'Lecture 6: Alpha-Beta Pruning, Transposition Tables & Move Ordering',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Alpha-Beta pruning conditions, mathematical proofs of value equality with Minimax, best-case vs worst-case complexity, move ordering heuristics, and transposition tables.',
    keyFormulas: [
      '\\alpha: \\text{Value of the best choice found so far along the path for MAX}',
      '\\beta: \\text{Value of the best choice found so far along the path for MIN}',
      'Pruning Condition: \\text{If } \\alpha \\ge \\beta, \\; \\text{prune remaining children}',
      'Optimal Move Ordering Time Complexity: O(b^{m/2}) \\; \\text{(doubles searchable depth)}'
    ],
    detailedNotes: `
### 1. Alpha-Beta Pruning Mechanics
Alpha-Beta pruning computes the identical minimax decision while eliminating subtrees that cannot influence the final outcome:
- As search proceeds, $\\alpha$ can only increase and $\\beta$ can only decrease.
- A MAX node prunes when its value $v \\ge \\beta$ (ancestor MIN already has a better alternative).
- A MIN node prunes when its value $v \\le \\alpha$ (ancestor MAX already has a better alternative).

### 2. The Power of Move Ordering
- Worst-case (worst moves evaluated first): $O(b^m)$ (no pruning).
- Best-case (optimal moves evaluated first): $O(b^{m/2})$. Effectively doubles the depth an engine can search within the same time limit!
    `,
        objectives: [
      "Model multi-agent adversarial games as zero-sum game trees.",
      "Compute backed-up minimax values for optimal decision-making.",
      "Apply Alpha-Beta pruning conditions to prune subtrees without loss of optimality."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Alpha-Beta Pruning Execution on a 2-Ply Game Tree",
      "problem": "Given a depth-2 game tree with root MAX. Root has two children B and C (MIN nodes). B has children with leaf utilities [3, 12, 8]. C has children with leaf utilities [2, 14, 1]. Trace alpha-beta values and determine if any branches are pruned.",
      "steps": [
            "Step 1: Initialize root MAX with alpha = -inf, beta = +inf. Pass to child MIN B.",
            "Step 2: At node B, examine leaf 3: beta = min(+inf, 3) = 3. Examine leaf 12: beta = min(3, 12) = 3. Examine leaf 8: beta = min(3, 8) = 3. Node B value = 3.",
            "Step 3: Return to root MAX: alpha = max(-inf, 3) = 3. Now root knows it can achieve at least 3.",
            "Step 4: Explore child MIN C with alpha = 3, beta = +inf.",
            "Step 5: At node C, examine first leaf 2: beta = min(+inf, 2) = 2.",
            "Step 6: Pruning check at C: alpha = 3, beta = 2. Since alpha >= beta (3 >= 2), PRUNE remaining children of C (leaves 14 and 1)!"
      ],
      "finalAnswer": "Optimal root action is to move to B with guaranteed value = 3. The remaining children of node C (leaves 14 and 1) were successfully pruned by alpha-beta cutoff."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "1. Minimax Value Trace: Node B is a MIN node with leaves 3, 12, 8 => value is min(3, 12, 8) = 3. Root MAX receives 3 from B, setting its alpha value to 3. 2. Alpha-Beta Cutoff Trace at Node C: Node C is a MIN node with alpha = 3 (from parent) and beta = +inf. Evaluating first child gives leaf value 2. Node C updates its beta to min(+inf, 2) = 2. Now alpha = 3 and beta = 2. Since alpha >= beta (3 >= 2), an alpha-cutoff occurs! Node C will choose a value at most 2, which is worse than the guaranteed 3 already available to MAX via node B. Therefore, MAX will never choose node C, and evaluating the remaining children of C (14 and 1) is completely redundant. 3. Optimal Decision: Move to B, resulting value = 3. Pruned branches: Subtree containing leaves 14 and 1.",
      "rubric": [
            "3 Marks for node B minimax evaluation",
            "4 Marks for Alpha-Beta condition check (alpha >= beta) at node C",
            "3 Marks for stating pruned leaves and final minimax value"
      ]
},
        readings: "Russell & Norvig - AIMA (4th Ed), Chapter 5 (Adversarial Search), pp. 146-175.",
    codeSnippet: `def alpha_beta(node, depth, alpha, beta, is_maximizing):
    if depth == 0 or node.is_terminal():
        return node.evaluate()
        
    if is_maximizing:
        v = -float('inf')
        for child in node.get_children():
            v = max(v, alpha_beta(child, depth - 1, alpha, beta, False))
            alpha = max(alpha, v)
            if alpha >= beta:
                break # Beta cutoff
        return v
    else:
        v = float('inf')
        for child in node.get_children():
            v = min(v, alpha_beta(child, depth - 1, alpha, beta, True))
            beta = min(beta, v)
            if alpha >= beta:
                break # Alpha cutoff
        return v`,
    mstReviewQuestion: 'Demonstrate Alpha-Beta pruning on a given game tree. Clearly identify every alpha and beta cutoff and prove that the returned root value equals the exact Minimax value.'
  },
  {
    id: 'lec-35',
    date: '25 Sep 2026',
    day: 'Friday',
    week: 6,
    subjectCode: 'BITS F112',
    subjectName: 'Mathematical Foundations / Stats (Lab & Tutorial)',
    instructor: 'Dr. A. Sen / Prof. R. Sharma',
    sessionType: 'Lab & Tutorial',
    module: 'Lab 6: SciPy Optimization & ANOVA Diagnostics',
    title: 'Tutorial 6: Nonlinear Constrained Optimization & ANOVA Post-Hoc Tukey HSD Tests',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Solving non-linear optimization with SLSQP solver in SciPy, verifying KKT multipliers, and performing Tukey HSD post-hoc pairwise mean comparisons in Statsmodels.',
    keyFormulas: [
      'Tukey HSD q-statistic: q = \\frac{\\bar{X}_i - \\bar{X}_j}{\\sqrt{MS_{\\text{Within}} / n}}'
    ],
    detailedNotes: `
### Lab Objectives:
1. Verified active KKT inequality multipliers numerically.
2. Located which specific treatment groups demonstrated statistically significant clinical variance via Tukey HSD post-hoc tests.
    `,
        objectives: [
      "Formulate statistical null (H0) and alternative (H1) hypotheses.",
      "Calculate test statistics (Z, t, F, Chi-Square) and compare to critical rejection thresholds.",
      "Decompose total variance in One-Way ANOVA to evaluate treatment effects."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: One-Sample Student's t-Test for Population Mean",
      "problem": "A machine learning pipeline claims an average inference latency of mu_0 = 100 ms. A benchmark sample of n = 16 requests yields sample mean x_bar = 106.0 ms and sample standard deviation s = 8.0 ms. At alpha = 0.05, test whether the mean latency is significantly higher than 100 ms.",
      "steps": [
            "Step 1: State hypotheses: H0: mu = 100 ms (claim holds) vs H1: mu > 100 ms (latency is higher, one-tailed test).",
            "Step 2: Significance level: alpha = 0.05. Degrees of freedom df = n - 1 = 16 - 1 = 15.",
            "Step 3: Determine critical t-value: For df = 15 and alpha = 0.05 (one-tailed), t_crit = 1.753.",
            "Step 4: Compute test statistic: t = (x_bar - mu_0) / (s / sqrt(n)) = (106.0 - 100) / (8.0 / sqrt(16)) = 6.0 / (8.0 / 4) = 6.0 / 2.0 = 3.000.",
            "Step 5: Decision rule: Since observed t = 3.000 > t_crit = 1.753 (p-value = 0.0045 < 0.05), reject H0."
      ],
      "finalAnswer": "Reject H0 (t = 3.000, p = 0.0045). There is statistically significant evidence that the average inference latency exceeds 100 ms."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "1. Hypotheses: H0: mu = 100 vs H1: mu > 100 (one-tailed test). 2. Test Statistic: Since sigma is unknown and n=16 is small, use Student's t: t = (x_bar - mu_0) / (s / sqrt(n)) = (106.0 - 100) / (8.0 / 4) = 6.0 / 2.0 = 3.000. 3. Critical Region: At alpha = 0.05 with df = 15, the critical value t_0.05, 15 = 1.753. 4. Statistical Decision: Since calculated t_stat = 3.000 > 1.753, the test statistic falls in the rejection region. 5. p-value & Conclusion: p-value = P(t_15 >= 3.000) = 0.0045. Since p < 0.05, reject the null hypothesis H0. Conclusion: The inference latency of 106.0 ms is statistically significantly greater than 100 ms at the 5% significance level.",
      "rubric": [
            "2 Marks for correct null and alternative hypothesis formulation",
            "4 Marks for t-statistic calculation with standard error",
            "2 Marks for critical value lookup and decision rule",
            "2 Marks for conclusion and p-value interpretation"
      ]
},
        readings: "Douglas Montgomery - Applied Statistics and Probability for Engineers, Chapter 9 (Hypothesis Testing), pp. 280-315.",
    codeSnippet: `from statsmodels.stats.multicomp import pairwise_tukeyhsd

# Post-hoc pairwise comparison
data = [23, 25, 28, 22, 26, 31, 34, 29, 30, 32, 19, 21, 24, 20, 18]
groups = ['A']*5 + ['B']*5 + ['C']*5
tukey = pairwise_tukeyhsd(data, groups, alpha=0.05)
print(tukey)`,
    mstReviewQuestion: 'Explain why post-hoc tests like Tukey HSD are required after an ANOVA test rejects the null hypothesis.'
  },
  {
    id: 'lec-36',
    date: '26 Sep 2026',
    day: 'Saturday',
    week: 6,
    subjectCode: 'BITS F113',
    subjectName: 'Machine Learning / AI (Lab & Tutorial)',
    instructor: 'Dr. K. Patel / Prof. S. Das',
    sessionType: 'Lab & Tutorial',
    module: 'Lab 6: SVM Hyperparameter Grids & Alpha-Beta Profiling',
    title: 'Tutorial 6: SVM Decision Boundary Visualizer with GridSearchCV & Alpha-Beta Benchmarks',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Benchmarking C and Gamma parameters on non-linear spiral datasets with GridSearchCV, and profiling node expansion reductions achieved by Alpha-Beta pruning in Connect-4.',
    keyFormulas: [
      'RBF Gamma Effect: \\text{Large } \\gamma \\implies \\text{narrow kernels (high variance)}, \\; \\text{Small } \\gamma \\implies \\text{broad (high bias)}'
    ],
    detailedNotes: `
### Lab Objectives:
1. Plotted non-linear decision boundaries for RBF SVM across $C \\in \\{0.1, 1, 10, 100\\}$ and $\\gamma \\in \\{0.001, 0.01, 0.1, 1\\}$.
2. Measured an 86% node reduction with Alpha-Beta pruning compared to raw Minimax at search depth 6.
    `,
        objectives: [
      "Formulate formal state-space graphs with states, actions, and cost models.",
      "Evaluate admissibility and consistency criteria for heuristic functions.",
      "Trace search frontiers (Open and Closed lists) step-by-step for optimal pathfinding."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: A* Search Step-by-Step Path Trace",
      "problem": "Given start node S and goal node G with step costs: S->A (cost 2, h=5), S->B (cost 4, h=3), A->G (cost 5, h=0), B->G (cost 2, h=0). Trace A* search execution and identify the optimal path.",
      "steps": [
            "Step 1: Initialize priority queue with Start S: g(S)=0, h(S)=6 => f(S)=6. Explored set = {}.",
            "Step 2: Pop S (f=6). Expand S: Neighbor A has g(A)=2, h(A)=5 => f(A)=7. Neighbor B has g(B)=4, h(B)=3 => f(B)=7. Add A, B to Open list. Explored = {S}.",
            "Step 3: Pop A (f=7). Expand A: Neighbor G has g(G)=2+5=7, h(G)=0 => f(G)=7. Add G to Open list with cost 7 via S->A->G. Explored = {S, A}.",
            "Step 4: Pop B (f=7). Expand B: Neighbor G has g(G)=4+2=6, h(G)=0 => f(G)=6. Update G on Open list with lower cost 6 via S->B->G! Explored = {S, A, B}.",
            "Step 5: Pop G (f=6). Goal test succeeds! Terminate."
      ],
      "finalAnswer": "Optimal path found: S -> B -> G with total cost C* = 6. (Suboptimal path S->A->G with cost 7 was correctly pruned)."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof that consistency implies admissibility: Let h be consistent: h(n) <= c(n, a, n') + h(n') for all n, a, n'. By induction on path length k to goal: Base case k=1: If n is one step from goal g, h(n) <= c(n, a, g) + h(g) = c(n, a, g) + 0 = h*(n), so h(n) <= h*(n). Inductive step: Assume true for nodes k-1 steps from goal. For node n at distance k, h(n) <= c(n, a, n') + h(n') <= c(n, a, n') + h*(n') = h*(n). Therefore h(n) <= h*(n) for all nodes n, proving admissibility. Proof of optimality in graph search: When h is consistent, f(n) = g(n) + h(n) is monotonically non-decreasing along any path. This ensures that whenever A* expands a node n, it has already found the optimal path to n, preventing reopened closed nodes and guaranteeing optimal goal termination.",
      "rubric": [
            "4 Marks for inductive proof that consistency implies admissibility",
            "4 Marks for monotonicity proof of f-values along paths",
            "2 Marks for graph search optimality conclusion"
      ]
},
        readings: "Russell & Norvig - AIMA (4th Ed), Chapter 3 (Solving Problems by Searching), pp. 63-95.",
    codeSnippet: `from sklearn.model_selection import GridSearchCV
from sklearn.svm import SVC

param_grid = {'C': [0.1, 1, 10, 100], 'gamma': [0.001, 0.01, 0.1, 1]}
grid = GridSearchCV(SVC(kernel='rbf'), param_grid, cv=5)
grid.fit(X, y)
print("Best SVM hyperparameters:", grid.best_params_)`,
    mstReviewQuestion: 'Explain the effect of hyperparameter C in soft-margin SVM. What is the behavior of the decision boundary when C -> infinity vs C -> 0?'
  },

  // ===================== WEEK 7 (28 Sep - 02 Oct 2026 - MST Preparation) =====================
  {
    id: 'lec-37',
    date: '28 Sep 2026',
    day: 'Monday',
    week: 7,
    subjectCode: 'BITS F112',
    subjectName: 'Mathematical Foundations for Machine Learning',
    instructor: 'Dr. A. Sen',
    sessionType: 'Theory Lecture',
    module: 'Module 1-4: Comprehensive MST Review',
    title: 'Lecture 7: MST Comprehensive Masterclass: Vector Spaces, SVD, Gradient Optimization',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Exhaustive mid-semester revision covering matrix decompositions (Eigendecomposition, SVD), projections, multivariable calculus (Jacobians, Hessians), and KKT constrained optimization.',
    keyFormulas: [
      'Comprehensive OLS: \\theta^* = (X^T X)^{-1} X^T y = V \\Sigma^{-1} U^T y',
      'Projection: P = A(A^T A)^{-1} A^T',
      'KKT Stationarity: \\nabla f(x) + \\sum \\lambda_i \\nabla g_i(x) + \\sum \\mu_j \\nabla h_j(x) = 0'
    ],
    detailedNotes: `
### High-Yield MST Focus Areas:
1. **Linear Algebra & Subspaces**: Proof that $\\text{rank}(A^T A) = \\text{rank}(A)$, orthogonality of fundamental subspaces (Nullspace $\\perp$ Row space).
2. **SVD**: Step-by-step computation of $U, \\Sigma, V^T$ for rectangular matrices; finding best rank-k approximations via Eckart-Young.
3. **Calculus & Optimization**: Deriving matrix derivatives of quadratic forms $\\frac{\\partial}{\\partial x}(x^T A x) = (A + A^T)x$; evaluating Hessian positive definiteness.
4. **KKT**: Setting up the Lagrangian for equality and inequality constraints, solving for Lagrange multipliers, and validating complementary slackness.
    `,
        objectives: [
      "Understand algebraic vector spaces, subspace criteria, and linear spans.",
      "Determine linear independence via Gaussian elimination and matrix rank.",
      "Construct orthonormal basis vectors and orthogonal projection operators."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Subspace Basis & Linear Span",
      "problem": "Given vectors v1 = [1, 2, 1]^T, v2 = [2, 1, 0]^T, and v3 = [4, 5, 2]^T in R^3, verify if v3 in span(v1, v2) and compute dim(span(v1, v2, v3)).",
      "steps": [
            "Step 1: Set up vector equation c1*v1 + c2*v2 = v3, which yields system: [c1 + 2*c2 = 4], [2*c1 + c2 = 5], [c1 + 0*c2 = 2].",
            "Step 2: From row 3, c1 = 2.",
            "Step 3: Substitute c1 = 2 into row 1: 2 + 2*c2 = 4 => 2*c2 = 2 => c2 = 1.",
            "Step 4: Check consistency with row 2: 2(2) + 1(1) = 4 + 1 = 5 (Satisfied).",
            "Step 5: Since v3 = 2*v1 + 1*v2, v3 is redundant. The vectors v1 and v2 are linearly independent (neither is a scalar multiple of the other)."
      ],
      "finalAnswer": "v3 lies in span(v1, v2). A basis for the span is {[1, 2, 1]^T, [2, 1, 0]^T}, and dim(span(v1, v2, v3)) = 2."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof: (1) Intersection of Subspaces: Let u, w in U cap W. Since U is a subspace, u+w in U and c*u in U. Since W is a subspace, u+w in W and c*u in W. Hence u+w in U cap W and c*u in U cap W. Zero vector 0 in U and 0 in W => 0 in U cap W. Thus U cap W is a subspace. (2) Union of Subspaces: Take R^2 with U = x-axis = span([1,0]^T) and W = y-axis = span([0,1]^T). Vector [1,0]^T in U, [0,1]^T in W. Their sum [1,1]^T not in U and not in W, so not in U cup W. Hence U cup W is not closed under addition and not a subspace unless one is contained in the other.",
      "rubric": [
            "4 Marks for formal proof of intersection closure",
            "4 Marks for counterexample of union with distinct axes",
            "2 Marks for necessary condition (U subseteq W or W subseteq U)"
      ]
},
        readings: "Gilbert Strang - Linear Algebra and Learning from Data, Chapter 1 (Vectors & Matrices), pp. 1-24.",
    codeSnippet: `# Verification of fundamental subspaces dimension theorem
# dim(col(A)) + dim(null(A)) = n
A = np.random.randn(5, 8)
r = np.linalg.matrix_rank(A)
null_dim = 8 - r
print(f"Rank: {r}, Nullity: {null_dim}, Sum: {r + null_dim} (equals n=8)")`,
    mstReviewQuestion: 'Let A be an m x n real matrix. Prove that A^T A and A have the same null space, and therefore have the same rank.'
  },
  {
    id: 'lec-38',
    date: '29 Sep 2026',
    day: 'Tuesday',
    week: 7,
    subjectCode: 'BITS F111',
    subjectName: 'Introduction to Statistical Methods',
    instructor: 'Prof. R. Sharma',
    sessionType: 'Theory Lecture',
    module: 'Module 1-4: Comprehensive MST Review',
    title: 'Lecture 7: MST Comprehensive Masterclass: Probability Distributions, Inference & ANOVA',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Full mid-semester review of probability theorems, Binomial/Poisson/Normal distributions, Maximum Likelihood Estimation, Confidence Intervals, Hypothesis Testing, and ANOVA.',
    keyFormulas: [
      'MLE Principle: \\hat{\\theta}_{\\text{MLE}} = \\arg\\max_\\theta \\sum_{i=1}^n \\ln f(x_i \\mid \\theta)',
      'ANOVA Partition: SS_T = SS_B + SS_W, \\quad F = \\frac{MS_B}{MS_W}',
      'Chi-Square Goodness of Fit: \\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i}'
    ],
    detailedNotes: `
### High-Yield MST Focus Areas:
1. **Bayes Theorem & Total Probability**: Prior to posterior updating with disease and spam filter models.
2. **MLE**: Deriving the Maximum Likelihood Estimator for Gaussian parameters ($\\mu_{\\text{MLE}} = \\bar{X}$, $\\sigma^2_{\\text{MLE}} = \\frac{1}{n}\\sum (X_i - \\bar{X})^2$ [biased]).
3. **Hypothesis Testing**: Formulating $H_0$ and $H_1$, calculating test statistics, interpreting p-values against significance level $\\alpha = 0.05$.
4. **ANOVA**: Filling out ANOVA tables ($df$, $SS$, $MS$, $F$, $p$-value) and conducting post-hoc comparisons.
    `,
        objectives: [
      "Master Kolmogorov axioms and conditional probability rules.",
      "Derive Bayes' Theorem and apply it to posterior probability calculations.",
      "Understand Base Rate Fallacy and evidence weighting in classification."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Bayesian Posterior Calculation",
      "problem": "In an automated spam filter, 20% of incoming emails are spam. The word 'FREE' appears in 70% of spam emails, but only in 5% of non-spam emails. If an email contains 'FREE', compute the probability that it is spam.",
      "steps": [
            "Step 1: Identify given probabilities: Prior P(Spam) = 0.20, P(Ham) = 0.80. Likelihood P(FREE | Spam) = 0.70, P(FREE | Ham) = 0.05.",
            "Step 2: Compute marginal probability P(FREE) via Total Probability: P(FREE) = P(FREE|Spam)*P(Spam) + P(FREE|Ham)*P(Ham).",
            "Step 3: Calculate terms: (0.70 * 0.20) = 0.14. (0.05 * 0.80) = 0.04. Total P(FREE) = 0.14 + 0.04 = 0.18.",
            "Step 4: Apply Bayes' Theorem: P(Spam | FREE) = P(FREE | Spam)*P(Spam) / P(FREE) = 0.14 / 0.18 = 7/9 = 0.7778."
      ],
      "finalAnswer": "P(Spam | 'FREE') = 77.78%. The presence of the word 'FREE' increases the probability of spam from 20% prior to 77.78% posterior."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Let S denote spam and F denote word 'FREE'. P(S)=0.20, P(H)=0.80, P(F|S)=0.70, P(F|H)=0.05. (a) By Law of Total Probability: P(F) = P(F|S)P(S) + P(F|H)P(H) = (0.70)(0.20) + (0.05)(0.80) = 0.14 + 0.04 = 0.18. (b) By Bayes Theorem: P(S|F) = [P(F|S)P(S)] / P(F) = 0.14 / 0.18 = 0.7778 (77.78%). Interpretation: The likelihood ratio P(F|S)/P(F|H) = 0.70/0.05 = 14:1 strongly shifts the odds in favor of the spam hypothesis.",
      "rubric": [
            "2 Marks for setting up prior and likelihood equations",
            "4 Marks for total probability denominator calculation",
            "3 Marks for posterior probability calculation",
            "1 Mark for concluding interpretation"
      ]
},
        readings: "Sheldon Ross - Introduction to Probability and Statistics, Chapter 3, pp. 68-85.",
    codeSnippet: `# Analytical vs Scipy MLE for Gaussian distribution
data = [12.1, 14.3, 13.5, 12.8, 15.1, 13.9]
mu_mle = np.mean(data)
sigma_mle = np.std(data, ddof=0) # biased MLE standard deviation
print(f"mu_MLE: {mu_mle:.3f}, sigma_MLE: {sigma_mle:.3f}")`,
    mstReviewQuestion: 'Show that the sample variance S^2 = \\frac{1}{n-1}\\sum (X_i - \\bar{X})^2 is an unbiased estimator of population variance sigma^2, whereas the MLE estimator is biased.'
  },
  {
    id: 'lec-39',
    date: '30 Sep 2026',
    day: 'Wednesday',
    week: 7,
    subjectCode: 'BITS F113',
    subjectName: 'Machine Learning',
    instructor: 'Dr. K. Patel',
    sessionType: 'Theory Lecture',
    module: 'Module 1-4: Comprehensive MST Review',
    title: 'Lecture 7: MST Comprehensive Masterclass: Regression, SVM, Ensembles & ROC-AUC',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Mid-semester consolidation covering Linear/Logistic Regression, Bias-Variance tradeoff, L1/L2 Regularization, Decision Trees, SVM primal/dual formulations, and Random Forests.',
    keyFormulas: [
      'Precision: \\frac{TP}{TP + FP}, \\quad \\text{Recall (Sensitivity)}: \\frac{TP}{TP + FN}',
      'F1-Score: 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}',
      'Random Forest Variance Reduction: \\text{Var} = \\rho \\sigma^2 + \\frac{1 - \\rho}{B} \\sigma^2'
    ],
    detailedNotes: `
### High-Yield MST Focus Areas:
1. **Ordinary Least Squares & Ridge**: Normal equations $\\theta = (X^T X + \\lambda I)^{-1} X^T y$.
2. **Logistic Regression**: Sigmoid function, derivation of cross-entropy gradient.
3. **Decision Trees**: Computing Entropy, Gini Index, and Information Gain by hand on sample tables.
4. **Support Vector Machines**: Formulating the primal margin problem, identifying support vectors, kernel functions.
5. **Model Evaluation**: Constructing confusion matrices, calculating Precision, Recall, Specificity, F1-Score, and explaining ROC-AUC curves.
    `,
        objectives: [
      "Formulate empirical risk minimization for linear regression.",
      "Derive the closed-form Normal Equations using vector differential calculus.",
      "Analyze multicollinearity and numerical conditioning of design matrix X."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Computing OLS Normal Equations by Hand",
      "problem": "Given 3 observations: (x=1, y=2), (x=2, y=3), and (x=3, y=5), compute the optimal parameters theta = [theta_0, theta_1]^T using Normal Equations.",
      "steps": [
            "Step 1: Set up design matrix X and target y: X = [[1, 1], [1, 2], [1, 3]], y = [2, 3, 5]^T.",
            "Step 2: Compute X^T X = [[3, 6], [6, 14]]. Determinant det(X^T X) = 3(14) - 36 = 6.",
            "Step 3: Invert X^T X: (X^T X)^(-1) = (1/6) * [[14, -6], [-6, 3]].",
            "Step 4: Compute X^T y = [1*2 + 1*3 + 1*5, 1*2 + 2*3 + 3*5]^T = [10, 23]^T.",
            "Step 5: Multiply: theta = (1/6) * [[14*10 - 6*23], [-6*10 + 3*23]] = (1/6) * [2, 9]^T = [0.333, 1.500]^T."
      ],
      "finalAnswer": "Fitted model: y_hat = 0.333 + 1.500*x. Intercept theta_0 = 0.333, slope theta_1 = 1.500."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "1. Derivation: Cost J(theta) = (1/2m) (X*theta - y)^T (X*theta - y). Expanding: J(theta) = (1/2m) [theta^T X^T X theta - 2 y^T X theta + y^T y]. Taking derivative w.r.t theta: grad J(theta) = (1/m) [X^T X theta - X^T y] = 0. Therefore X^T X theta = X^T y => theta* = (X^T X)^(-1) X^T y. 2. Non-invertibility: Occurs when rank(X) < d (multicollinearity between features or d > m samples). 3. Remedy: Ridge regularization adds lambda*I, making (X^T X + lambda*I) strictly positive definite with positive eigenvalues, guaranteeing unique invertibility.",
      "rubric": [
            "4 Marks for complete matrix derivative derivation",
            "3 Marks for explaining two singularity conditions",
            "3 Marks for Ridge regularization positive-definiteness proof"
      ]
},
        readings: "Christopher Bishop - PRML, Chapter 3 (Linear Models for Regression), pp. 137-152.",
    codeSnippet: `from sklearn.metrics import confusion_matrix, precision_score, recall_score, f1_score

y_true = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
y_pred = [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]
cm = confusion_matrix(y_true, y_pred)
print("Confusion Matrix:\n", cm)
print(f"Precision: {precision_score(y_true, y_pred):.3f}")
print(f"Recall: {recall_score(y_true, y_pred):.3f}")
print(f"F1-Score: {f1_score(y_true, y_pred):.3f}")`,
    mstReviewQuestion: 'A classifier has Precision 0.80 and Recall 0.60 on a test set. Calculate its F1-score and explain when F1-score is preferred over simple accuracy.'
  },
  {
    id: 'lec-40',
    date: '01 Oct 2026',
    day: 'Thursday',
    week: 7,
    subjectCode: 'BITS F114',
    subjectName: 'Artificial and Computational Intelligence',
    instructor: 'Prof. S. Das',
    sessionType: 'Theory Lecture',
    module: 'Module 1-4: Comprehensive MST Review',
    title: 'Lecture 7: MST Comprehensive Masterclass: Search Algorithms, Alpha-Beta & Logic',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Consolidation of search algorithms (BFS, DFS, UCS, A*, IDA*), heuristic admissibility & consistency, Alpha-Beta pruning tracing, and Propositional Logic resolution inference.',
    keyFormulas: [
      'A* Condition: f(n) = g(n) + h(n), \\; h(n) \\le c(n, a, n\') + h(n\')',
      'Resolution Rule: \\frac{\\alpha \\lor \\beta, \\quad \\neg \\beta \\lor \\gamma}{\\alpha \\lor \\gamma}',
      'Conjunctive Normal Form (CNF): \\bigwedge_i \\left( \\bigvee_j L_{ij} \\right)'
    ],
    detailedNotes: `
### High-Yield MST Focus Areas:
1. **Search Algorithm Comparison**: Table of Completeness, Optimality, Time, and Space complexities for BFS, DFS, UCS, IDS, and A*.
2. **Heuristic Properties**: Rigorous proofs of A* optimality under admissible and consistent heuristics; creating dominant heuristics.
3. **Game Playing**: Complete trace of Alpha-Beta pruning on game trees, identifying exact pruned subtrees.
4. **Classical Logic**: Converting sentences to CNF (eliminating implications, moving negation inward, distributing $\\lor$ over $\\land$) and proving unsatisfiability via resolution refutation.
    `,
        objectives: [
      "Formulate formal state-space graphs with states, actions, and cost models.",
      "Evaluate admissibility and consistency criteria for heuristic functions.",
      "Trace search frontiers (Open and Closed lists) step-by-step for optimal pathfinding."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: A* Search Step-by-Step Path Trace",
      "problem": "Given start node S and goal node G with step costs: S->A (cost 2, h=5), S->B (cost 4, h=3), A->G (cost 5, h=0), B->G (cost 2, h=0). Trace A* search execution and identify the optimal path.",
      "steps": [
            "Step 1: Initialize priority queue with Start S: g(S)=0, h(S)=6 => f(S)=6. Explored set = {}.",
            "Step 2: Pop S (f=6). Expand S: Neighbor A has g(A)=2, h(A)=5 => f(A)=7. Neighbor B has g(B)=4, h(B)=3 => f(B)=7. Add A, B to Open list. Explored = {S}.",
            "Step 3: Pop A (f=7). Expand A: Neighbor G has g(G)=2+5=7, h(G)=0 => f(G)=7. Add G to Open list with cost 7 via S->A->G. Explored = {S, A}.",
            "Step 4: Pop B (f=7). Expand B: Neighbor G has g(G)=4+2=6, h(G)=0 => f(G)=6. Update G on Open list with lower cost 6 via S->B->G! Explored = {S, A, B}.",
            "Step 5: Pop G (f=6). Goal test succeeds! Terminate."
      ],
      "finalAnswer": "Optimal path found: S -> B -> G with total cost C* = 6. (Suboptimal path S->A->G with cost 7 was correctly pruned)."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Proof that consistency implies admissibility: Let h be consistent: h(n) <= c(n, a, n') + h(n') for all n, a, n'. By induction on path length k to goal: Base case k=1: If n is one step from goal g, h(n) <= c(n, a, g) + h(g) = c(n, a, g) + 0 = h*(n), so h(n) <= h*(n). Inductive step: Assume true for nodes k-1 steps from goal. For node n at distance k, h(n) <= c(n, a, n') + h(n') <= c(n, a, n') + h*(n') = h*(n). Therefore h(n) <= h*(n) for all nodes n, proving admissibility. Proof of optimality in graph search: When h is consistent, f(n) = g(n) + h(n) is monotonically non-decreasing along any path. This ensures that whenever A* expands a node n, it has already found the optimal path to n, preventing reopened closed nodes and guaranteeing optimal goal termination.",
      "rubric": [
            "4 Marks for inductive proof that consistency implies admissibility",
            "4 Marks for monotonicity proof of f-values along paths",
            "2 Marks for graph search optimality conclusion"
      ]
},
        readings: "Russell & Norvig - AIMA (4th Ed), Chapter 3 (Solving Problems by Searching), pp. 63-95.",
    codeSnippet: `# Resolution principle verification
# (A or B) and (~B or C) => (A or C)
clause1 = {'A', 'B'}
clause2 = {'~B', 'C'}
resolvent = (clause1 - {'B'}) | (clause2 - {'~B'})
print("Resolvent clause:", resolvent) # {'A', 'C'}`,
    mstReviewQuestion: 'Convert the following logical statement into Conjunctive Normal Form (CNF): (P \\implies Q) \\land \\neg(R \\lor \\neg S). Demonstrate resolution refutation to prove unsatisfiability.'
  },
  {
    id: 'lec-41',
    date: '02 Oct 2026',
    day: 'Friday (Today)',
    week: 7,
    subjectCode: 'BITS F112',
    subjectName: 'Mathematical Foundations / Stats (Lab & Tutorial)',
    instructor: 'Dr. A. Sen / Prof. R. Sharma',
    sessionType: 'Lab & Tutorial',
    module: 'Module 1-4: Pre-MST Master Workshop',
    title: 'Tutorial 7: Pre-MST Problem-Solving Marathon & Final Q&A Workshop',
    timing: '6:00 PM - 9:00 PM',
    summary: 'Final review session before tomorrow’s Mid-Semester Tests! Step-by-step solutions to sample examination questions in Linear Algebra, SVD, Probability, and Hypothesis Testing.',
    keyFormulas: [
      'Spectral Decomposition: A = Q \\Lambda Q^T',
      'SVD: A = U \\Sigma V^T',
      'Student-t Test: t = \\frac{\\bar{X} - \\mu_0}{S / \\sqrt{n}}',
      'ANOVA F: F = \\frac{MS_B}{MS_W}'
    ],
    detailedNotes: `
### Today's Intensive Workshop Summary:
- Solved 12 model examination problems covering all 4 modules of BITS F112 and BITS F111.
- Walked through proctoring requirements, mathematical notation formatting in the exam editor, and time management strategies for the 2-hour slots.
- Addressed student doubts on SVD singular vector signs, KKT complementary slackness, and ANOVA degree of freedom calculations.
- Verified that all student admit cards and webcam environments are ready for tomorrow's 11:00 AM kickoff!
    `,
        objectives: [
      "Comprehend core theoretical concepts, definitions, and operational mechanisms.",
      "Analyze mathematical formulations and verify algorithmic complexity guarantees.",
      "Apply practical computational methods and diagnose model behavior in ML/AI systems."
],
        workedExample: {
      "title": "Step-by-Step Worked Problem: Analytical Calculation & Verification",
      "problem": "Given typical model inputs for Tutorial 7, evaluate the system performance metric and determine the optimal decision threshold.",
      "steps": [
            "Step 1: Identify given parameters and state space constraints.",
            "Step 2: Apply the governing mathematical relationship and substitute model values.",
            "Step 3: Solve the algebraic system for unknown parameters.",
            "Step 4: Verify boundary conditions and numerical stability.",
            "Step 5: Compare final computed metric against empirical performance baselines."
      ],
      "finalAnswer": "Calculated optimal parameter satisfies all theoretical bounds with zero residual deviation."
},
        mstSolution: {
      "marks": "10 Marks",
      "modelAnswer": "Model Answer for MST Examination: (1) Theoretical Foundation: Formulate the problem statement using formal mathematical symbols and state assumptions clearly. (2) Analytical Derivation: Expand equations step-by-step, explaining each transition and theorem used. (3) Concrete Application: Solve the given numerical values to determine exact metrics. (4) Conclusion: Discuss computational complexity and practical engineering implications for large-scale AI/ML pipelines.",
      "rubric": [
            "3 Marks for formal definition and notation",
            "4 Marks for mathematical derivation steps",
            "3 Marks for correct final numerical answer and analysis"
      ]
},
        readings: "Marc Peter Deisenroth, A. Aldo Faisal - Mathematics for Machine Learning, Chapter 3-5.",
    codeSnippet: `# Quick reference check: Matrix Rank, Trace, Det, and SVD
A = np.array([[2, 1], [1, 2]])
U, S, Vt = np.linalg.svd(A)
print(f"Singular values: {S}")
print(f"Eigenvalues: {np.linalg.eigvals(A)}")
print("All systems verified for MST!")`,
    mstReviewQuestion: 'Best of luck for tomorrow’s exams! Ensure all 41 lecture notes and review questions are reviewed.'
  }
];
