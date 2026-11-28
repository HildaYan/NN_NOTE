/* Exam 5: all short-answer questions, chapters 1-13; matrix questions are the hardest. Generated. */
window.EXAM5=[
 {
  "t": "short",
  "pts": 3,
  "q": "[Ch.1] Why does a multilayer network need a non-linear activation function? State one advantage of ReLU over the logistic function.<span class=\"zh\">[第1章] 為什麼多層網路需要非線性的啟動函數?請寫出 ReLU 相對於 logistic 函數的一個優點。</span>",
  "keys": [
   [
    "非線性",
    "nonlinear",
    "non-linear"
   ],
   [
    "線性",
    "linear",
    "單層",
    "一層"
   ],
   [
    "梯度消失",
    "vanish",
    "飽和",
    "saturat",
    "稀疏",
    "sparse",
    "計算快",
    "計算簡單",
    "cheap",
    "fast"
   ]
  ],
  "labels": [
   "需要非線性",
   "全是線性時多層等於單層",
   "ReLU:不易梯度消失/稀疏/計算快"
  ],
  "need": 3,
  "model": "<ul><li>若每層都是線性函數,多層相乘後仍是一個線性轉換,等於單層網路。</li><li>非線性啟動函數讓網路能做非線性分類(例如 XOR)與逼近任意函數。</li><li>ReLU 優點:正區域梯度固定為 1,不易梯度消失;輸出稀疏;計算快。</li></ul>",
  "exp": "<ul><li>出處:第 1、6 講。</li></ul>",
  "section": "Part A — Core concepts, Ch.1–11 (9 questions × 3 pts = 27 pts)<span class=\"zh\">第一部分 — 第 1–11 章核心概念(9 題 × 3 分 = 27 分)</span>"
 },
 {
  "t": "short",
  "pts": 3,
  "q": "[Ch.2] Explain the difference between offline (batch) and online training, and what an epoch is.<span class=\"zh\">[第2章] 說明離線(批次)訓練與線上訓練的差別,以及什麼是一個 epoch。</span>",
  "keys": [
   [
    "離線",
    "批次",
    "batch",
    "offline"
   ],
   [
    "全部",
    "所有",
    "all",
    "整批",
    "整輪"
   ],
   [
    "逐筆",
    "每一筆",
    "一筆",
    "每筆",
    "each sample",
    "one sample",
    "sample by sample"
   ],
   [
    "epoch",
    "一輪",
    "週期",
    "跑完一次"
   ]
  ],
  "labels": [
   "離線/批次訓練",
   "看完全部樣本才更新",
   "線上:逐筆更新",
   "epoch 的定義"
  ],
  "need": 3,
  "model": "<ul><li>離線(批次):所有訓練樣本都看完一次後才更新權重。</li><li>線上(增量):每看一筆樣本就更新一次權重,適合資料陸續到來。</li><li>epoch:把全部訓練樣本完整跑過一次。</li></ul>",
  "exp": "<ul><li>出處:第 2 講。</li></ul>"
 },
 {
  "t": "short",
  "pts": 3,
  "q": "[Ch.3–4] Both the Perceptron and ADALINE use the form w ← w + η·(error)·x. What is different in the error term, and what happens to each when the data are not linearly separable?<span class=\"zh\">[第3–4章] 感知器與 ADALINE 的更新式都是 w ← w + η·(誤差)·x。兩者的「誤差」有何不同?資料線性不可分時各會發生什麼事?</span>",
  "keys": [
   [
    "啟動函數之後",
    "啟動後",
    "輸出y",
    "(d−y)",
    "d−y",
    "離散",
    "分類錯",
    "分錯"
   ],
   [
    "啟動函數之前",
    "啟動前",
    "(d−u)",
    "d−u",
    "連續",
    "線性輸出"
   ],
   [
    "不收斂",
    "無法收斂",
    "震盪",
    "一直更新",
    "never converge",
    "not converge"
   ],
   [
    "最小",
    "mse",
    "均方",
    "minimum",
    "minimi",
    "最小平方"
   ]
  ],
  "labels": [
   "感知器用啟動後的輸出(離散)",
   "ADALINE 用啟動前的 u(連續)",
   "感知器:不收斂、持續震盪",
   "ADALINE:停在 MSE 最小附近"
  ],
  "need": 3,
  "model": "<ul><li>感知器:誤差看啟動函數之後的離散輸出(分錯才更新)。</li><li>ADALINE:誤差是啟動函數之前的連續值 (d − u)。</li><li>線性不可分時:感知器永遠找不到分界、持續更新不收斂。</li><li>ADALINE:仍會沿梯度下降到均方誤差(MSE)最小的位置,但仍可能分錯。</li></ul>",
  "exp": "<ul><li>出處:第 3、4 講。</li></ul>"
 },
 {
  "t": "short",
  "pts": 3,
  "q": "[Ch.5] Why can the weights of a hidden layer not be updated with (d − y) directly? Describe how their local gradient δ is obtained.<span class=\"zh\">[第5章] 隱藏層權重為什麼不能直接用 (d − y) 更新?說明它的局部梯度 δ 如何得到。</span>",
  "keys": [
   [
    "沒有期望",
    "沒有目標",
    "沒有答案",
    "no desired",
    "no target",
    "未知"
   ],
   [
    "反向",
    "往回",
    "傳回",
    "backward",
    "backpropag"
   ],
   [
    "後一層",
    "下一層",
    "後層",
    "next layer",
    "following layer"
   ],
   [
    "g′",
    "g'",
    "微分",
    "導數",
    "derivative",
    "鏈鎖",
    "chain"
   ]
  ],
  "labels": [
   "隱藏層沒有期望輸出",
   "誤差反向傳播",
   "利用後一層的 δ 與權重",
   "乘上啟動函數微分(鏈鎖律)"
  ],
  "need": 3,
  "model": "<ul><li>隱藏神經元沒有期望輸出,無法直接算 (d − y)。</li><li>用鏈鎖律把輸出層的誤差反向傳播回來。</li><li>δ(隱藏) = g′(I) · Σ δ(後一層) · W(後一層);再以 ΔW = η·δ·Y(前層) 更新。</li></ul>",
  "exp": "<ul><li>出處:第 5 講。</li></ul>"
 },
 {
  "t": "short",
  "pts": 3,
  "q": "[Ch.6–7] A model has a very small training error but a large test error. Name this phenomenon and give two ways to reduce it.<span class=\"zh\">[第6–7章] 模型訓練誤差很小、測試誤差很大。這是什麼現象?寫出兩種改善方法。</span>",
  "keys": [
   [
    "過擬合",
    "過度擬合",
    "過度訓練",
    "overfit"
   ],
   [
    "早停",
    "early stop"
   ],
   [
    "減少",
    "較少",
    "降低神經元",
    "fewer",
    "reduce",
    "簡化"
   ],
   [
    "交叉驗證",
    "cross valid",
    "cross-valid"
   ],
   [
    "更多資料",
    "增加資料",
    "增加樣本",
    "more data",
    "more samples"
   ]
  ],
  "labels": [
   "過擬合",
   "早停",
   "減少隱藏神經元",
   "交叉驗證選拓樸",
   "增加訓練資料"
  ],
  "need": 3,
  "model": "<ul><li>這是過擬合(overfitting):把訓練資料的雜訊也記住了,泛化能力差。</li><li>改善:早停(early stopping)、減少隱藏神經元、用交叉驗證選拓樸、增加訓練資料。(寫出任兩種即可)</li></ul>",
  "exp": "<ul><li>出處:第 7 講。</li></ul>"
 },
 {
  "t": "short",
  "pts": 3,
  "q": "[Ch.8] Describe the two training stages of an RBF network and the learning type of each.<span class=\"zh\">[第8章] 說明 RBF 網路的兩個訓練階段,以及各階段屬於哪一種學習。</span>",
  "keys": [
   [
    "k-means",
    "kmeans",
    "k平均",
    "分群"
   ],
   [
    "非監督",
    "無監督",
    "unsupervised"
   ],
   [
    "delta",
    "lms",
    "輸出層",
    "output layer"
   ],
   [
    "監督式",
    "有監督",
    "supervised"
   ]
  ],
  "labels": [
   "第一階段:k-means 找中心與變異數",
   "第一階段為非監督",
   "第二階段:Delta 規則訓練輸出層",
   "第二階段為監督式"
  ],
  "need": 4,
  "model": "<ul><li>第一階段(非監督):用 k-means 找隱藏層高斯函數的中心與變異數。</li><li>第二階段(監督式):固定隱藏層,用 Delta 規則訓練線性輸出層權重。</li></ul>",
  "exp": "<ul><li>出處:第 8 講。</li></ul>"
 },
 {
  "t": "short",
  "pts": 3,
  "q": "[Ch.9] State the conditions on the weight matrix and the activation function that guarantee the stability of a Hopfield network, and what \"stable\" means.<span class=\"zh\">[第9章] 寫出保證 Hopfield 網路穩定的權重矩陣與啟動函數條件,並說明「穩定」代表什麼。</span>",
  "keys": [
   [
    "對稱",
    "symmetr"
   ],
   [
    "遞增",
    "increasing",
    "monoton"
   ],
   [
    "能量",
    "energy",
    "lyapunov"
   ],
   [
    "平衡點",
    "equilibri",
    "最小",
    "minim",
    "不再改變"
   ]
  ],
  "labels": [
   "W 對稱",
   "啟動函數單調遞增",
   "能量函數(Lyapunov)不上升",
   "到達平衡點(能量極小)"
  ],
  "need": 3,
  "model": "<ul><li>權重矩陣 W 必須對稱。</li><li>啟動函數必須單調遞增。</li><li>穩定:能量函數逐步下降到極小,狀態停在平衡點、不再改變。</li></ul>",
  "exp": "<ul><li>出處:第 9 講 p.31。</li></ul>"
 },
 {
  "t": "short",
  "pts": 3,
  "q": "[Ch.10] In SOM training, who gets updated for one input sample, and why is the neighbourhood width σ reduced over time?<span class=\"zh\">[第10章] SOM 訓練時,一筆輸入會更新哪些神經元?鄰域寬度 σ 為什麼要隨時間縮小?</span>",
  "keys": [
   [
    "贏家",
    "優勝",
    "winner",
    "bmu"
   ],
   [
    "鄰居",
    "鄰域",
    "鄰近",
    "neighbo"
   ],
   [
    "探索",
    "整體",
    "全域",
    "大範圍",
    "explor",
    "global",
    "排序"
   ],
   [
    "微調",
    "收斂",
    "細部",
    "fine",
    "converg",
    "局部"
   ]
  ],
  "labels": [
   "更新贏家",
   "以及鄰域內的神經元",
   "前期大範圍排列拓樸",
   "後期微調、收斂"
  ],
  "need": 3,
  "model": "<ul><li>更新贏家神經元以及它鄰域內的神經元(依高斯 α 遞減)。</li><li>前期 σ 大:很多神經元一起動,排出整體拓樸(探索)。</li><li>後期 σ 小:只做局部微調,讓權重收斂(利用)。</li></ul>",
  "exp": "<ul><li>出處:第 10 講。</li></ul>"
 },
 {
  "t": "short",
  "pts": 3,
  "q": "[Ch.11] How does LVQ-2.1 decide whether to update, and why is that restriction useful?<span class=\"zh\">[第11章] LVQ-2.1 如何決定要不要更新?這個限制有什麼好處?</span>",
  "keys": [
   [
    "視窗",
    "window"
   ],
   [
    "邊界",
    "boundary",
    "border"
   ],
   [
    "副贏家",
    "第二",
    "vice",
    "兩個"
   ],
   [
    "(1−λ)",
    "(1-λ)",
    "1−λ",
    "λ",
    "lambda",
    "比值",
    "ratio",
    "min"
   ]
  ],
  "labels": [
   "使用視窗(window)",
   "樣本在邊界附近才更新",
   "看贏家與副贏家的距離",
   "視窗條件含 λ / 距離比值"
  ],
  "need": 3,
  "model": "<ul><li>算贏家與副贏家距離 d_j、d_m;當 min(d_j/d_m, d_m/d_j) > (1−λ)/(1+λ) 時樣本落在視窗內才更新。</li><li>好處:只用靠近分類邊界的樣本調整,把向量推到邊界附近,避免遠處樣本把權重推偏、降低分類錯誤。</li></ul>",
  "exp": "<ul><li>出處:第 11 講。</li></ul>"
 },
 {
  "t": "short",
  "pts": 4,
  "q": "[Ch.12] Describe the architecture of a counter-propagation network: name its two layers, the learning type of each, and two application areas.<span class=\"zh\">[第12章] 描述反向傳遞網路(CPN)的架構:兩層的名稱、各自的學習方式,以及兩個應用領域。</span>",
  "keys": [
   [
    "kohonen",
    "競爭層"
   ],
   [
    "outstar",
    "grossberg",
    "外星"
   ],
   [
    "非監督",
    "無監督",
    "自組織",
    "unsupervised",
    "self-organ"
   ],
   [
    "監督式",
    "有監督",
    "supervised"
   ],
   [
    "分類",
    "特徵",
    "classif",
    "feature"
   ],
   [
    "曲線",
    "訊號",
    "信號",
    "curve",
    "signal",
    "擬合"
   ]
  ],
  "labels": [
   "第一層 Kohonen 層",
   "第二層 Outstar(Grossberg)層",
   "第一層非監督/自組織",
   "第二層監督式",
   "應用:特徵擷取/分類",
   "應用:曲線擬合/訊號處理"
  ],
  "need": 5,
  "model": "<ul><li>第一層(隱藏層):Kohonen 層,自組織(非監督)競爭學習,找出資料群集。</li><li>第二層(輸出層):Outstar 層(Grossberg 排列),監督式訓練;使用斜坡類啟動函數(如 ReLU)、無偏權。</li><li>應用:特徵擷取(樣式分類)、曲線擬合、訊號處理。</li><li>Hecht-Nielsen(1987)提出。</li></ul>",
  "exp": "<ul><li>出處:第 12 講 p.1–4。</li></ul>",
  "section": "Part B — New chapters 12–13: CPN and ART (6 questions × 4 pts = 24 pts)<span class=\"zh\">第二部分 — 第 12–13 章:CPN 與 ART(6 題 × 4 分 = 24 分)</span>"
 },
 {
  "t": "short",
  "pts": 4,
  "q": "[Ch.12] Write the weight-update rule of the outstar layer, say which weights are changed for one sample, and describe the operation phase in matrix form.<span class=\"zh\">[第12章] 寫出 Outstar 層的權重更新式,說明一筆樣本會改到哪些權重,並以矩陣形式說明運作階段。</span>",
  "keys": [
   [
    "d−w",
    "d_j−w",
    "dj−w",
    "期望",
    "desired",
    "(d−"
   ],
   [
    "η",
    "學習率",
    "learningrate",
    "eta"
   ],
   [
    "贏家",
    "winner",
    "勝"
   ],
   [
    "連到",
    "連接",
    "相連",
    "那一行",
    "那一欄",
    "column",
    "connected",
    "只有",
    "only"
   ],
   [
    "y=w",
    "w·u",
    "wu",
    "w(2)u",
    "w²u",
    "乘上",
    "相乘"
   ]
  ],
  "labels": [
   "含 (d − W) 的更新",
   "乘學習率 η",
   "以贏家為準",
   "只改贏家連出去的權重(W 的一欄)",
   "運作:y = W⁽²⁾·u"
  ],
  "need": 4,
  "model": "<ul><li>更新式:W_ji⁽²⁾ ← W_ji⁽²⁾ + η·( d_j⁽ᵏ⁾ − W_ji⁽²⁾ )·u_i⁽ᵏ⁾。</li><li>只更新「贏家神經元 i 連到各輸出神經元」的權重,也就是矩陣 W⁽²⁾(n₂ × n₁)中的第 i 欄。</li><li>運作階段:先在 Kohonen 層找贏家取得 u,再算 y = W⁽²⁾·u(y_j = W_ji⁽²⁾·u_i);u 只有贏家非零,等於取出第 i 欄再乘 u_i。</li></ul>",
  "exp": "<ul><li>出處:第 12 講 p.5–8。</li></ul>"
 },
 {
  "t": "short",
  "pts": 4,
  "q": "[Ch.13] Name the three biological principles behind Adaptive Resonance Theory, and state the main ability that distinguishes ART networks.<span class=\"zh\">[第13章] 寫出自適應共振理論(ART)依據的三個生物原理,以及 ART 網路最主要的特長。</span>",
  "keys": [
   [
    "訊號正規化",
    "信號正規化",
    "正規化",
    "signalnormali"
   ],
   [
    "對比",
    "contrast"
   ],
   [
    "短期記憶",
    "short-term",
    "shortterm"
   ],
   [
    "新樣式",
    "新的樣式",
    "新知識",
    "newpattern",
    "學習新"
   ],
   [
    "不破壞",
    "保留",
    "不忘",
    "舊知識",
    "withoutdestroy",
    "withoutdestruct",
    "preserve"
   ]
  ],
  "labels": [
   "訊號正規化",
   "對比增強",
   "短期記憶",
   "能學新樣式",
   "同時不破壞舊知識"
  ],
  "need": 5,
  "model": "<ul><li>Signal Normalization(訊號正規化):適應不斷變化的環境。</li><li>Contrast Intensification(對比增強):透過持續觀察辨認細微差異。</li><li>Short-term memory(短期記憶):暫存感測資訊供之後決策。</li><li>特長:出現新樣本時能學新樣式,而不破壞先前已擷取的知識。</li><li>Grossberg(1976)提出。</li></ul>",
  "exp": "<ul><li>出處:第 13 講 p.1–3。</li></ul>"
 },
 {
  "t": "short",
  "pts": 4,
  "q": "[Ch.13] Compare ART-1, ART-2 and ART-Map (input type and learning type), and describe the two layers and two weight matrices of ART-1.<span class=\"zh\">[第13章] 比較 ART-1、ART-2、ART-Map(輸入型態與學習方式),並描述 ART-1 的兩層與兩組權重。</span>",
  "keys": [
   [
    "二元",
    "二進位",
    "binary"
   ],
   [
    "連續",
    "類比",
    "analog",
    "continuous"
   ],
   [
    "非監督",
    "unsupervised"
   ],
   [
    "監督式",
    "有監督",
    "supervised"
   ],
   [
    "比較層",
    "comparison"
   ],
   [
    "辨識層",
    "識別層",
    "recognition"
   ],
   [
    "wf",
    "w(f)",
    "前饋",
    "feedforward"
   ],
   [
    "wb",
    "w(b)",
    "回饋",
    "feedback"
   ]
  ],
  "labels": [
   "ART-1 吃二元輸入",
   "ART-2 可吃連續輸入",
   "ART-1/2 非監督",
   "ART-Map 監督式",
   "F1 比較層",
   "F2 辨識層",
   "W(f) 前饋(實數)",
   "W(b) 回饋(二元)"
  ],
  "need": 6,
  "model": "<ul><li>ART-1:二元輸入、非監督。ART-2:二元或連續(類比)輸入、非監督。</li><li>ART-Map:二元或類比輸入、即時監督式,由兩個 ART 網路組成。</li><li>F⁽¹⁾ 比較層(特徵辨識),神經元數 = 輸入維度;F⁽²⁾ 辨識層(類別辨識),神經元數隨類別數動態增加,層內側向競爭。</li><li>W⁽ᶠ⁾:F1→F2 前饋,實數;W⁽ᵇ⁾:F2→F1 回饋,二元。</li></ul>",
  "exp": "<ul><li>出處:第 13 講 p.4–7。</li></ul>"
 },
 {
  "t": "short",
  "pts": 4,
  "q": "[Ch.13] List the six stages of ART-1 in order and explain what happens when the similarity test fails.<span class=\"zh\">[第13章] 依序寫出 ART-1 的六個階段,並說明相似度測試沒通過時會怎麼做。</span>",
  "keys": [
   [
    "初始",
    "initializ"
   ],
   [
    "辨識",
    "識別",
    "recognition"
   ],
   [
    "比較",
    "comparison"
   ],
   [
    "搜尋",
    "搜索",
    "search"
   ],
   [
    "更新",
    "update"
   ],
   [
    "提供",
    "輸出類別",
    "provision"
   ],
   [
    "停用",
    "抑制",
    "禁用",
    "disable",
    "uk=0",
    "設為0",
    "歸零"
   ],
   [
    "新增",
    "新的神經元",
    "加入",
    "newneuron",
    "add"
   ]
  ],
  "labels": [
   "① 參數初始化",
   "② 辨識",
   "③ 比較",
   "④ 搜尋",
   "⑤ 更新",
   "⑥ 提供類別",
   "停用目前贏家",
   "沒有可用者就新增神經元"
  ],
  "need": 6,
  "model": "<ul><li>六階段:①初始化 → ②辨識 → ③比較(相似度測試)→ ④搜尋 → ⑤更新 → ⑥提供類別標籤。</li><li>R ≤ ρ 時:停用目前贏家(u_k = 0,避免重複選到),回到辨識階段找下一個候選。</li><li>若 F⁽²⁾ 沒有任何可用神經元通過,就新增(啟用)一個神經元代表新類別,再更新權重;處理完後重新啟用所有神經元。</li></ul>",
  "exp": "<ul><li>出處:第 13 講 p.8–29、37。</li></ul>"
 },
 {
  "t": "short",
  "pts": 4,
  "q": "[Ch.13] What is the vigilance parameter ρ? Describe the effect of a large and a small ρ, and relate it to the lecture results for ρ = 0.4 and ρ = 0.7.<span class=\"zh\">[第13章] 警戒參數 ρ 是什麼?說明 ρ 大與小的影響,並對照講義中 ρ = 0.4 與 0.7 的結果。</span>",
  "keys": [
   [
    "0<ρ<1",
    "0到1",
    "0~1",
    "介於0",
    "between0and1",
    "0和1",
    "0與1"
   ],
   [
    "相似",
    "similar"
   ],
   [
    "越嚴",
    "嚴格",
    "細節",
    "分得越細",
    "strict",
    "detail",
    "較多類",
    "更多類",
    "類別越多",
    "moreclass"
   ],
   [
    "寬鬆",
    "較少類",
    "類別越少",
    "粗",
    "relax",
    "fewer"
   ],
   [
    "6類",
    "6個",
    "六",
    "6class"
   ],
   [
    "9類",
    "9個",
    "九",
    "9class"
   ]
  ],
  "labels": [
   "ρ 介於 0 與 1",
   "相似度測試的門檻",
   "ρ 大:嚴格、類別多",
   "ρ 小:寬鬆、類別少",
   "ρ=0.4 分成 6 類",
   "ρ=0.7 分成 9 類"
  ],
  "need": 5,
  "model": "<ul><li>ρ 是相似度測試的門檻,0 < ρ < 1;R > ρ 才通過。</li><li>ρ 大:考慮更多細節、判別嚴格,容易新增類別。</li><li>ρ 小:判別寬鬆,類別較少。</li><li>講義工業製程例(10 種情況、16 個狀態變數):ρ = 0.4 得 6 類,ρ = 0.7 得 9 類。</li></ul>",
  "exp": "<ul><li>出處:第 13 講 p.12、43–45。</li></ul>"
 },
 {
  "t": "short",
  "pts": 7,
  "q": "[Matrix ① · Ch.13, Lecture 13 pp.31–33] F⁽¹⁾ has 8 neurons and neuron k = 2 of F⁽²⁾ wins. Compute the similarity ratio R, then (applying the update rules as in the lecture example) the new feedback vector W⁽ᵇ⁾(t+1) and the new feedforward vector W⁽ᶠ⁾(t+1) of neuron 2. Finally state whether the similarity test passes (1 = yes, 0 = no) for ρ = 0.4 and for ρ = 0.7.<span class=\"zh\">[矩陣① ・第13章・講義第13講 p.31–33] F⁽¹⁾ 有 8 個神經元,F⁽²⁾ 的 k = 2 號神經元獲勝。求相似度比值 R,再(依講義例題套用更新式)求神經元 2 的新回饋向量 W⁽ᵇ⁾(t+1) 與新前饋向量 W⁽ᶠ⁾(t+1)。最後判斷 ρ = 0.4 與 ρ = 0.7 時相似度測試是否通過(1 = 通過、0 = 不通過)。</span><div><span class=\"mshow\"><b>x(1×8)</b><span class=\"mscroll\" style=\"display:block\"><table class=\"mx ans\"><tr><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td></tr></table></span></span><span class=\"mshow\"><b>W⁽ᵇ⁾₂(t)(1×8)</b><span class=\"mscroll\" style=\"display:block\"><table class=\"mx ans\"><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td></tr></table></span></span></div>",
  "mats": [
   {
    "label": "R",
    "a": [
     [
      0.6666666666666666
     ]
    ]
   },
   {
    "label": "W⁽ᵇ⁾₂(t+1)",
    "a": [
     [
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      1
     ]
    ]
   },
   {
    "label": "W⁽ᶠ⁾₂(t+1)",
    "a": [
     [
      0.2222222222222222,
      0.0,
      0.0,
      0.2222222222222222,
      0.2222222222222222,
      0.0,
      0.0,
      0.2222222222222222
     ]
    ]
   },
   {
    "label": "[ρ=0.4, ρ=0.7] 通過?",
    "a": [
     [
      1,
      0
     ]
    ]
   }
  ],
  "tol0": 0.003,
  "exp": "<div class=\"sol\"><b>題目重點:</b>x = [1, 0, 1, 1, 1, 0, 1, 1],W⁽ᵇ⁾₂ = [1, 0, 0, 1, 1, 1, 0, 1]。<b>第一步:算相似度 R</b><ul><li>分子 = Σ W⁽ᵇ⁾·x(兩者都是 1 的位置):第 1、4、5、8 位 → <b>4</b></li><li>分母 = Σ x(x 裡 1 的個數)= <b>6</b></li><li>R = 4/6 = <b>0.6667</b></li></ul><b>第二步:更新回饋權重(AND)</b><ul><li>W⁽ᵇ⁾(t+1) = W⁽ᵇ⁾(t)·x,逐位相乘</li><li>= <b>[1, 0, 0, 1, 1, 0, 0, 1]</b></li></ul><b>第三步:更新前饋權重</b><ul><li>W⁽ᶠ⁾ = W⁽ᵇ⁾·x / (0.5 + Σ W⁽ᵇ⁾·x) = 新向量 / (0.5 + 4)</li><li>是 1 的位置 = 1/4.5 = <b>2/9 ≈ 0.2222</b>,其餘 0</li></ul><b>第四步:相似度測試</b><ul><li>0.6667 &gt; 0.4 → <b>通過(1)</b></li><li>0.6667 ≤ 0.7 → <b>不通過(0)</b></li></ul><b>注意:</b><ul><li>真正執行演算法時,只有通過(R &gt; ρ)才更新該贏家;ρ = 0.7 時應停用神經元 2、另找候選。</li></ul></div>",
  "section": "Part C — Matrix operations (hardest; 5 questions, 49 pts, ordered from easier to harder)<span class=\"zh\">第三部分 — 矩陣運算(最困難;5 題共 49 分,由淺到深)</span>"
 },
 {
  "t": "short",
  "pts": 8,
  "q": "[Matrix ② · Ch.5, Lecture 5 pp.9–12] 3–2–1 MLP with tanh (radians). Every layer receives a bias input −1 as its first element. Perform the whole forward stage in matrix form (round each Y to 2 decimals before using it in the next layer): I⁽¹⁾, Y⁽¹⁾, I⁽²⁾, Y⁽²⁾, I⁽³⁾ and y.<span class=\"zh\">[矩陣② ・第5章・講義第5講 p.9–12] 3–2–1 MLP,tanh 啟動(弧度)。每一層的第一個輸入都是偏權 −1。請以矩陣形式完成整個前向傳播(每層 Y 先四捨五入到小數 2 位再代入下一層):求 I⁽¹⁾、Y⁽¹⁾、I⁽²⁾、Y⁽²⁾、I⁽³⁾ 與 y。</span><div><span class=\"mshow\"><b>W⁽¹⁾(3×3)</b><span class=\"mscroll\" style=\"display:block\"><table class=\"mx ans\"><tr><td>0.2</td><td>0.4</td><td>0.5</td></tr><tr><td>0.3</td><td>0.6</td><td>0.7</td></tr><tr><td>0.4</td><td>0.8</td><td>0.3</td></tr></table></span></span><span class=\"mshow\"><b>W⁽²⁾(2×4)</b><span class=\"mscroll\" style=\"display:block\"><table class=\"mx ans\"><tr><td>−0.7</td><td>0.6</td><td>0.2</td><td>0.7</td></tr><tr><td>−0.3</td><td>0.7</td><td>0.2</td><td>0.8</td></tr></table></span></span><span class=\"mshow\"><b>W⁽³⁾(1×3)</b><span class=\"mscroll\" style=\"display:block\"><table class=\"mx ans\"><tr><td>0.1</td><td>0.8</td><td>0.5</td></tr></table></span></span><span class=\"mshow\"><b>x = [x₀, x₁, x₂]ᵀ</b><span class=\"mscroll\" style=\"display:block\"><table class=\"mx ans\"><tr><td>−1</td></tr><tr><td>0.3</td></tr><tr><td>0.7</td></tr></table></span></span></div>",
  "mats": [
   {
    "label": "I⁽¹⁾",
    "a": [
     [
      0.27
     ],
     [
      0.37
     ],
     [
      0.05
     ]
    ]
   },
   {
    "label": "Y⁽¹⁾",
    "a": [
     [
      0.26
     ],
     [
      0.35
     ],
     [
      0.05
     ]
    ]
   },
   {
    "label": "I⁽²⁾",
    "a": [
     [
      0.96
     ],
     [
      0.59
     ]
    ]
   },
   {
    "label": "Y⁽²⁾",
    "a": [
     [
      0.74
     ],
     [
      0.53
     ]
    ]
   },
   {
    "label": "I⁽³⁾",
    "a": [
     [
      0.76
     ]
    ]
   },
   {
    "label": "y",
    "a": [
     [
      0.64
     ]
    ]
   }
  ],
  "tol0": 0.0101,
  "exp": "<div class=\"sol\"><b>題目重點:</b>x = [−1, 0.3, 0.7]ᵀ,I⁽ᴸ⁾ = W⁽ᴸ⁾·Ȳ⁽ᴸ⁻¹⁾,Y = tanh(I)。<b>第一步:第 1 層:3×3 乘 3×1</b><ul><li>I₁ = 0.2(−1) + 0.4(0.3) + 0.5(0.7) = <b>0.27</b></li><li>I₂ = 0.3(−1) + 0.6(0.3) + 0.7(0.7) = <b>0.37</b></li><li>I₃ = 0.4(−1) + 0.8(0.3) + 0.3(0.7) = <b>0.05</b></li><li>Y⁽¹⁾ = tanh → <b>[0.26, 0.35, 0.05]ᵀ</b></li></ul><b>第二步:補上 −1 成 Ȳ⁽¹⁾,做 2×4 乘 4×1</b><ul><li>Ȳ⁽¹⁾ = [−1, 0.26, 0.35, 0.05]ᵀ</li><li>I₁ = 0.7 + 0.156 + 0.07 + 0.035 = <b>0.961</b></li><li>I₂ = 0.3 + 0.182 + 0.07 + 0.04 = <b>0.592</b></li><li>Y⁽²⁾ = <b>[0.74, 0.53]ᵀ</b></li></ul><b>第三步:第 3 層:1×3 乘 3×1</b><ul><li>Ȳ⁽²⁾ = [−1, 0.74, 0.53]ᵀ</li><li>I⁽³⁾ = −0.1 + 0.592 + 0.265 = <b>0.757 ≈ 0.76</b></li><li>y = tanh(0.757) = <b>0.64</b></li></ul><b>檢查尺寸:</b><ul><li>(3×3)(3×1) → (2×4)(4×1) → (1×3)(3×1),下一層的欄數永遠是「前層神經元數 + 1」。</li></ul></div>"
 },
 {
  "t": "short",
  "pts": 11,
  "q": "[Matrix ③ · Ch.9, Lecture 9 pp.22–27] Store z⁽¹⁾ and z⁽²⁾ with W = (1/9)·Σ z⁽ᵏ⁾z⁽ᵏ⁾ᵀ − (2/9)·I (9×9, zero bias). For the noisy input z: give row 1, row 4 and row 5 of W; compute u = W·z and the new state; compute W·z_new for the second iteration; and the energy E = −½·zᵀWz before and after the update. (Fractions such as 2/9 are accepted; keep the old value when u = 0.)<span class=\"zh\">[矩陣③ ・第9章・講義第9講 p.22–27] 以 W = (1/9)·Σ z⁽ᵏ⁾z⁽ᵏ⁾ᵀ − (2/9)·I(9×9,偏壓為 0)儲存 z⁽¹⁾、z⁽²⁾。對雜訊輸入 z:寫出 W 的第 1、4、5 列;計算 u = W·z 與新狀態;計算第二次迭代的 W·z_new;以及更新前後的能量 E = −½·zᵀWz。(可填分數如 2/9;u = 0 時保持原值。)</span><div><span class=\"mshow\"><b>z⁽¹⁾ᵀ</b><span class=\"mscroll\" style=\"display:block\"><table class=\"mx ans\"><tr><td>−1</td><td>1</td><td>−1</td><td>1</td><td>1</td><td>1</td><td>−1</td><td>1</td><td>−1</td></tr></table></span></span><br><span class=\"mshow\"><b>z⁽²⁾ᵀ</b><span class=\"mscroll\" style=\"display:block\"><table class=\"mx ans\"><tr><td>1</td><td>−1</td><td>1</td><td>−1</td><td>1</td><td>−1</td><td>1</td><td>−1</td><td>1</td></tr></table></span></span><br><span class=\"mshow\"><b>雜訊輸入 zᵀ</b><span class=\"mscroll\" style=\"display:block\"><table class=\"mx ans\"><tr><td>−1</td><td>1</td><td>−1</td><td>−1</td><td>1</td><td>1</td><td>−1</td><td>1</td><td>−1</td></tr></table></span></span></div>",
  "mats": [
   {
    "label": "W 第 1 列",
    "a": [
     [
      0.0,
      -0.2222222222222222,
      0.2222222222222222,
      -0.2222222222222222,
      0.0,
      -0.2222222222222222,
      0.2222222222222222,
      -0.2222222222222222,
      0.2222222222222222
     ]
    ]
   },
   {
    "label": "W 第 4 列",
    "a": [
     [
      -0.2222222222222222,
      0.2222222222222222,
      -0.2222222222222222,
      0.0,
      0.0,
      0.2222222222222222,
      -0.2222222222222222,
      0.2222222222222222,
      -0.2222222222222222
     ]
    ]
   },
   {
    "label": "W 第 5 列",
    "a": [
     [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    ]
   },
   {
    "label": "u = W·z",
    "a": [
     [
      -1.1111111111111112
     ],
     [
      1.1111111111111112
     ],
     [
      -1.1111111111111112
     ],
     [
      1.5555555555555554
     ],
     [
      0.0
     ],
     [
      1.1111111111111112
     ],
     [
      -1.1111111111111112
     ],
     [
      1.1111111111111112
     ],
     [
      -1.1111111111111112
     ]
    ]
   },
   {
    "label": "z_new",
    "a": [
     [
      -1
     ],
     [
      1
     ],
     [
      -1
     ],
     [
      1
     ],
     [
      1
     ],
     [
      1
     ],
     [
      -1
     ],
     [
      1
     ],
     [
      -1
     ]
    ]
   },
   {
    "label": "W·z_new",
    "a": [
     [
      -1.5555555555555554
     ],
     [
      1.5555555555555554
     ],
     [
      -1.5555555555555554
     ],
     [
      1.5555555555555554
     ],
     [
      0.0
     ],
     [
      1.5555555555555554
     ],
     [
      -1.5555555555555554
     ],
     [
      1.5555555555555554
     ],
     [
      -1.5555555555555554
     ]
    ]
   },
   {
    "label": "[E 更新前, E 更新後]",
    "a": [
     [
      -3.1111111111111107,
      -6.222222222222221
     ]
    ]
   }
  ],
  "tol0": 0.012,
  "exp": "<div class=\"sol\"><b>題目重點:</b>p = 2、m = 9,W = (z⁽¹⁾z⁽¹⁾ᵀ + z⁽²⁾z⁽²⁾ᵀ − 2I)/9。<b>第一步:觀察兩個樣式</b><ul><li>除了第 5 個元素外,z⁽²⁾ = −z⁽¹⁾(正負相反);第 5 個元素兩者都是 +1</li><li>W_ij = (z⁽¹⁾_i z⁽¹⁾_j + z⁽²⁾_i z⁽²⁾_j)/9,i ≠ j;對角線 = (2 − 2)/9 = 0</li></ul><b>第二步:寫出指定的列</b><ul><li>i、j 都不是 5:兩個乘積相同 → ±2/9</li><li>含第 5 個元素:兩個乘積一正一負 → 0,所以<b>第 5 列全為 0</b></li><li>第 1 列 = (2/9)·[0, −1, 1, −1, 0, −1, 1, −1, 1]</li><li>第 4 列 = (2/9)·[−1, 1, −1, 0, 0, 1, −1, 1, −1]</li></ul><b>第三步:第一次迭代 u = W·z</b><ul><li>i ≠ 4、5:扣掉自己與第 5 位剩 7 個位置,6 個正確、第 4 位是雜訊 → |u| = (6 − 1)×2/9 = 10/9 ≈ 1.1111</li><li>i = 4:雜訊就是自己(對角線 0 不計),其他 7 個位置全部正確 → u₄ = 14/9 ≈ 1.5556</li><li>u₅ = 0 → 保持原值 +1</li><li>sign(u) 得 z_new = [−1, 1, −1, 1, 1, 1, −1, 1, −1],只有第 4 個像素由 −1 翻成 +1(= z⁽¹⁾)</li></ul><b>第四步:第二次迭代</b><ul><li>W·z_new = (14/9)·z_new(第 5 個為 0)</li><li>取 sign 後與 z_new 相同 → <b>不再更新,收斂</b></li></ul><b>第五步:能量</b><ul><li>E = −½·zᵀ(W·z):更新前 = −28/9 ≈ <b>−3.1111</b></li><li>更新後 = −56/9 ≈ <b>−6.2222</b></li><li>能量下降,符合 Lyapunov 穩定性</li></ul><b>提醒:</b><ul><li>講義 p.22 的文字寫 n = 81,但 p.24 的矩陣數值是 ±0.22 = ±2/9,所以本題依矩陣數值使用 1/9。</li></ul></div>"
 },
 {
  "t": "short",
  "pts": 11,
  "q": "[Matrix ④ · Ch.13, Lecture 13 pp.43–45] ART-1 starts with one neuron in F⁽²⁾ (W⁽ᵇ⁾ all ones, W⁽ᶠ⁾ = 1/(1+n)). Situation 1 has been learned. Now present Situation 2: compute the activation u₁, the number of common ones, the number of ones in x⁽²⁾ and R. Then (A) for ρ = 0.4 give the new W⁽ᵇ⁾ of neuron 1 and the non-zero value of its W⁽ᶠ⁾; (B) for ρ = 0.7 give W⁽ᵇ⁾ of the newly added neuron 2 and the non-zero value of its W⁽ᶠ⁾.<span class=\"zh\">[矩陣④ ・第13章・講義第13講 p.43–45] ART-1 一開始 F⁽²⁾ 只有 1 個神經元(W⁽ᵇ⁾ 全 1、W⁽ᶠ⁾ = 1/(1+n)),且情況 1 已學完。現在輸入情況 2:求活化值 u₁、共同的 1 的個數、x⁽²⁾ 中 1 的個數與 R。接著 (A) ρ = 0.4:寫出神經元 1 的新 W⁽ᵇ⁾ 與其 W⁽ᶠ⁾ 的非零值;(B) ρ = 0.7:寫出新增神經元 2 的 W⁽ᵇ⁾ 與其 W⁽ᶠ⁾ 的非零值。</span><div><span class=\"mshow\"><b>情況 1:x⁽¹⁾</b><span class=\"mscroll\" style=\"display:block\"><table class=\"mx ans\"><tr><td>x1</td><td>x2</td><td>x3</td><td>x4</td><td>x5</td><td>x6</td><td>x7</td><td>x8</td><td>x9</td><td>x10</td><td>x11</td><td>x12</td><td>x13</td><td>x14</td><td>x15</td><td>x16</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr></table></span></span><br><span class=\"mshow\"><b>情況 2:x⁽²⁾</b><span class=\"mscroll\" style=\"display:block\"><table class=\"mx ans\"><tr><td>x1</td><td>x2</td><td>x3</td><td>x4</td><td>x5</td><td>x6</td><td>x7</td><td>x8</td><td>x9</td><td>x10</td><td>x11</td><td>x12</td><td>x13</td><td>x14</td><td>x15</td><td>x16</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr></table></span></span></div>",
  "mats": [
   {
    "label": "[u₁, 共同 1 數, x⁽²⁾ 的 1 數, R]",
    "a": [
     [
      0.43478260869565216,
      5,
      10,
      0.5
     ]
    ]
   },
   {
    "label": "(A) ρ=0.4:W⁽ᵇ⁾₁",
    "a": [
     [
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      0,
      0,
      0
     ]
    ]
   },
   {
    "label": "(A) W⁽ᶠ⁾₁ 非零值",
    "a": [
     [
      0.18181818181818182
     ]
    ]
   },
   {
    "label": "(B) ρ=0.7:W⁽ᵇ⁾₂",
    "a": [
     [
      1,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      0,
      0
     ]
    ]
   },
   {
    "label": "(B) W⁽ᶠ⁾₂ 非零值",
    "a": [
     [
      0.09523809523809523
     ]
    ]
   }
  ],
  "tol0": 0.0015,
  "exp": "<div class=\"sol\"><b>題目重點:</b>n = 16;情況 1 學完後 W⁽ᵇ⁾₁ = x⁽¹⁾。<b>第一步:先確認情況 1 學到什麼</b><ul><li>W⁽ᵇ⁾ 起始全 1,AND x⁽¹⁾ 後 = x⁽¹⁾(共 11 個 1)</li><li>W⁽ᶠ⁾₁ = x⁽¹⁾ / (0.5 + 11) = x⁽¹⁾ / 11.5</li></ul><b>第二步:活化值與相似度</b><ul><li>兩者共同為 1 的位置:x5、x7、x9、x10、x13 → <b>5</b> 個</li><li>u₁ = Σ W⁽ᶠ⁾x = 5 / 11.5 = <b>0.4348</b></li><li>x⁽²⁾ 有 <b>10</b> 個 1 → R = 5/10 = <b>0.5</b></li></ul><b>第三步:(A) ρ = 0.4:通過</b><ul><li>0.5 &gt; 0.4 → 更新神經元 1</li><li>W⁽ᵇ⁾₁ = x⁽¹⁾ AND x⁽²⁾ = [0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0]</li><li>W⁽ᶠ⁾ 非零值 = 1/(0.5 + 5) = <b>0.1818</b></li></ul><b>第四步:(B) ρ = 0.7:不通過</b><ul><li>0.5 ≤ 0.7 → 停用神經元 1;沒有其他可用神經元 → 新增神經元 2</li><li>新神經元 W⁽ᵇ⁾ 全 1,AND x⁽²⁾ → W⁽ᵇ⁾₂ = x⁽²⁾</li><li>W⁽ᶠ⁾ 非零值 = 1/(0.5 + 10) = <b>0.0952</b></li></ul><b>與講義結果對照:</b><ul><li>講義 p.45:ρ = 0.4 時情況 2 併入第 1 類;ρ = 0.7 時情況 2 新增第 2 類,與本題一致。</li></ul></div>"
 },
 {
  "t": "short",
  "pts": 12,
  "q": "[Matrix ⑤ · Ch.5 — hardest] Continue Matrix ② with one complete backward pass. Given (set by this exam): desired output d = 1, η = 0.1; use Y⁽¹⁾ = [0.26, 0.35, 0.05]ᵀ, Y⁽²⁾ = [0.74, 0.53]ᵀ, y = 0.64 and g′(I) = 1 − Y². Compute δ⁽³⁾, δ⁽²⁾, δ⁽¹⁾ and the updated W⁽³⁾, W⁽²⁾, W⁽¹⁾. All deltas must use the OLD weights. Answer to 4 decimals.<span class=\"zh\">[矩陣⑤ ・第5章——最難] 接續矩陣②,完成一次完整的反向傳播。本卷設定:期望輸出 d = 1、η = 0.1;使用 Y⁽¹⁾ = [0.26, 0.35, 0.05]ᵀ、Y⁽²⁾ = [0.74, 0.53]ᵀ、y = 0.64,且 g′(I) = 1 − Y²。求 δ⁽³⁾、δ⁽²⁾、δ⁽¹⁾ 與更新後的 W⁽³⁾、W⁽²⁾、W⁽¹⁾。所有 δ 都要用「舊」權重計算。答案取小數 4 位。</span><div><span class=\"mshow\"><b>W⁽¹⁾(3×3)</b><span class=\"mscroll\" style=\"display:block\"><table class=\"mx ans\"><tr><td>0.2</td><td>0.4</td><td>0.5</td></tr><tr><td>0.3</td><td>0.6</td><td>0.7</td></tr><tr><td>0.4</td><td>0.8</td><td>0.3</td></tr></table></span></span><span class=\"mshow\"><b>W⁽²⁾(2×4)</b><span class=\"mscroll\" style=\"display:block\"><table class=\"mx ans\"><tr><td>−0.7</td><td>0.6</td><td>0.2</td><td>0.7</td></tr><tr><td>−0.3</td><td>0.7</td><td>0.2</td><td>0.8</td></tr></table></span></span><span class=\"mshow\"><b>W⁽³⁾(1×3)</b><span class=\"mscroll\" style=\"display:block\"><table class=\"mx ans\"><tr><td>0.1</td><td>0.8</td><td>0.5</td></tr></table></span></span><span class=\"mshow\"><b>x = [x₀, x₁, x₂]ᵀ</b><span class=\"mscroll\" style=\"display:block\"><table class=\"mx ans\"><tr><td>−1</td></tr><tr><td>0.3</td></tr><tr><td>0.7</td></tr></table></span></span></div>",
  "mats": [
   {
    "label": "δ⁽³⁾",
    "a": [
     [
      0.21254
     ]
    ]
   },
   {
    "label": "δ⁽²⁾",
    "a": [
     [
      0.07692
     ],
     [
      0.07642
     ]
    ]
   },
   {
    "label": "δ⁽¹⁾",
    "a": [
     [
      0.09291
     ],
     [
      0.02691
     ],
     [
      0.1147
     ]
    ]
   },
   {
    "label": "新 W⁽³⁾",
    "a": [
     [
      0.07875,
      0.81573,
      0.51126
     ]
    ]
   },
   {
    "label": "新 W⁽²⁾",
    "a": [
     [
      -0.70769,
      0.602,
      0.20269,
      0.70038
     ],
     [
      -0.30764,
      0.70199,
      0.20267,
      0.80038
     ]
    ]
   },
   {
    "label": "新 W⁽¹⁾",
    "a": [
     [
      0.19071,
      0.40279,
      0.5065
     ],
     [
      0.29731,
      0.60081,
      0.70188
     ],
     [
      0.38853,
      0.80344,
      0.30803
     ]
    ]
   }
  ],
  "tol0": 0.0006,
  "exp": "<div class=\"sol\"><b>題目重點:</b>d = 1、η = 0.1;δ⁽³⁾ = (d − y)(1 − y²);ΔW⁽ᴸ⁾ = η·δ⁽ᴸ⁾·(Ȳ⁽ᴸ⁻¹⁾)ᵀ。<b>第一步:輸出層 δ 與 W⁽³⁾</b><ul><li>δ⁽³⁾ = (1 − 0.64)(1 − 0.4096) = 0.36 × 0.5904 = <b>0.21254</b></li><li>W⁽³⁾新 = W⁽³⁾ + 0.1 × δ⁽³⁾ × [−1, 0.74, 0.53]</li><li>= <b>[0.0787, 0.8157, 0.5113]</b></li></ul><b>第二步:第 2 層 δ(去掉 W⁽³⁾ 的偏權欄)</b><ul><li>W⁽³⁾ᵀ(不含偏權)·δ⁽³⁾ = [0.8, 0.5]ᵀ × 0.21254 = [0.17004, 0.10627]ᵀ</li><li>逐元素乘 (1 − Y⁽²⁾²) = [0.4524, 0.7191]</li><li>δ⁽²⁾ = <b>[0.07692, 0.07642]</b>ᵀ</li></ul><b>第三步:更新 W⁽²⁾(外積 2×1 乘 1×4)</b><ul><li>W⁽²⁾新 = W⁽²⁾ + 0.1 × δ⁽²⁾ × [−1, 0.26, 0.35, 0.05]</li><li>第 1 列 = <b>[−0.7077, 0.602, 0.2027, 0.7004]</b></li><li>第 2 列 = <b>[−0.3076, 0.702, 0.2027, 0.8004]</b></li></ul><b>第四步:第 1 層 δ</b><ul><li>(舊 W⁽²⁾ 去掉偏權欄)ᵀ 為 3×2,乘 δ⁽²⁾(2×1)= [0.09965, 0.03067, 0.11498] ᵀ</li><li>逐元素乘 (1 − Y⁽¹⁾²) = [0.9324, 0.8775, 0.9975]</li><li>δ⁽¹⁾ = <b>[0.09291, 0.02691, 0.1147]</b>ᵀ</li></ul><b>第五步:更新 W⁽¹⁾(外積 3×1 乘 1×3)</b><ul><li>W⁽¹⁾新 = W⁽¹⁾ + 0.1 × δ⁽¹⁾ × [−1, 0.3, 0.7]</li><li>第 1 列 = <b>[0.1907, 0.4028, 0.5065]</b></li><li>第 2 列 = <b>[0.2973, 0.6008, 0.7019]</b></li><li>第 3 列 = <b>[0.3885, 0.8034, 0.308]</b></li></ul><b>三個常錯的地方:</b><ul><li>往回傳時要<b>去掉偏權欄</b>,但更新權重時偏權欄(輸入 −1)<b>要更新</b>。</li><li>要用<b>舊</b>的 W⁽³⁾、W⁽²⁾ 算前一層的 δ。</li><li>權重矩陣往回傳時要<b>轉置</b>。</li></ul></div>"
 }
];
