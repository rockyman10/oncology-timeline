/* Unofficial BCOP-style example questions written for this site from the PubMed abstracts cited on each item. They are not from, or endorsed by, the BCOP examination. */
window.ONCOLOGY_QUESTIONS = {
  meta: {
    title: "Practice questions",
    note: "These are three unofficial BCOP-style example questions written for this site from the cited PubMed abstracts. They are not from the BCOP examination.",
    examDurationSeconds: 270
  },
  items: [
    {
      id: "q-katherine-residual",
      placeholder: false,
      topic: "breast",
      relatedTrialId: "katherine",
      stem: "Unofficial BCOP-style example. A patient with HER2-positive early breast cancer has residual invasive disease in the breast at surgery after neoadjuvant therapy containing a taxane and trastuzumab. In KATHERINE, which adjuvant therapy improved invasive disease-free survival compared with trastuzumab?",
      choices: [
        { id: "a", text: "Trastuzumab emtansine (T-DM1)" },
        { id: "b", text: "Lapatinib plus capecitabine" },
        { id: "c", text: "Trastuzumab deruxtecan" },
        { id: "d", text: "Observation" }
      ],
      correctId: "a",
      explanation: "KATHERINE randomized 1486 patients with residual invasive disease after neoadjuvant taxane and trastuzumab to adjuvant T-DM1 or trastuzumab for 14 cycles. Three-year invasive disease-free survival was 88.3% with T-DM1 and 77.0% with trastuzumab (hazard ratio 0.50). The other choices were not arms of KATHERINE.",
      source: {
        label: "KATHERINE, PubMed abstract",
        pmid: "30516102",
        doi: "10.1056/NEJMoa1814017"
      }
    },
    {
      id: "q-ipass-egfr",
      placeholder: false,
      topic: "lung",
      relatedTrialId: "ipass",
      stem: "Unofficial BCOP-style example. IPASS compared first-line gefitinib with carboplatin-paclitaxel in East Asian nonsmokers or former light smokers with advanced pulmonary adenocarcinoma. In the subgroup whose tumors were negative for an EGFR mutation, which statement matches the progression-free survival result?",
      choices: [
        { id: "a", text: "Progression-free survival was significantly longer with gefitinib." },
        { id: "b", text: "Progression-free survival was significantly longer with carboplatin-paclitaxel." },
        { id: "c", text: "Progression-free survival did not differ between the groups." },
        { id: "d", text: "The subgroup was not analyzed." }
      ],
      correctId: "b",
      explanation: "In the 176 patients without an EGFR mutation, progression-free survival was significantly longer with carboplatin-paclitaxel (hazard ratio with gefitinib 2.85). In the 261 patients with the mutation, it favored gefitinib (hazard ratio 0.48). Mutation status, not clinical features alone, predicted benefit.",
      source: {
        label: "IPASS, PubMed abstract",
        pmid: "19692680",
        doi: "10.1056/NEJMoa0810699"
      }
    },
    {
      id: "q-jmdb-histology",
      placeholder: false,
      topic: "lung",
      relatedTrialId: "jmdb",
      stem: "Unofficial BCOP-style example. In the phase III noninferiority trial of cisplatin-pemetrexed versus cisplatin-gemcitabine for advanced NSCLC (JMDB), which histology had significantly longer survival with cisplatin-gemcitabine?",
      choices: [
        { id: "a", text: "Adenocarcinoma" },
        { id: "b", text: "Large-cell carcinoma" },
        { id: "c", text: "Squamous cell carcinoma" },
        { id: "d", text: "No histology differed" }
      ],
      correctId: "c",
      explanation: "Overall survival was noninferior overall (median 10.3 months in both groups). Survival favored cisplatin-pemetrexed in adenocarcinoma (12.6 versus 10.9 months) and large-cell carcinoma (10.4 versus 6.7 months), and favored cisplatin-gemcitabine in squamous cell histology (10.8 versus 9.4 months).",
      source: {
        label: "JMDB, PubMed abstract",
        pmid: "18506025",
        doi: "10.1200/JCO.2007.15.0375"
      }
    }
  ]
};
