/* Phase 1 oncology trial cards (solid tumors: breast, lung, colorectal, prostate). DRAFT, not yet through ONC Lit Inspector. Every number comes from the PubMed abstract named in sourceNotes. Link-only stubs carry no clinical numbers. */
window.ONCOLOGY_TRIALS = [
  {
    "id": "atac",
    "placeholder": false,
    "acronym": "ATAC",
    "year": 2002,
    "yearLabel": "2002",
    "topic": "breast",
    "status": "published",
    "title": "Anastrozole alone or in combination with tamoxifen versus tamoxifen alone for adjuvant treatment of postmenopausal women with early breast cancer: first results of the ATAC randomised trial",
    "citation": "Baum M, Budzar AU, Cuzick J, and others. Anastrozole alone or in combination with tamoxifen versus tamoxifen alone for adjuvant treatment of postmenopausal women with early breast cancer: first results of the ATAC randomised trial. Lancet. 2002;359(9324):2131-2139.",
    "pmid": "12090977",
    "doi": "10.1016/s0140-6736(02)09088-8",
    "design": "Three-arm randomized trial with intention-to-treat efficacy analysis. Primary end points were disease-free survival and occurrence of adverse events. Median follow-up was 33.3 months (first results).",
    "population": "9366 postmenopausal patients with invasive operable breast cancer who had completed primary therapy and were eligible for adjuvant hormonal therapy; 7839 (84%) were known to be hormone-receptor-positive.",
    "intervention": "Anastrozole (3125 patients), or anastrozole combined with tamoxifen (3125 patients).",
    "comparator": "Tamoxifen (3116 patients).",
    "primaryResult": "Three-year disease-free survival was 89.4% with anastrozole and 87.4% with tamoxifen (hazard ratio 0.83; 95% CI 0.71 to 0.96; p=0.013). The combination did not differ significantly from tamoxifen alone (87.2%; hazard ratio 1.02; 95% CI 0.89 to 1.18; p=0.8).",
    "secondaryResults": "The disease-free survival improvement with anastrozole was seen in hormone-receptor-positive patients but not receptor-negative patients. Contralateral breast cancer was less frequent with anastrozole than tamoxifen (odds ratio 0.42; 95% CI 0.22 to 0.79; p=0.007).",
    "safety": "Anastrozole was better tolerated than tamoxifen for endometrial cancer, vaginal bleeding and discharge, cerebrovascular events, venous thromboembolic events, and hot flushes. Tamoxifen was better tolerated for musculoskeletal disorders and fractures (p<0.0001 for both).",
    "takeaway": "In postmenopausal early breast cancer, adjuvant anastrozole improved three-year disease-free survival over tamoxifen (89.4% versus 87.4%; hazard ratio 0.83), while the combination added nothing over tamoxifen; anastrozole traded fewer thromboembolic and endometrial events for more musculoskeletal disorders and fractures.",
    "limitations": "First results at a median follow-up of 33.3 months; the authors state that longer follow-up is needed for a final benefit to risk assessment. Only 84% of patients were known to be hormone-receptor-positive.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "12090977",
        "doi": "10.1016/s0140-6736(02)09088-8",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (33.3): PubMed abstract PMID 12090977, FINDINGS: \"Median follow-up was 33.3 months. 7839 (84%) patients were known to be hormone-receptor-positive.\"",
      "population (9366, 7839, 84): PubMed abstract PMID 12090977, FINDINGS: \"9366 patients were recruited, of whom 3125 were randomly assigned anastrozole, 3116 tamoxifen, and 3125 combination.\"; FINDINGS: \"Median follow-up was 33.3 months. 7839 (84%) patients were known to be hormone-receptor-positive.\"",
      "intervention (3125): PubMed abstract PMID 12090977, FINDINGS: \"9366 patients were recruited, of whom 3125 were randomly assigned anastrozole, 3116 tamoxifen, and 3125 combination.\"",
      "comparator (3116): PubMed abstract PMID 12090977, FINDINGS: \"9366 patients were recruited, of whom 3125 were randomly assigned anastrozole, 3116 tamoxifen, and 3125 combination.\"",
      "primaryResult (89.4, 87.4, 0.83, 95, 0.71, 0.96, 0.013, 87.2, 1.02, 0.89, 1.18, 0.8): PubMed abstract PMID 12090977, FINDINGS: \"Disease-free survival at 3 years was 89.4% on anastrozole and 87.4% on tamoxifen (hazard ratio 0.83 [95% CI 0.71-0.96], p=0.013).\"; FINDINGS: \"Results with the combination were not significantly different from those with tamoxifen alone (87.2%, 1.02 [0.89-1.18], p=0.8).\"",
      "secondaryResults (0.42, 95, 0.22, 0.79, 0.007): PubMed abstract PMID 12090977, FINDINGS: \"Incidence of contralateral breast cancer was significantly lower with anastrozole than with tamoxifen (odds ratio 0.42 [0.22-0.79], p=0.007).\"; FINDINGS: \"Disease-free survival at 3 years was 89.4% on anastrozole and 87.4% on tamoxifen (hazard ratio 0.83 [95% CI 0.71-0.96], p=0.013).\"",
      "safety (0.0001): PubMed abstract PMID 12090977, FINDINGS: \"Anastrozole was significantly better tolerated than tamoxifen with respect to endometrial cancer (p=0.02), vaginal bleeding and discharge (p<0.0001 for both), cerebrovascular events (p=0.0006), venous thromboembolic events (p=0.0006), and hot flushes (p<0.0001).\"",
      "takeaway (89.4, 87.4, 0.83): PubMed abstract PMID 12090977, FINDINGS: \"Disease-free survival at 3 years was 89.4% on anastrozole and 87.4% on tamoxifen (hazard ratio 0.83 [95% CI 0.71-0.96], p=0.013).\"",
      "limitations (33.3, 84): PubMed abstract PMID 12090977, FINDINGS: \"Median follow-up was 33.3 months. 7839 (84%) patients were known to be hormone-receptor-positive.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "hurwitz-avf2107g",
    "placeholder": false,
    "acronym": "AVF2107g (Hurwitz)",
    "year": 2004,
    "yearLabel": "2004",
    "topic": "colorectal",
    "status": "published",
    "title": "Bevacizumab plus irinotecan, fluorouracil, and leucovorin for metastatic colorectal cancer",
    "citation": "Hurwitz H, Fehrenbacher L, Novotny W, and others. Bevacizumab plus irinotecan, fluorouracil, and leucovorin for metastatic colorectal cancer. New England Journal of Medicine. 2004;350(23):2335-2342.",
    "pmid": "15175435",
    "doi": "10.1056/NEJMoa032691",
    "design": "Randomized, placebo-controlled trial. The primary end point was overall survival.",
    "population": "813 patients with previously untreated metastatic colorectal cancer.",
    "intervention": "Irinotecan, bolus fluorouracil, and leucovorin (IFL) plus bevacizumab 5 mg per kilogram every two weeks (402 patients).",
    "comparator": "IFL plus placebo (411 patients).",
    "primaryResult": "Median overall survival was 20.3 months with IFL plus bevacizumab versus 15.6 months with IFL plus placebo (hazard ratio for death 0.66; P<0.001).",
    "secondaryResults": "Median progression-free survival was 10.6 versus 6.2 months (hazard ratio 0.54; P<0.001); response rates were 44.8% versus 34.8% (P=0.004); median duration of response was 10.4 versus 7.1 months.",
    "safety": "Grade 3 hypertension was more common with bevacizumab (11.0% versus 2.3%) and was described as easily managed.",
    "takeaway": "Adding bevacizumab to first-line IFL for metastatic colorectal cancer improved median overall survival (20.3 versus 15.6 months; hazard ratio 0.66), with more grade 3 hypertension (11.0% versus 2.3%).",
    "limitations": "The chemotherapy backbone was bolus IFL. The abstract does not report bleeding, thrombosis, or gastrointestinal perforation rates.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "15175435",
        "doi": "10.1056/NEJMoa032691",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "population (813): PubMed abstract PMID 15175435, METHODS: \"Of 813 patients with previously untreated metastatic colorectal cancer, we randomly assigned 402 to receive irinotecan, bolus fluorouracil, and leucovorin (IFL) plus bevacizumab (5 mg per kilogram of body weight every two weeks) and 411 to receive IFL plus placebo.\"",
      "intervention (5, 402): PubMed abstract PMID 15175435, METHODS: \"Of 813 patients with previously untreated metastatic colorectal cancer, we randomly assigned 402 to receive irinotecan, bolus fluorouracil, and leucovorin (IFL) plus bevacizumab (5 mg per kilogram of body weight every two weeks) and 411 to receive IFL plus placebo.\"",
      "comparator (411): PubMed abstract PMID 15175435, METHODS: \"Of 813 patients with previously untreated metastatic colorectal cancer, we randomly assigned 402 to receive irinotecan, bolus fluorouracil, and leucovorin (IFL) plus bevacizumab (5 mg per kilogram of body weight every two weeks) and 411 to receive IFL plus placebo.\"",
      "primaryResult (20.3, 15.6, 0.66, 0.001): PubMed abstract PMID 15175435, RESULTS: \"The median duration of survival was 20.3 months in the group given IFL plus bevacizumab, as compared with 15.6 months in the group given IFL plus placebo, corresponding to a hazard ratio for death of 0.66 (P<0.001).\"",
      "secondaryResults (10.6, 6.2, 0.54, 0.001, 44.8, 34.8, 0.004, 10.4, 7.1): PubMed abstract PMID 15175435, RESULTS: \"The median duration of progression-free survival was 10.6 months in the group given IFL plus bevacizumab, as compared with 6.2 months in the group given IFL plus placebo (hazard ratio for disease progression, 0.54;\"; RESULTS: \"P<0.001); the corresponding rates of response were 44.8 percent and 34.8 percent (P=0.004).\"; RESULTS: \"The median duration of the response was 10.4 months in the group given IFL plus bevacizumab, as compared with 7.1 months in the group given IFL plus placebo (hazard ratio for progression, 0.62;\"",
      "safety (3, 11.0, 2.3): PubMed abstract PMID 15175435, RESULTS: \"Grade 3 hypertension was more common during treatment with IFL plus bevacizumab than with IFL plus placebo (11.0 percent vs. 2.3 percent) but was easily managed.\"",
      "takeaway (20.3, 15.6, 0.66, 3, 11.0, 2.3): PubMed abstract PMID 15175435, RESULTS: \"The median duration of survival was 20.3 months in the group given IFL plus bevacizumab, as compared with 15.6 months in the group given IFL plus placebo, corresponding to a hazard ratio for death of 0.66 (P<0.001).\"; RESULTS: \"Grade 3 hypertension was more common during treatment with IFL plus bevacizumab than with IFL plus placebo (11.0 percent vs. 2.3 percent) but was easily managed.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "ialt",
    "placeholder": false,
    "acronym": "IALT",
    "year": 2004,
    "yearLabel": "2004",
    "topic": "lung",
    "status": "published",
    "title": "Cisplatin-based adjuvant chemotherapy in patients with completely resected non-small-cell lung cancer",
    "citation": "Arriagada R, Bergman B, Dunant A, and others. Cisplatin-based adjuvant chemotherapy in patients with completely resected non-small-cell lung cancer. New England Journal of Medicine. 2004;350(4):351-360.",
    "pmid": "14736927",
    "doi": "10.1056/NEJMoa031644",
    "design": "Randomized trial of three or four cycles of cisplatin-based chemotherapy versus observation. Each center set the stages to include, the cisplatin dose and partner drug, and its postoperative radiotherapy policy before randomization. The main end point was overall survival. Median follow-up was 56 months.",
    "population": "1867 patients with completely resected NSCLC: 36.5% pathological stage I, 24.2% stage II, and 39.3% stage III.",
    "intervention": "Cisplatin-based chemotherapy (932 patients). The partner drug was etoposide in 56.5%, vinorelbine in 26.8%, vinblastine in 11.0%, and vindesine in 5.8%; 73.8% received at least 240 mg of cisplatin per square meter.",
    "comparator": "Observation.",
    "primaryResult": "Five-year survival was 44.5% with chemotherapy versus 40.4% with observation (469 versus 504 deaths; hazard ratio for death 0.86; 95% CI 0.76 to 0.98; P<0.03).",
    "secondaryResults": "Five-year disease-free survival was 39.4% versus 34.3% (518 versus 577 events; hazard ratio 0.83; 95% CI 0.74 to 0.94; P<0.003). There were no significant interactions with prespecified factors.",
    "safety": "Seven patients (0.8%) died of chemotherapy-induced toxic effects.",
    "takeaway": "After complete resection of NSCLC, cisplatin-based adjuvant chemotherapy improved five-year survival (44.5% versus 40.4%; hazard ratio 0.86); 0.8% of patients died of chemotherapy-induced toxic effects.",
    "limitations": "Chemotherapy partner, cisplatin dose, included stages, and radiotherapy policy varied by center.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "14736927",
        "doi": "10.1056/NEJMoa031644",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (56): PubMed abstract PMID 14736927, RESULTS: \"The median duration of follow-up was 56 months.\"",
      "population (1867, 36.5, 24.2, 39.3): PubMed abstract PMID 14736927, RESULTS: \"A total of 1867 patients underwent randomization; 36.5 percent had pathological stage I disease, 24.2 percent stage II, and 39.3 percent stage III.\"",
      "intervention (932, 56.5, 26.8, 11.0, 5.8, 73.8, 240): PubMed abstract PMID 14736927, RESULTS: \"Of the 932 patients assigned to chemotherapy, 73.8 percent received at least 240 mg of cisplatin per square meter of body-surface area.\"; RESULTS: \"The drug allocated with cisplatin was etoposide in 56.5 percent of patients, vinorelbine in 26.8 percent, vinblastine in 11.0 percent, and vindesine in 5.8 percent.\"",
      "primaryResult (44.5, 40.4, 469, 504, 0.86, 95, 0.76, 0.98, 0.03): PubMed abstract PMID 14736927, RESULTS: \"Patients assigned to chemotherapy had a significantly higher survival rate than those assigned to observation (44.5 percent vs. 40.4 percent at five years [469 deaths vs. 504]; hazard ratio for death, 0.86; 95 percent confidence interval, 0.76 to 0.98;\"; RESULTS: \"P<0.03).\"",
      "secondaryResults (39.4, 34.3, 518, 577, 0.83, 95, 0.74, 0.94, 0.003): PubMed abstract PMID 14736927, RESULTS: \"Patients assigned to chemotherapy also had a significantly higher disease-free survival rate than those assigned to observation (39.4 percent vs. 34.3 percent at five years [518 events vs. 577]; hazard ratio, 0.83; 95 percent confidence interval, 0.74 to 0.94;\"; RESULTS: \"P<0.003).\"",
      "safety (0.8): PubMed abstract PMID 14736927, RESULTS: \"Seven patients (0.8 percent) died of chemotherapy-induced toxic effects.\"",
      "takeaway (44.5, 40.4, 0.86, 0.8): PubMed abstract PMID 14736927, RESULTS: \"Patients assigned to chemotherapy had a significantly higher survival rate than those assigned to observation (44.5 percent vs. 40.4 percent at five years [469 deaths vs. 504]; hazard ratio for death, 0.86; 95 percent confidence interval, 0.76 to 0.98;\"; RESULTS: \"Seven patients (0.8 percent) died of chemotherapy-induced toxic effects.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "mosaic",
    "placeholder": false,
    "acronym": "MOSAIC",
    "year": 2004,
    "yearLabel": "2004",
    "topic": "colorectal",
    "status": "published",
    "title": "Oxaliplatin, fluorouracil, and leucovorin as adjuvant treatment for colon cancer",
    "citation": "André T, Boni C, Mounedji-Boudiaf L, and others. Oxaliplatin, fluorouracil, and leucovorin as adjuvant treatment for colon cancer. New England Journal of Medicine. 2004;350(23):2343-2351.",
    "pmid": "15175436",
    "doi": "10.1056/NEJMoa032709",
    "design": "Randomized trial of six months of adjuvant therapy. The primary end point was disease-free survival. Median follow-up was 37.9 months.",
    "population": "2246 patients after curative resection of stage II or III colon cancer (1123 per group).",
    "intervention": "Fluorouracil and leucovorin (FL) plus oxaliplatin for six months.",
    "comparator": "FL alone for six months.",
    "primaryResult": "A cancer-related event occurred in 21.1% with FL plus oxaliplatin and 26.1% with FL (hazard ratio for recurrence 0.77; P=0.002). Three-year disease-free survival was 78.2% versus 72.9% (P=0.002).",
    "safety": "With FL plus oxaliplatin, febrile neutropenia occurred in 1.8% and grade 3 sensory neuropathy in 12.4% during treatment, falling to 1.1% at one year. Six patients in each group died during treatment (death rate 0.5%).",
    "takeaway": "After resection of stage II or III colon cancer, adding oxaliplatin to adjuvant fluorouracil and leucovorin improved three-year disease-free survival (78.2% versus 72.9%; hazard ratio for recurrence 0.77), with grade 3 sensory neuropathy in 12.4% during treatment and 1.1% at one year.",
    "limitations": "Disease-free survival at a median follow-up of 37.9 months; overall survival is not reported in this abstract. Stage II and III results are not separated in the abstract.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "15175436",
        "doi": "10.1056/NEJMoa032709",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (37.9): PubMed abstract PMID 15175436, RESULTS: \"After a median follow-up of 37.9 months, 237 patients in the group given FL plus oxaliplatin had had a cancer-related event, as compared with 293 patients in the FL group (21.1 percent vs. 26.1 percent; hazard ratio for recurrence, 0.77;\"",
      "population (2246, 1123): PubMed abstract PMID 15175436, METHODS: \"We randomly assigned 2246 patients who had undergone curative resection for stage II or III colon cancer to receive FL alone or with oxaliplatin for six months.\"; RESULTS: \"A total of 1123 patients were randomly assigned to each group.\"",
      "primaryResult (21.1, 26.1, 0.77, 0.002, 78.2, 72.9): PubMed abstract PMID 15175436, RESULTS: \"After a median follow-up of 37.9 months, 237 patients in the group given FL plus oxaliplatin had had a cancer-related event, as compared with 293 patients in the FL group (21.1 percent vs. 26.1 percent; hazard ratio for recurrence, 0.77;\"; RESULTS: \"The rate of disease-free survival at three years was 78.2 percent (95 percent confidence interval, 75.6 to 80.7) in the group given FL plus oxaliplatin and 72.9 percent (95 percent confidence interval, 70.2 to 75.7) in the FL group (P=0.002 by the stratified log-rank test).\"",
      "safety (1.8, 3, 12.4, 1.1, 0.5): PubMed abstract PMID 15175436, RESULTS: \"In the group given FL plus oxaliplatin, the incidence of febrile neutropenia was 1.8 percent, the incidence of gastrointestinal adverse effects was low, and the incidence of grade 3 sensory neuropathy was 12.4 percent during treatment, decreasing to 1.1 percent at one year of follow-up.\"; RESULTS: \"Six patients in each group died during treatment (death rate, 0.5 percent).\"",
      "takeaway (78.2, 72.9, 0.77, 3, 12.4, 1.1): PubMed abstract PMID 15175436, RESULTS: \"The rate of disease-free survival at three years was 78.2 percent (95 percent confidence interval, 75.6 to 80.7) in the group given FL plus oxaliplatin and 72.9 percent (95 percent confidence interval, 70.2 to 75.7) in the FL group (P=0.002 by the stratified log-rank test).\"; RESULTS: \"After a median follow-up of 37.9 months, 237 patients in the group given FL plus oxaliplatin had had a cancer-related event, as compared with 293 patients in the FL group (21.1 percent vs. 26.1 percent; hazard ratio for recurrence, 0.77;\"; RESULTS: \"In the group given FL plus oxaliplatin, the incidence of febrile neutropenia was 1.8 percent, the incidence of gastrointestinal adverse effects was low, and the incidence of grade 3 sensory neuropathy was 12.4 percent during treatment, decreasing to 1.1 percent at one year of follow-up.\"",
      "limitations (37.9): PubMed abstract PMID 15175436, RESULTS: \"After a median follow-up of 37.9 months, 237 patients in the group given FL plus oxaliplatin had had a cancer-related event, as compared with 293 patients in the FL group (21.1 percent vs. 26.1 percent; hazard ratio for recurrence, 0.77;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "tax-327",
    "placeholder": false,
    "acronym": "TAX 327",
    "year": 2004,
    "yearLabel": "2004",
    "topic": "prostate",
    "status": "published",
    "title": "Docetaxel plus prednisone or mitoxantrone plus prednisone for advanced prostate cancer",
    "citation": "Tannock IF, de Wit R, Berry WR, and others. Docetaxel plus prednisone or mitoxantrone plus prednisone for advanced prostate cancer. New England Journal of Medicine. 2004;351(15):1502-1512.",
    "pmid": "15470213",
    "doi": "10.1056/NEJMoa040720",
    "design": "Three-arm randomized trial, March 2000 through June 2002. All men received prednisone 5 mg twice daily. The primary end point was overall survival; all comparisons were against mitoxantrone.",
    "population": "1006 men with metastatic hormone-refractory prostate cancer.",
    "intervention": "Docetaxel 75 mg per square meter every three weeks, or docetaxel 30 mg per square meter weekly for five of every six weeks, each with prednisone.",
    "comparator": "Mitoxantrone 12 mg per square meter every three weeks with prednisone.",
    "primaryResult": "Compared with mitoxantrone, the hazard ratio for death was 0.76 with docetaxel every three weeks (95% CI 0.62 to 0.94; P=0.009) and 0.91 with weekly docetaxel (95% CI 0.75 to 1.11; P=0.36). Median survival was 16.5 months with mitoxantrone, 18.9 months with docetaxel every 3 weeks, and 17.4 months with weekly docetaxel.",
    "secondaryResults": "A PSA decrease of at least 50% occurred in 32%, 45%, and 48% (P<0.001 for both docetaxel groups versus mitoxantrone). Pain reductions occurred in 22%, 35% (P=0.01), and 31% (P=0.08), and quality-of-life improvements in 13%, 22% (P=0.009), and 23% (P=0.005).",
    "safety": "Adverse events were more common in the docetaxel groups.",
    "takeaway": "In metastatic hormone-refractory prostate cancer, docetaxel every three weeks with prednisone improved survival over mitoxantrone with prednisone (median 18.9 versus 16.5 months; hazard ratio 0.76), while weekly docetaxel did not significantly improve survival.",
    "limitations": "Weekly docetaxel did not significantly improve survival. The abstract gives no adverse event rates.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "15470213",
        "doi": "10.1056/NEJMoa040720",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (2000, 2002, 5): PubMed abstract PMID 15470213, METHODS: \"From March 2000 through June 2002, 1006 men with metastatic hormone-refractory prostate cancer received 5 mg of prednisone twice daily and were randomly assigned to receive 12 mg of mitoxantrone per square meter of body-surface area every three weeks, 75 mg of docetaxel per square meter every three weeks, or 30 mg of docetaxel per square meter weekly for five of every six weeks.\"",
      "population (1006): PubMed abstract PMID 15470213, METHODS: \"From March 2000 through June 2002, 1006 men with metastatic hormone-refractory prostate cancer received 5 mg of prednisone twice daily and were randomly assigned to receive 12 mg of mitoxantrone per square meter of body-surface area every three weeks, 75 mg of docetaxel per square meter every three weeks, or 30 mg of docetaxel per square meter weekly for five of every six weeks.\"",
      "intervention (75, 30): PubMed abstract PMID 15470213, METHODS: \"From March 2000 through June 2002, 1006 men with metastatic hormone-refractory prostate cancer received 5 mg of prednisone twice daily and were randomly assigned to receive 12 mg of mitoxantrone per square meter of body-surface area every three weeks, 75 mg of docetaxel per square meter every three weeks, or 30 mg of docetaxel per square meter weekly for five of every six weeks.\"",
      "comparator (12): PubMed abstract PMID 15470213, METHODS: \"From March 2000 through June 2002, 1006 men with metastatic hormone-refractory prostate cancer received 5 mg of prednisone twice daily and were randomly assigned to receive 12 mg of mitoxantrone per square meter of body-surface area every three weeks, 75 mg of docetaxel per square meter every three weeks, or 30 mg of docetaxel per square meter weekly for five of every six weeks.\"",
      "primaryResult (0.76, 95, 0.62, 0.94, 0.009, 0.91, 0.75, 1.11, 0.36, 16.5, 18.9, 3, 17.4): PubMed abstract PMID 15470213, RESULTS: \"As compared with the men in the mitoxantrone group, men in the group given docetaxel every three weeks had a hazard ratio for death of 0.76 (95 percent confidence interval, 0.62 to 0.94;\"; RESULTS: \"P=0.009 by the stratified log-rank test) and those given weekly docetaxel had a hazard ratio for death of 0.91 (95 percent confidence interval, 0.75 to 1.11;\"; RESULTS: \"P=0.36).\"; RESULTS: \"The median survival was 16.5 months in the mitoxantrone group, 18.9 months in the group given docetaxel every 3 weeks, and 17.4 months in the group given weekly docetaxel.\"",
      "secondaryResults (50, 32, 45, 48, 0.001, 22, 35, 0.01, 31, 0.08, 13, 0.009, 23, 0.005): PubMed abstract PMID 15470213, RESULTS: \"Among these three groups, 32 percent, 45 percent, and 48 percent of men, respectively, had at least a 50 percent decrease in the serum PSA level (P<0.001 for both comparisons with mitoxantrone); 22 percent, 35 percent (P=0.01), and 31 percent (P=0.08) had predefined reductions in pain; and 13 percent, 22 percent (P=0.009), and 23 percent (P=0.005) had improvements in the quality of life.\"",
      "takeaway (18.9, 16.5, 0.76): PubMed abstract PMID 15470213, RESULTS: \"The median survival was 16.5 months in the mitoxantrone group, 18.9 months in the group given docetaxel every 3 weeks, and 17.4 months in the group given weekly docetaxel.\"; RESULTS: \"As compared with the men in the mitoxantrone group, men in the group given docetaxel every three weeks had a hazard ratio for death of 0.76 (95 percent confidence interval, 0.62 to 0.94;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "hera",
    "placeholder": false,
    "acronym": "HERA",
    "year": 2005,
    "yearLabel": "2005",
    "topic": "breast",
    "status": "published",
    "title": "Trastuzumab after adjuvant chemotherapy in HER2-positive breast cancer",
    "citation": "Piccart-Gebhart MJ, Procter M, Leyland-Jones B, and others. Trastuzumab after adjuvant chemotherapy in HER2-positive breast cancer. New England Journal of Medicine. 2005;353(16):1659-1672.",
    "pmid": "16236737",
    "doi": "10.1056/NEJMoa052306",
    "design": "International, multicenter randomized trial comparing one or two years of trastuzumab given every three weeks with observation after locoregional therapy and at least four cycles of neoadjuvant or adjuvant chemotherapy. This report covers one year of trastuzumab versus observation at the first planned interim analysis (median follow-up of one year). Events were recurrence of breast cancer, contralateral breast cancer, second nonbreast malignant disease, or death.",
    "population": "Women with HER2-positive, node-negative or node-positive early breast cancer who had completed locoregional therapy and at least four cycles of neoadjuvant or adjuvant chemotherapy. Data were available for 1694 women assigned to one year of trastuzumab and 1693 assigned to observation; a further 1694 assigned to two years are not reported in this paper.",
    "intervention": "Trastuzumab every three weeks for one year (1694 women).",
    "comparator": "Observation (1693 women).",
    "primaryResult": "At the first planned interim analysis there were 127 events with trastuzumab and 220 with observation (unadjusted hazard ratio 0.54; 95% CI 0.43 to 0.67; P<0.0001, crossing the interim analysis boundary). The absolute disease-free survival benefit at two years was 8.4 percentage points.",
    "secondaryResults": "Overall survival was not significantly different (29 deaths with trastuzumab versus 37 with observation).",
    "safety": "Severe cardiotoxicity developed in 0.5% of women treated with trastuzumab.",
    "takeaway": "After adjuvant chemotherapy for HER2-positive early breast cancer, one year of trastuzumab lowered the hazard of a disease-free survival event compared with observation (hazard ratio 0.54), with severe cardiotoxicity in 0.5%.",
    "limitations": "Early interim analysis with a median follow-up of one year. The two-year trastuzumab arm is not reported here, and overall survival was not significantly different at this analysis.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "16236737",
        "doi": "10.1056/NEJMoa052306",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "population (1694, 1693): PubMed abstract PMID 16236737, RESULTS: \"Data were available for 1694 women randomly assigned to two years of treatment with trastuzumab, 1694 women assigned to one year of trastuzumab, and 1693 women assigned to observation.\"",
      "intervention (1694): PubMed abstract PMID 16236737, RESULTS: \"Data were available for 1694 women randomly assigned to two years of treatment with trastuzumab, 1694 women assigned to one year of trastuzumab, and 1693 women assigned to observation.\"",
      "comparator (1693): PubMed abstract PMID 16236737, RESULTS: \"Data were available for 1694 women randomly assigned to two years of treatment with trastuzumab, 1694 women assigned to one year of trastuzumab, and 1693 women assigned to observation.\"",
      "primaryResult (127, 220, 0.54, 95, 0.43, 0.67, 0.0001, 8.4): PubMed abstract PMID 16236737, RESULTS: \"At the first planned interim analysis (median follow-up of one year), 347 events (recurrence of breast cancer, contralateral breast cancer, second nonbreast malignant disease, or death) were observed: 127 events in the trastuzumab group and 220 in the observation group.\"; RESULTS: \"The unadjusted hazard ratio for an event in the trastuzumab group, as compared with the observation group, was 0.54 (95 percent confidence interval, 0.43 to 0.67;\"; RESULTS: \"P<0.0001 by the log-rank test, crossing the interim analysis boundary), representing an absolute benefit in terms of disease-free survival at two years of 8.4 percentage points.\"",
      "secondaryResults (29, 37): PubMed abstract PMID 16236737, RESULTS: \"Overall survival in the two groups was not significantly different (29 deaths with trastuzumab vs. 37 with observation).\"",
      "safety (0.5): PubMed abstract PMID 16236737, RESULTS: \"Severe cardiotoxicity developed in 0.5 percent of the women who were treated with trastuzumab.\"",
      "takeaway (0.54, 0.5): PubMed abstract PMID 16236737, RESULTS: \"The unadjusted hazard ratio for an event in the trastuzumab group, as compared with the observation group, was 0.54 (95 percent confidence interval, 0.43 to 0.67;\"; RESULTS: \"Severe cardiotoxicity developed in 0.5 percent of the women who were treated with trastuzumab.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "x-act",
    "placeholder": false,
    "acronym": "X-ACT",
    "year": 2005,
    "yearLabel": "2005",
    "topic": "colorectal",
    "status": "published",
    "title": "Capecitabine as adjuvant treatment for stage III colon cancer",
    "citation": "Twelves C, Wong A, Nowacki MP, and others. Capecitabine as adjuvant treatment for stage III colon cancer. New England Journal of Medicine. 2005;352(26):2696-2704.",
    "pmid": "15987918",
    "doi": "10.1056/NEJMoa043116",
    "design": "Randomized trial over 24 weeks. The primary efficacy end point was at least equivalence in disease-free survival (noninferiority margin for the hazard ratio 1.20); the primary safety end point was grade 3 or 4 fluoropyrimidine toxic effects.",
    "population": "1987 patients with resected stage III colon cancer.",
    "intervention": "Oral capecitabine (1004 patients).",
    "comparator": "Bolus fluorouracil plus leucovorin, Mayo Clinic regimen (983 patients).",
    "primaryResult": "Disease-free survival with capecitabine was at least equivalent to fluorouracil plus leucovorin (intention-to-treat P<0.001 for the upper limit of the hazard ratio against the 1.20 margin).",
    "secondaryResults": "Capecitabine improved relapse-free survival (hazard ratio 0.86; 95% CI 0.74 to 0.99; P=0.04).",
    "safety": "Capecitabine was associated with significantly fewer adverse events than fluorouracil plus leucovorin (P<0.001).",
    "takeaway": "For resected stage III colon cancer, oral capecitabine was at least equivalent to bolus fluorouracil plus leucovorin for disease-free survival, with fewer adverse events.",
    "limitations": "The comparator was the bolus Mayo Clinic regimen, not infusional fluorouracil or an oxaliplatin combination. The abstract does not give the disease-free survival hazard ratio or specific adverse event rates.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "15987918",
        "doi": "10.1056/NEJMoa043116",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (24, 1.20, 3, 4): PubMed abstract PMID 15987918, METHODS: \"We randomly assigned a total of 1987 patients with resected stage III colon cancer to receive either oral capecitabine (1004 patients) or bolus fluorouracil plus leucovorin (Mayo Clinic regimen; 983 patients) over a period of 24 weeks.\"; RESULTS: \"Disease-free survival in the capecitabine group was at least equivalent to that in the fluorouracil-plus-leucovorin group (in the intention-to-treat analysis, P<0.001 for the comparison of the upper limit of the hazard ratio with the noninferiority margin of 1.20).\"; METHODS: \"The primary efficacy end point was at least equivalence in disease-free survival; the primary safety end point was the incidence of grade 3 or 4 toxic effects due to fluoropyrimidines.\"",
      "population (1987): PubMed abstract PMID 15987918, METHODS: \"We randomly assigned a total of 1987 patients with resected stage III colon cancer to receive either oral capecitabine (1004 patients) or bolus fluorouracil plus leucovorin (Mayo Clinic regimen; 983 patients) over a period of 24 weeks.\"",
      "intervention (1004): PubMed abstract PMID 15987918, METHODS: \"We randomly assigned a total of 1987 patients with resected stage III colon cancer to receive either oral capecitabine (1004 patients) or bolus fluorouracil plus leucovorin (Mayo Clinic regimen; 983 patients) over a period of 24 weeks.\"",
      "comparator (983): PubMed abstract PMID 15987918, METHODS: \"We randomly assigned a total of 1987 patients with resected stage III colon cancer to receive either oral capecitabine (1004 patients) or bolus fluorouracil plus leucovorin (Mayo Clinic regimen; 983 patients) over a period of 24 weeks.\"",
      "primaryResult (0.001, 1.20): PubMed abstract PMID 15987918, RESULTS: \"Disease-free survival in the capecitabine group was at least equivalent to that in the fluorouracil-plus-leucovorin group (in the intention-to-treat analysis, P<0.001 for the comparison of the upper limit of the hazard ratio with the noninferiority margin of 1.20).\"",
      "secondaryResults (0.86, 95, 0.74, 0.99, 0.04): PubMed abstract PMID 15987918, RESULTS: \"Capecitabine improved relapse-free survival (hazard ratio, 0.86; 95 percent confidence interval, 0.74 to 0.99;\"; RESULTS: \"P=0.04) and was associated with significantly fewer adverse events than fluorouracil plus leucovorin (P<0.001).\"",
      "safety (0.001): PubMed abstract PMID 15987918, RESULTS: \"Disease-free survival in the capecitabine group was at least equivalent to that in the fluorouracil-plus-leucovorin group (in the intention-to-treat analysis, P<0.001 for the comparison of the upper limit of the hazard ratio with the noninferiority margin of 1.20).\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "ecog-4599",
    "placeholder": false,
    "acronym": "ECOG 4599",
    "year": 2006,
    "yearLabel": "2006",
    "topic": "lung",
    "status": "published",
    "title": "Paclitaxel-carboplatin alone or with bevacizumab for non-small-cell lung cancer",
    "citation": "Sandler A, Gray R, Perry MC, and others. Paclitaxel-carboplatin alone or with bevacizumab for non-small-cell lung cancer. New England Journal of Medicine. 2006;355(24):2542-2550.",
    "pmid": "17167137",
    "doi": "10.1056/NEJMoa061884",
    "design": "Randomized trial conducted by ECOG between July 2001 and April 2004. Chemotherapy was given every 3 weeks for six cycles; bevacizumab every 3 weeks until progression or intolerable toxic effects. The primary end point was overall survival.",
    "population": "878 patients with recurrent or advanced (stage IIIB or IV) non-small-cell lung cancer. Squamous-cell tumors, brain metastases, clinically significant hemoptysis, inadequate organ function, and ECOG performance status above 1 were excluded.",
    "intervention": "Paclitaxel and carboplatin plus bevacizumab (434 patients).",
    "comparator": "Paclitaxel and carboplatin alone (444 patients).",
    "primaryResult": "Median overall survival was 12.3 months with bevacizumab versus 10.3 months with chemotherapy alone (hazard ratio for death 0.79; P=0.003).",
    "secondaryResults": "Median progression-free survival was 6.2 versus 4.5 months (hazard ratio 0.66; P<0.001), and response rates were 35% versus 15% (P<0.001).",
    "safety": "Clinically significant bleeding occurred in 4.4% versus 0.7% (P<0.001). There were 15 treatment-related deaths with bevacizumab, including 5 from pulmonary hemorrhage.",
    "takeaway": "In selected patients with advanced nonsquamous NSCLC, adding bevacizumab to paclitaxel-carboplatin improved median survival (12.3 versus 10.3 months; hazard ratio 0.79) at the cost of more bleeding and treatment-related deaths.",
    "limitations": "Strict selection: squamous histology, brain metastases, and hemoptysis were excluded. The abstract does not give the number of treatment-related deaths in the chemotherapy-alone group.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "17167137",
        "doi": "10.1056/NEJMoa061884",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (2001, 2004, 3): PubMed abstract PMID 17167137, METHODS: \"Between July 2001 and April 2004, the Eastern Cooperative Oncology Group (ECOG) conducted a randomized study in which 878 patients with recurrent or advanced non-small-cell lung cancer (stage IIIB or IV) were assigned to chemotherapy with paclitaxel and carboplatin alone (444) or paclitaxel and carboplatin plus bevacizumab (434).\"; METHODS: \"Chemotherapy was administered every 3 weeks for six cycles, and bevacizumab was administered every 3 weeks until disease progression was evident or toxic effects were intolerable.\"",
      "population (878, 1): PubMed abstract PMID 17167137, METHODS: \"Between July 2001 and April 2004, the Eastern Cooperative Oncology Group (ECOG) conducted a randomized study in which 878 patients with recurrent or advanced non-small-cell lung cancer (stage IIIB or IV) were assigned to chemotherapy with paclitaxel and carboplatin alone (444) or paclitaxel and carboplatin plus bevacizumab (434).\"; METHODS: \"Patients with squamous-cell tumors, brain metastases, clinically significant hemoptysis, or inadequate organ function or performance status (ECOG performance status, >1) were excluded.\"",
      "intervention (434): PubMed abstract PMID 17167137, METHODS: \"Between July 2001 and April 2004, the Eastern Cooperative Oncology Group (ECOG) conducted a randomized study in which 878 patients with recurrent or advanced non-small-cell lung cancer (stage IIIB or IV) were assigned to chemotherapy with paclitaxel and carboplatin alone (444) or paclitaxel and carboplatin plus bevacizumab (434).\"",
      "comparator (444): PubMed abstract PMID 17167137, METHODS: \"Between July 2001 and April 2004, the Eastern Cooperative Oncology Group (ECOG) conducted a randomized study in which 878 patients with recurrent or advanced non-small-cell lung cancer (stage IIIB or IV) were assigned to chemotherapy with paclitaxel and carboplatin alone (444) or paclitaxel and carboplatin plus bevacizumab (434).\"",
      "primaryResult (12.3, 10.3, 0.79, 0.003): PubMed abstract PMID 17167137, RESULTS: \"The median survival was 12.3 months in the group assigned to chemotherapy plus bevacizumab, as compared with 10.3 months in the chemotherapy-alone group (hazard ratio for death, 0.79;\"; RESULTS: \"P=0.003).\"",
      "secondaryResults (6.2, 4.5, 0.66, 0.001, 35, 15): PubMed abstract PMID 17167137, RESULTS: \"The median progression-free survival in the two groups was 6.2 and 4.5 months, respectively (hazard ratio for disease progression, 0.66;\"; RESULTS: \"P<0.001), with corresponding response rates of 35% and 15% (P<0.001).\"",
      "safety (4.4, 0.7, 0.001, 15, 5): PubMed abstract PMID 17167137, RESULTS: \"Rates of clinically significant bleeding were 4.4% and 0.7%, respectively (P<0.001).\"; RESULTS: \"P<0.001), with corresponding response rates of 35% and 15% (P<0.001).\"; RESULTS: \"There were 15 treatment-related deaths in the chemotherapy-plus-bevacizumab group, including 5 from pulmonary hemorrhage.\"",
      "takeaway (12.3, 10.3, 0.79): PubMed abstract PMID 17167137, RESULTS: \"The median survival was 12.3 months in the group assigned to chemotherapy plus bevacizumab, as compared with 10.3 months in the chemotherapy-alone group (hazard ratio for death, 0.79;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "jmdb",
    "placeholder": false,
    "acronym": "JMDB",
    "year": 2008,
    "yearLabel": "2008",
    "topic": "lung",
    "status": "published",
    "title": "Phase III study comparing cisplatin plus gemcitabine with cisplatin plus pemetrexed in chemotherapy-naive patients with advanced-stage non-small-cell lung cancer",
    "citation": "Scagliotti GV, Parikh P, von Pawel J, and others. Phase III study comparing cisplatin plus gemcitabine with cisplatin plus pemetrexed in chemotherapy-naive patients with advanced-stage non-small-cell lung cancer. Journal of Clinical Oncology. 2008;26(21):3543-3551.",
    "pmid": "18506025",
    "doi": "10.1200/JCO.2007.15.0375",
    "design": "Phase III noninferiority randomized trial comparing overall survival using a fixed margin (hazard ratio below 1.176). Treatment was given every 3 weeks for up to six cycles.",
    "population": "1,725 chemotherapy-naive patients with stage IIIB or IV NSCLC and ECOG performance status 0 to 1.",
    "intervention": "Cisplatin 75 mg/m2 plus pemetrexed 500 mg/m2 on day 1 (862 patients).",
    "comparator": "Cisplatin 75 mg/m2 on day 1 plus gemcitabine 1,250 mg/m2 on days 1 and 8 (863 patients).",
    "primaryResult": "Overall survival with cisplatin-pemetrexed was noninferior to cisplatin-gemcitabine (median 10.3 versus 10.3 months; hazard ratio 0.94; 95% CI 0.84 to 1.05).",
    "secondaryResults": "Survival favored cisplatin-pemetrexed in adenocarcinoma (847 patients; 12.6 versus 10.9 months) and large-cell carcinoma (153 patients; 10.4 versus 6.7 months), and favored cisplatin-gemcitabine in squamous cell histology (473 patients; 10.8 versus 9.4 months).",
    "safety": "With cisplatin-pemetrexed, grade 3 or 4 neutropenia, anemia, and thrombocytopenia (P ≤ .001), febrile neutropenia (P = .002), and alopecia (P < .001) were less frequent, while grade 3 or 4 nausea was more common (P = .004).",
    "takeaway": "In advanced NSCLC, cisplatin-pemetrexed was noninferior to cisplatin-gemcitabine for overall survival (median 10.3 months in both groups; hazard ratio 0.94), and survival differed by histology: longer with cisplatin-pemetrexed in adenocarcinoma and large-cell carcinoma, and longer with cisplatin-gemcitabine in squamous cell carcinoma.",
    "limitations": "The histology findings come from subgroup analyses. The abstract gives P values but not rates for most adverse events.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "18506025",
        "doi": "10.1200/JCO.2007.15.0375",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (1.176, 3): PubMed abstract PMID 18506025, PATIENTS AND METHODS: \"This noninferiority, phase III, randomized study compared the overall survival between treatment arms using a fixed margin method (hazard ratio [HR] < 1.176) in 1,725 chemotherapy-naive patients with stage IIIB or IV NSCLC and an Eastern Cooperative Oncology Group performance status of 0 to 1.\"; PATIENTS AND METHODS: \"Patients received cisplatin 75 mg/m(2) on day 1 and gemcitabine 1,250 mg/m(2) on days 1 and 8 (n = 863) or cisplatin 75 mg/m(2) and pemetrexed 500 mg/m(2) on day 1 (n = 862) every 3 weeks for up to six cycles.\"",
      "population (1725, 0, 1): PubMed abstract PMID 18506025, PATIENTS AND METHODS: \"This noninferiority, phase III, randomized study compared the overall survival between treatment arms using a fixed margin method (hazard ratio [HR] < 1.176) in 1,725 chemotherapy-naive patients with stage IIIB or IV NSCLC and an Eastern Cooperative Oncology Group performance status of 0 to 1.\"",
      "intervention (75, 500, 1, 862): PubMed abstract PMID 18506025, PATIENTS AND METHODS: \"Patients received cisplatin 75 mg/m(2) on day 1 and gemcitabine 1,250 mg/m(2) on days 1 and 8 (n = 863) or cisplatin 75 mg/m(2) and pemetrexed 500 mg/m(2) on day 1 (n = 862) every 3 weeks for up to six cycles.\"",
      "comparator (75, 1, 1250, 8, 863): PubMed abstract PMID 18506025, PATIENTS AND METHODS: \"Patients received cisplatin 75 mg/m(2) on day 1 and gemcitabine 1,250 mg/m(2) on days 1 and 8 (n = 863) or cisplatin 75 mg/m(2) and pemetrexed 500 mg/m(2) on day 1 (n = 862) every 3 weeks for up to six cycles.\"",
      "primaryResult (10.3, 0.94, 95, 0.84, 1.05): PubMed abstract PMID 18506025, RESULTS: \"Overall survival for cisplatin/pemetrexed was noninferior to cisplatin/gemcitabine (median survival, 10.3 v 10.3 months, respectively;\"; RESULTS: \"HR = 0.94; 95% CI, 0.84 to 1.05).\"",
      "secondaryResults (847, 12.6, 10.9, 153, 10.4, 6.7, 473, 10.8, 9.4): PubMed abstract PMID 18506025, RESULTS: \"Overall survival was statistically superior for cisplatin/pemetrexed versus cisplatin/gemcitabine in patients with adenocarcinoma (n = 847; 12.6 v 10.9 months, respectively) and large-cell carcinoma histology (n = 153; 10.4 v 6.7 months, respectively).\"; RESULTS: \"In contrast, in patients with squamous cell histology, there was a significant improvement in survival with cisplatin/gemcitabine versus cisplatin/pemetrexed (n = 473; 10.8 v 9.4 months, respectively).\"",
      "safety (3, 4, .001, .002, .004): PubMed abstract PMID 18506025, RESULTS: \"For cisplatin/pemetrexed, rates of grade 3 or 4 neutropenia, anemia, and thrombocytopenia (P <or= .001); febrile neutropenia (P = .002); and alopecia (P < .001) were significantly lower, whereas grade 3 or 4 nausea (P = .004) was more common.\"",
      "takeaway (10.3, 0.94): PubMed abstract PMID 18506025, RESULTS: \"Overall survival for cisplatin/pemetrexed was noninferior to cisplatin/gemcitabine (median survival, 10.3 v 10.3 months, respectively;\"; RESULTS: \"HR = 0.94; 95% CI, 0.84 to 1.05).\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "crystal",
    "placeholder": false,
    "acronym": "CRYSTAL",
    "year": 2009,
    "yearLabel": "2009",
    "topic": "colorectal",
    "status": "published",
    "title": "Cetuximab and chemotherapy as initial treatment for metastatic colorectal cancer",
    "citation": "Van Cutsem E, Köhne CH, Hitre E, and others. Cetuximab and chemotherapy as initial treatment for metastatic colorectal cancer. New England Journal of Medicine. 2009;360(14):1408-1417.",
    "pmid": "19339720",
    "doi": "10.1056/NEJMoa0805019",
    "design": "Randomized trial of first-line therapy. The primary end point was progression-free survival.",
    "population": "Patients with epidermal growth factor receptor-positive colorectal cancer with unresectable metastases (599 per group).",
    "intervention": "Cetuximab plus FOLFIRI.",
    "comparator": "FOLFIRI alone.",
    "primaryResult": "Progression-free survival favored cetuximab plus FOLFIRI (hazard ratio 0.85; 95% CI 0.72 to 0.99; P=0.048).",
    "secondaryResults": "Overall survival did not differ significantly (hazard ratio 0.93; 95% CI 0.81 to 1.07; P=0.31). In KRAS wild-type tumors, the progression-free survival hazard ratio was 0.68 (95% CI 0.50 to 0.94). The interaction between treatment and KRAS status was significant for tumor response (P=0.03) but not for progression-free survival (P=0.07) or overall survival (P=0.44).",
    "safety": "Grade 3 or 4 events more frequent with cetuximab included skin reactions (grade 3 only; 19.7% versus 0.2%), infusion-related reactions (2.5% versus 0%), and diarrhea (15.7% versus 10.5%).",
    "takeaway": "Adding cetuximab to first-line FOLFIRI improved progression-free survival in metastatic colorectal cancer (hazard ratio 0.85; hazard ratio 0.68 in KRAS wild-type tumors). The authors concluded that the benefit was limited to KRAS wild-type tumors, although the treatment-by-KRAS interaction was not significant for progression-free survival (P=0.07). Grade 3 skin reactions occurred in 19.7%.",
    "limitations": "Patients were not selected by KRAS status at entry, so the KRAS findings come from a subgroup. No overall survival difference in the whole population.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "19339720",
        "doi": "10.1056/NEJMoa0805019",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "population (599): PubMed abstract PMID 19339720, RESULTS: \"A total of 599 patients received cetuximab plus FOLFIRI, and 599 received FOLFIRI alone.\"",
      "primaryResult (0.85, 95, 0.72, 0.99, 0.048): PubMed abstract PMID 19339720, RESULTS: \"The hazard ratio for progression-free survival in the cetuximab-FOLFIRI group as compared with the FOLFIRI group was 0.85 (95% confidence interval [CI], 0.72 to 0.99;\"; RESULTS: \"P=0.048).\"",
      "secondaryResults (0.93, 95, 0.81, 1.07, 0.31, 0.68, 0.50, 0.94, 0.03, 0.07, 0.44): PubMed abstract PMID 19339720, RESULTS: \"There was no significant difference in the overall survival between the two treatment groups (hazard ratio, 0.93; 95% CI, 0.81 to 1.07;\"; RESULTS: \"P=0.31).\"; RESULTS: \"The hazard ratio for progression-free survival among patients with wild-type-KRAS tumors was 0.68 (95% CI, 0.50 to 0.94), in favor of the cetuximab-FOLFIRI group.\"; RESULTS: \"There was a significant interaction between treatment group and KRAS mutation status for tumor response (P=0.03) but not for progression-free survival (P=0.07) or overall survival (P=0.44).\"",
      "safety (3, 4, 19.7, 0.2, 2.5, 0, 15.7, 10.5): PubMed abstract PMID 19339720, RESULTS: \"The following grade 3 or 4 adverse events were more frequent with cetuximab plus FOLFIRI than with FOLFIRI alone: skin reactions (which were grade 3 only) (in 19.7% vs. 0.2% of patients, P<0.001), infusion-related reactions (in 2.5% vs. 0%, P<0.001), and diarrhea (in 15.7% vs. 10.5%, P=0.008).\"",
      "takeaway (0.85, 0.68, 0.07, 3, 19.7): PubMed abstract PMID 19339720, RESULTS: \"The hazard ratio for progression-free survival in the cetuximab-FOLFIRI group as compared with the FOLFIRI group was 0.85 (95% confidence interval [CI], 0.72 to 0.99;\"; RESULTS: \"The hazard ratio for progression-free survival among patients with wild-type-KRAS tumors was 0.68 (95% CI, 0.50 to 0.94), in favor of the cetuximab-FOLFIRI group.\"; RESULTS: \"There was a significant interaction between treatment group and KRAS mutation status for tumor response (P=0.03) but not for progression-free survival (P=0.07) or overall survival (P=0.44).\"; RESULTS: \"The following grade 3 or 4 adverse events were more frequent with cetuximab plus FOLFIRI than with FOLFIRI alone: skin reactions (which were grade 3 only) (in 19.7% vs. 0.2% of patients, P<0.001), infusion-related reactions (in 2.5% vs. 0%, P<0.001), and diarrhea (in 15.7% vs. 10.5%, P=0.008).\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "ipass",
    "placeholder": false,
    "acronym": "IPASS",
    "year": 2009,
    "yearLabel": "2009",
    "topic": "lung",
    "status": "published",
    "title": "Gefitinib or carboplatin-paclitaxel in pulmonary adenocarcinoma",
    "citation": "Mok TS, Wu YL, Thongprasert S, and others. Gefitinib or carboplatin-paclitaxel in pulmonary adenocarcinoma. New England Journal of Medicine. 2009;361(10):947-957.",
    "pmid": "19692680",
    "doi": "10.1056/NEJMoa0810699",
    "design": "Phase 3, open-label randomized trial in East Asia. The primary end point was progression-free survival; the primary objective was noninferiority of gefitinib, and superiority was also shown.",
    "population": "Previously untreated patients in East Asia with advanced pulmonary adenocarcinoma who were nonsmokers or former light smokers.",
    "intervention": "Gefitinib 250 mg per day (609 patients).",
    "comparator": "Carboplatin (dosed to an area under the curve of 5 or 6 mg per milliliter per minute) plus paclitaxel 200 mg per square meter (608 patients).",
    "primaryResult": "Gefitinib was noninferior and also superior for progression-free survival in the intention-to-treat population (hazard ratio for progression or death 0.74; 95% CI 0.65 to 0.85; P<0.001). Twelve-month progression-free survival was 24.9% with gefitinib and 6.7% with carboplatin-paclitaxel.",
    "secondaryResults": "In 261 patients with an EGFR mutation, progression-free survival favored gefitinib (hazard ratio 0.48; 95% CI 0.36 to 0.64; P<0.001). In 176 patients without the mutation, it favored carboplatin-paclitaxel (hazard ratio with gefitinib 2.85; 95% CI 2.05 to 3.98; P<0.001).",
    "safety": "The most common adverse events were rash or acne (66.2%) and diarrhea (46.6%) with gefitinib, and neurotoxic effects (69.9%), neutropenia (67.1%), and alopecia (58.4%) with carboplatin-paclitaxel.",
    "takeaway": "In clinically selected East Asian patients with advanced adenocarcinoma, first-line gefitinib was superior to carboplatin-paclitaxel for progression-free survival overall (hazard ratio 0.74), but the benefit depended on EGFR mutation status: hazard ratio 0.48 with the mutation and 2.85 without it.",
    "limitations": "Patients were selected by clinical features, not by EGFR testing, and the mutation subgroups were smaller (261 and 176 patients). Open-label design; East Asian population only.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "19692680",
        "doi": "10.1056/NEJMoa0810699",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3): PubMed abstract PMID 19692680, METHODS: \"In this phase 3, open-label study, we randomly assigned previously untreated patients in East Asia who had advanced pulmonary adenocarcinoma and who were nonsmokers or former light smokers to receive gefitinib (250 mg per day) (609 patients) or carboplatin (at a dose calculated to produce an area under the curve of 5 or 6 mg per milliliter per minute) plus paclitaxel (200 mg per square meter of body-surface area) (608 patients).\"",
      "intervention (250, 609): PubMed abstract PMID 19692680, METHODS: \"In this phase 3, open-label study, we randomly assigned previously untreated patients in East Asia who had advanced pulmonary adenocarcinoma and who were nonsmokers or former light smokers to receive gefitinib (250 mg per day) (609 patients) or carboplatin (at a dose calculated to produce an area under the curve of 5 or 6 mg per milliliter per minute) plus paclitaxel (200 mg per square meter of body-surface area) (608 patients).\"",
      "comparator (5, 6, 200, 608): PubMed abstract PMID 19692680, METHODS: \"In this phase 3, open-label study, we randomly assigned previously untreated patients in East Asia who had advanced pulmonary adenocarcinoma and who were nonsmokers or former light smokers to receive gefitinib (250 mg per day) (609 patients) or carboplatin (at a dose calculated to produce an area under the curve of 5 or 6 mg per milliliter per minute) plus paclitaxel (200 mg per square meter of body-surface area) (608 patients).\"",
      "primaryResult (0.74, 95, 0.65, 0.85, 0.001, 24.9, 6.7): PubMed abstract PMID 19692680, RESULTS: \"The study met its primary objective of showing the noninferiority of gefitinib and also showed its superiority, as compared with carboplatin-paclitaxel, with respect to progression-free survival in the intention-to-treat population (hazard ratio for progression or death, 0.74; 95% confidence interval [CI], 0.65 to 0.85;\"; RESULTS: \"P<0.001), whereas in the subgroup of 176 patients who were negative for the mutation, progression-free survival was significantly longer among those who received carboplatin-paclitaxel (hazard ratio for progression or death with gefitinib, 2.85; 95% CI, 2.05 to 3.98;\"; RESULTS: \"The 12-month rates of progression-free survival were 24.9% with gefitinib and 6.7% with carboplatin-paclitaxel.\"",
      "secondaryResults (261, 0.48, 95, 0.36, 0.64, 0.001, 176, 2.85, 2.05, 3.98): PubMed abstract PMID 19692680, RESULTS: \"In the subgroup of 261 patients who were positive for the epidermal growth factor receptor gene (EGFR) mutation, progression-free survival was significantly longer among those who received gefitinib than among those who received carboplatin-paclitaxel (hazard ratio for progression or death, 0.48; 95% CI, 0.36 to 0.64;\"; RESULTS: \"P<0.001), whereas in the subgroup of 176 patients who were negative for the mutation, progression-free survival was significantly longer among those who received carboplatin-paclitaxel (hazard ratio for progression or death with gefitinib, 2.85; 95% CI, 2.05 to 3.98;\"",
      "safety (66.2, 46.6, 69.9, 67.1, 58.4): PubMed abstract PMID 19692680, RESULTS: \"The most common adverse events were rash or acne (in 66.2% of patients) and diarrhea (46.6%) in the gefitinib group and neurotoxic effects (69.9%), neutropenia (67.1%), and alopecia (58.4%) in the carboplatin-paclitaxel group.\"",
      "takeaway (0.74, 0.48, 2.85): PubMed abstract PMID 19692680, RESULTS: \"The study met its primary objective of showing the noninferiority of gefitinib and also showed its superiority, as compared with carboplatin-paclitaxel, with respect to progression-free survival in the intention-to-treat population (hazard ratio for progression or death, 0.74; 95% confidence interval [CI], 0.65 to 0.85;\"; RESULTS: \"In the subgroup of 261 patients who were positive for the epidermal growth factor receptor gene (EGFR) mutation, progression-free survival was significantly longer among those who received gefitinib than among those who received carboplatin-paclitaxel (hazard ratio for progression or death, 0.48; 95% CI, 0.36 to 0.64;\"; RESULTS: \"P<0.001), whereas in the subgroup of 176 patients who were negative for the mutation, progression-free survival was significantly longer among those who received carboplatin-paclitaxel (hazard ratio for progression or death with gefitinib, 2.85; 95% CI, 2.05 to 3.98;\"",
      "limitations (261, 176): PubMed abstract PMID 19692680, RESULTS: \"In the subgroup of 261 patients who were positive for the epidermal growth factor receptor gene (EGFR) mutation, progression-free survival was significantly longer among those who received gefitinib than among those who received carboplatin-paclitaxel (hazard ratio for progression or death, 0.48; 95% CI, 0.36 to 0.64;\"; RESULTS: \"P<0.001), whereas in the subgroup of 176 patients who were negative for the mutation, progression-free survival was significantly longer among those who received carboplatin-paclitaxel (hazard ratio for progression or death with gefitinib, 2.85; 95% CI, 2.05 to 3.98;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "tropic",
    "placeholder": false,
    "acronym": "TROPIC",
    "year": 2010,
    "yearLabel": "2010",
    "topic": "prostate",
    "status": "published",
    "title": "Prednisone plus cabazitaxel or mitoxantrone for metastatic castration-resistant prostate cancer progressing after docetaxel treatment: a randomised open-label trial",
    "citation": "de Bono JS, Oudard S, Ozguroglu M, and others. Prednisone plus cabazitaxel or mitoxantrone for metastatic castration-resistant prostate cancer progressing after docetaxel treatment: a randomised open-label trial. Lancet. 2010;376(9747):1147-1154.",
    "pmid": "20888992",
    "doi": "10.1016/S0140-6736(10)61389-X",
    "design": "Open-label, randomised phase 3 trial. All men received prednisone 10 mg daily. The primary endpoint was overall survival, analysed by intention to treat; final analysis cutoff Sept 25, 2009.",
    "population": "755 men with metastatic castration-resistant prostate cancer that progressed during or after a docetaxel-containing regimen.",
    "intervention": "Cabazitaxel 25 mg/m2 intravenously every 3 weeks plus prednisone (378 men).",
    "comparator": "Mitoxantrone 12 mg/m2 intravenously every 3 weeks plus prednisone (377 men).",
    "primaryResult": "Median survival was 15.1 months with cabazitaxel versus 12.7 months with mitoxantrone (hazard ratio for death 0.70; 95% CI 0.59 to 0.83; p<0.0001).",
    "secondaryResults": "Median progression-free survival was 2.8 versus 1.4 months (hazard ratio 0.74; 95% CI 0.64 to 0.86; p<0.0001).",
    "safety": "Grade 3 or higher neutropenia occurred in 82% with cabazitaxel versus 58% with mitoxantrone, and diarrhoea in 6% versus less than 1%. Febrile neutropenia occurred in 8% versus 1%.",
    "takeaway": "After docetaxel for metastatic castration-resistant prostate cancer, cabazitaxel with prednisone improved median survival over mitoxantrone with prednisone (15.1 versus 12.7 months; hazard ratio 0.70), with grade 3 or higher neutropenia in 82% and febrile neutropenia in 8%.",
    "limitations": "Open-label design with mitoxantrone as the comparator.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "20888992",
        "doi": "10.1016/S0140-6736(10)61389-X",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 10, 25, 2009): PubMed abstract PMID 20888992, METHODS: \"Participants were treated with 10 mg oral prednisone daily, and were randomly assigned to receive either 12 mg/m(2) mitoxantrone intravenously over 15-30 min or 25 mg/m(2) cabazitaxel intravenously over 1 h every 3 weeks.\"; FINDINGS: \"At the cutoff for the final analysis (Sept 25, 2009), median survival was 15·1 months (95% CI 14·1-16·3) in the cabazitaxel group and 12·7 months (11·6-13·7) in the mitoxantrone group.\"",
      "population (755): PubMed abstract PMID 20888992, FINDINGS: \"755 men were allocated to treatment groups (377 mitoxantrone, 378 cabazitaxel) and were included in the intention-to-treat analysis.\"",
      "intervention (25, 3, 378): PubMed abstract PMID 20888992, METHODS: \"Participants were treated with 10 mg oral prednisone daily, and were randomly assigned to receive either 12 mg/m(2) mitoxantrone intravenously over 15-30 min or 25 mg/m(2) cabazitaxel intravenously over 1 h every 3 weeks.\"; FINDINGS: \"755 men were allocated to treatment groups (377 mitoxantrone, 378 cabazitaxel) and were included in the intention-to-treat analysis.\"",
      "comparator (12, 3, 377): PubMed abstract PMID 20888992, METHODS: \"Participants were treated with 10 mg oral prednisone daily, and were randomly assigned to receive either 12 mg/m(2) mitoxantrone intravenously over 15-30 min or 25 mg/m(2) cabazitaxel intravenously over 1 h every 3 weeks.\"; FINDINGS: \"755 men were allocated to treatment groups (377 mitoxantrone, 378 cabazitaxel) and were included in the intention-to-treat analysis.\"",
      "primaryResult (15.1, 12.7, 0.70, 95, 0.59, 0.83, 0.0001): PubMed abstract PMID 20888992, FINDINGS: \"At the cutoff for the final analysis (Sept 25, 2009), median survival was 15·1 months (95% CI 14·1-16·3) in the cabazitaxel group and 12·7 months (11·6-13·7) in the mitoxantrone group.\"; FINDINGS: \"The hazard ratio for death of men treated with cabazitaxel compared with those taking mitoxantrone was 0·70 (95% CI 0·59-0·83, p<0·0001).\"",
      "secondaryResults (2.8, 1.4, 0.74, 95, 0.64, 0.86, 0.0001): PubMed abstract PMID 20888992, FINDINGS: \"Median progression-free survival was 2·8 months (95% CI 2·4-3·0) in the cabazitaxel group and 1·4 months (1·4-1·7) in the mitoxantrone group (HR 0·74, 0·64-0·86, p<0·0001).\"",
      "safety (3, 82, 58, 6, 1, 8): PubMed abstract PMID 20888992, FINDINGS: \"The most common clinically significant grade 3 or higher adverse events were neutropenia (cabazitaxel, 303 [82%] patients vs mitoxantrone, 215 [58%]) and diarrhoea (23 [6%] vs one [<1%]). 28 (8%) patients in the cabazitaxel group and five (1%) in the mitoxantrone group had febrile neutropenia.\"",
      "takeaway (15.1, 12.7, 0.70, 3, 82, 8): PubMed abstract PMID 20888992, FINDINGS: \"At the cutoff for the final analysis (Sept 25, 2009), median survival was 15·1 months (95% CI 14·1-16·3) in the cabazitaxel group and 12·7 months (11·6-13·7) in the mitoxantrone group.\"; FINDINGS: \"The hazard ratio for death of men treated with cabazitaxel compared with those taking mitoxantrone was 0·70 (95% CI 0·59-0·83, p<0·0001).\"; FINDINGS: \"The most common clinically significant grade 3 or higher adverse events were neutropenia (cabazitaxel, 303 [82%] patients vs mitoxantrone, 215 [58%]) and diarrhoea (23 [6%] vs one [<1%]). 28 (8%) patients in the cabazitaxel group and five (1%) in the mitoxantrone group had febrile neutropenia.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "cou-aa-301",
    "placeholder": false,
    "acronym": "COU-AA-301",
    "year": 2011,
    "yearLabel": "2011",
    "topic": "prostate",
    "status": "published",
    "title": "Abiraterone and increased survival in metastatic prostate cancer",
    "citation": "de Bono JS, Logothetis CJ, Molina A, and others. Abiraterone and increased survival in metastatic prostate cancer. New England Journal of Medicine. 2011;364(21):1995-2005.",
    "pmid": "21612468",
    "doi": "10.1056/NEJMoa1014618",
    "design": "Randomized, placebo-controlled trial (2:1). The primary end point was overall survival. Data were unblinded at the interim analysis because results exceeded preplanned stopping criteria. Median follow-up was 12.8 months.",
    "population": "1195 patients with metastatic castration-resistant prostate cancer who had previously received docetaxel.",
    "intervention": "Abiraterone acetate 1000 mg plus prednisone 5 mg twice daily (797 patients).",
    "comparator": "Placebo plus prednisone 5 mg twice daily (398 patients).",
    "primaryResult": "Median overall survival was 14.8 months with abiraterone-prednisone versus 10.9 months with placebo-prednisone (hazard ratio 0.65; 95% CI 0.54 to 0.77; P<0.001).",
    "secondaryResults": "All secondary end points favored abiraterone: time to PSA progression 10.2 versus 6.6 months, progression-free survival 5.6 versus 3.6 months, and PSA response 29% versus 6% (P<0.001 for each).",
    "safety": "Mineralocorticoid-related adverse events, including fluid retention, hypertension, and hypokalemia, were more frequent with abiraterone-prednisone.",
    "takeaway": "After docetaxel for metastatic castration-resistant prostate cancer, abiraterone with prednisone extended median overall survival over prednisone alone (14.8 versus 10.9 months; hazard ratio 0.65), with more fluid retention, hypertension, and hypokalemia.",
    "limitations": "Interim analysis with a median follow-up of 12.8 months. The abstract does not give rates for mineralocorticoid-related adverse events.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "21612468",
        "doi": "10.1056/NEJMoa1014618",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (2, 1, 12.8): PubMed abstract PMID 21612468, METHODS: \"We randomly assigned, in a 2:1 ratio, 1195 patients who had previously received docetaxel to receive 5 mg of prednisone twice daily with either 1000 mg of abiraterone acetate (797 patients) or placebo (398 patients).\"; RESULTS: \"After a median follow-up of 12.8 months, overall survival was longer in the abiraterone acetate-prednisone group than in the placebo-prednisone group (14.8 months vs. 10.9 months; hazard ratio, 0.65; 95% confidence interval, 0.54 to 0.77;\"",
      "population (1195): PubMed abstract PMID 21612468, METHODS: \"We randomly assigned, in a 2:1 ratio, 1195 patients who had previously received docetaxel to receive 5 mg of prednisone twice daily with either 1000 mg of abiraterone acetate (797 patients) or placebo (398 patients).\"",
      "intervention (1000, 5, 797): PubMed abstract PMID 21612468, METHODS: \"We randomly assigned, in a 2:1 ratio, 1195 patients who had previously received docetaxel to receive 5 mg of prednisone twice daily with either 1000 mg of abiraterone acetate (797 patients) or placebo (398 patients).\"",
      "comparator (5, 398): PubMed abstract PMID 21612468, METHODS: \"We randomly assigned, in a 2:1 ratio, 1195 patients who had previously received docetaxel to receive 5 mg of prednisone twice daily with either 1000 mg of abiraterone acetate (797 patients) or placebo (398 patients).\"",
      "primaryResult (14.8, 10.9, 0.65, 95, 0.54, 0.77, 0.001): PubMed abstract PMID 21612468, RESULTS: \"After a median follow-up of 12.8 months, overall survival was longer in the abiraterone acetate-prednisone group than in the placebo-prednisone group (14.8 months vs. 10.9 months; hazard ratio, 0.65; 95% confidence interval, 0.54 to 0.77;\"; RESULTS: \"P<0.001).\"",
      "secondaryResults (10.2, 6.6, 5.6, 3.6, 29, 6, 0.001): PubMed abstract PMID 21612468, RESULTS: \"All secondary end points, including time to PSA progression (10.2 vs. 6.6 months;\"; RESULTS: \"P<0.001), progression-free survival (5.6 months vs. 3.6 months;\"; RESULTS: \"P<0.001), and PSA response rate (29% vs. 6%, P<0.001), favored the treatment group.\"",
      "takeaway (14.8, 10.9, 0.65): PubMed abstract PMID 21612468, RESULTS: \"After a median follow-up of 12.8 months, overall survival was longer in the abiraterone acetate-prednisone group than in the placebo-prednisone group (14.8 months vs. 10.9 months; hazard ratio, 0.65; 95% confidence interval, 0.54 to 0.77;\"",
      "limitations (12.8): PubMed abstract PMID 21612468, RESULTS: \"After a median follow-up of 12.8 months, overall survival was longer in the abiraterone acetate-prednisone group than in the placebo-prednisone group (14.8 months vs. 10.9 months; hazard ratio, 0.65; 95% confidence interval, 0.54 to 0.77;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "cleopatra",
    "placeholder": false,
    "acronym": "CLEOPATRA",
    "year": 2012,
    "yearLabel": "2012",
    "topic": "breast",
    "status": "published",
    "title": "Pertuzumab plus trastuzumab plus docetaxel for metastatic breast cancer",
    "citation": "Baselga J, Cortés J, Kim SB, and others. Pertuzumab plus trastuzumab plus docetaxel for metastatic breast cancer. New England Journal of Medicine. 2012;366(2):109-119.",
    "pmid": "22149875",
    "doi": "10.1056/NEJMoa1113216",
    "design": "Randomized, placebo-controlled trial of first-line treatment given until disease progression or unmanageable toxic effects. The primary end point was independently assessed progression-free survival.",
    "population": "808 patients with HER2-positive metastatic breast cancer receiving first-line treatment.",
    "intervention": "Pertuzumab plus trastuzumab plus docetaxel.",
    "comparator": "Placebo plus trastuzumab plus docetaxel.",
    "primaryResult": "Median progression-free survival was 18.5 months with pertuzumab versus 12.4 months with control (hazard ratio for progression or death 0.62; 95% CI 0.51 to 0.75; P<0.001).",
    "secondaryResults": "The interim analysis of overall survival showed a strong trend in favor of the pertuzumab combination.",
    "safety": "The safety profile was generally similar between groups, with no increase in left ventricular systolic dysfunction. Febrile neutropenia and diarrhea of grade 3 or above were more frequent with pertuzumab.",
    "takeaway": "Adding pertuzumab to trastuzumab plus docetaxel as first-line therapy for HER2-positive metastatic breast cancer prolonged median progression-free survival (18.5 versus 12.4 months; hazard ratio 0.62) without more left ventricular systolic dysfunction.",
    "limitations": "Overall survival was an interim analysis showing a trend only. The abstract does not give rates for febrile neutropenia or diarrhea.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "22149875",
        "doi": "10.1056/NEJMoa1113216",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "population (808): PubMed abstract PMID 22149875, METHODS: \"We randomly assigned 808 patients with HER2-positive metastatic breast cancer to receive placebo plus trastuzumab plus docetaxel (control group) or pertuzumab plus trastuzumab plus docetaxel (pertuzumab group) as first-line treatment until the time of disease progression or the development of toxic effects that could not be effectively managed.\"",
      "primaryResult (18.5, 12.4, 0.62, 95, 0.51, 0.75, 0.001): PubMed abstract PMID 22149875, RESULTS: \"The median progression-free survival was 12.4 months in the control group, as compared with 18.5 months in the pertuzumab group (hazard ratio for progression or death, 0.62; 95% confidence interval, 0.51 to 0.75;\"; RESULTS: \"P<0.001).\"",
      "safety (3): PubMed abstract PMID 22149875, RESULTS: \"The safety profile was generally similar in the two groups, with no increase in left ventricular systolic dysfunction; the rates of febrile neutropenia and diarrhea of grade 3 or above were higher in the pertuzumab group than in the control group.\"",
      "takeaway (18.5, 12.4, 0.62): PubMed abstract PMID 22149875, RESULTS: \"The median progression-free survival was 12.4 months in the control group, as compared with 18.5 months in the pertuzumab group (hazard ratio for progression or death, 0.62; 95% confidence interval, 0.51 to 0.75;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "emilia",
    "placeholder": false,
    "acronym": "EMILIA",
    "year": 2012,
    "yearLabel": "2012",
    "topic": "breast",
    "status": "published",
    "title": "Trastuzumab emtansine for HER2-positive advanced breast cancer",
    "citation": "Verma S, Miles D, Gianni L, and others. Trastuzumab emtansine for HER2-positive advanced breast cancer. New England Journal of Medicine. 2012;367(19):1783-1791.",
    "pmid": "23020162",
    "doi": "10.1056/NEJMoa1209124",
    "design": "Randomized trial with primary end points of independently reviewed progression-free survival, overall survival, and safety. Two interim analyses of overall survival were conducted.",
    "population": "991 patients with HER2-positive advanced breast cancer previously treated with trastuzumab and a taxane.",
    "intervention": "Trastuzumab emtansine (T-DM1).",
    "comparator": "Lapatinib plus capecitabine.",
    "primaryResult": "Median independently reviewed progression-free survival was 9.6 months with T-DM1 versus 6.4 months with lapatinib plus capecitabine (hazard ratio 0.65; 95% CI 0.55 to 0.77; P<0.001). At the second interim analysis, median overall survival crossed the stopping boundary for efficacy (30.9 versus 25.1 months; hazard ratio for death 0.68; 95% CI 0.55 to 0.85; P<0.001).",
    "secondaryResults": "Objective response rate was higher with T-DM1 (43.6% versus 30.8%; P<0.001), and all additional secondary end points favored T-DM1.",
    "safety": "Grade 3 or 4 adverse events were less frequent with T-DM1 (41% versus 57%). Thrombocytopenia and increased serum aminotransferase levels were more frequent with T-DM1; diarrhea, nausea, vomiting, and palmar-plantar erythrodysesthesia were more frequent with lapatinib plus capecitabine.",
    "takeaway": "In previously treated HER2-positive advanced breast cancer, T-DM1 prolonged progression-free survival (9.6 versus 6.4 months) and overall survival (30.9 versus 25.1 months) compared with lapatinib plus capecitabine, with fewer grade 3 or 4 adverse events but more thrombocytopenia and aminotransferase elevation.",
    "limitations": "Overall survival comes from an interim analysis. The comparator was lapatinib plus capecitabine, not another trastuzumab-based regimen.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "23020162",
        "doi": "10.1056/NEJMoa1209124",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "population (991): PubMed abstract PMID 23020162, RESULTS: \"Among 991 randomly assigned patients, median progression-free survival as assessed by independent review was 9.6 months with T-DM1 versus 6.4 months with lapatinib plus capecitabine (hazard ratio for progression or death from any cause, 0.65; 95% confidence interval [CI], 0.55 to 0.77;\"",
      "primaryResult (9.6, 6.4, 0.65, 95, 0.55, 0.77, 0.001, 30.9, 25.1, 0.68, 0.85): PubMed abstract PMID 23020162, RESULTS: \"Among 991 randomly assigned patients, median progression-free survival as assessed by independent review was 9.6 months with T-DM1 versus 6.4 months with lapatinib plus capecitabine (hazard ratio for progression or death from any cause, 0.65; 95% confidence interval [CI], 0.55 to 0.77;\"; RESULTS: \"P<0.001), and median overall survival at the second interim analysis crossed the stopping boundary for efficacy (30.9 months vs. 25.1 months; hazard ratio for death from any cause, 0.68; 95% CI, 0.55 to 0.85;\"",
      "secondaryResults (43.6, 30.8, 0.001): PubMed abstract PMID 23020162, RESULTS: \"The objective response rate was higher with T-DM1 (43.6%, vs. 30.8% with lapatinib plus capecitabine;\"; RESULTS: \"P<0.001), and median overall survival at the second interim analysis crossed the stopping boundary for efficacy (30.9 months vs. 25.1 months; hazard ratio for death from any cause, 0.68; 95% CI, 0.55 to 0.85;\"",
      "safety (3, 4, 41, 57): PubMed abstract PMID 23020162, RESULTS: \"Rates of grade 3 or 4 adverse events were higher with lapatinib plus capecitabine than with T-DM1 (57% vs. 41%).\"",
      "takeaway (9.6, 6.4, 30.9, 25.1, 3, 4): PubMed abstract PMID 23020162, RESULTS: \"Among 991 randomly assigned patients, median progression-free survival as assessed by independent review was 9.6 months with T-DM1 versus 6.4 months with lapatinib plus capecitabine (hazard ratio for progression or death from any cause, 0.65; 95% confidence interval [CI], 0.55 to 0.77;\"; RESULTS: \"P<0.001), and median overall survival at the second interim analysis crossed the stopping boundary for efficacy (30.9 months vs. 25.1 months; hazard ratio for death from any cause, 0.68; 95% CI, 0.55 to 0.85;\"; RESULTS: \"Rates of grade 3 or 4 adverse events were higher with lapatinib plus capecitabine than with T-DM1 (57% vs. 41%).\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "paramount",
    "placeholder": false,
    "acronym": "PARAMOUNT",
    "year": 2012,
    "yearLabel": "2012",
    "topic": "lung",
    "status": "published",
    "title": "Maintenance therapy with pemetrexed plus best supportive care versus placebo plus best supportive care after induction therapy with pemetrexed plus cisplatin for advanced non-squamous non-small-cell lung cancer (PARAMOUNT): a double-blind, phase 3, randomised controlled trial",
    "citation": "Paz-Ares L, de Marinis F, Dediu M, and others. Maintenance therapy with pemetrexed plus best supportive care versus placebo plus best supportive care after induction therapy with pemetrexed plus cisplatin for advanced non-squamous non-small-cell lung cancer (PARAMOUNT): a double-blind, phase 3, randomised controlled trial. Lancet Oncology. 2012;13(3):247-255.",
    "pmid": "22341744",
    "doi": "10.1016/S1470-2045(12)70063-3",
    "design": "Double-blind, multicentre, phase 3 placebo-controlled randomized trial (2:1). All patients first received four cycles of induction pemetrexed 500 mg/m2 plus cisplatin 75 mg/m2 on day 1 of a 21-day cycle. The primary end point was progression-free survival in the intention-to-treat population.",
    "population": "539 patients with advanced non-squamous NSCLC and ECOG performance status 0 or 1 who had not progressed after four cycles of induction (of 939 who entered induction).",
    "intervention": "Continuation maintenance pemetrexed 500 mg/m2 every 21 days plus best supportive care until disease progression (359 patients).",
    "comparator": "Placebo plus best supportive care (180 patients).",
    "primaryResult": "Pemetrexed reduced the risk of disease progression (hazard ratio 0.62; 95% CI 0.49 to 0.79; p<0.0001). Median progression-free survival from randomisation was 4.1 months versus 2.8 months.",
    "safety": "Possibly treatment-related laboratory grade 3-4 adverse events occurred in 9% with pemetrexed versus less than 1% with placebo (p<0.0001), and non-laboratory grade 3-5 events in 9% versus 4% (p=0.080). Discontinuations for drug-related adverse events occurred in 5% versus 3%. One possibly treatment-related death was reported in each group.",
    "takeaway": "In non-squamous NSCLC without progression after pemetrexed-cisplatin induction, continuation maintenance pemetrexed lengthened progression-free survival (4.1 versus 2.8 months; hazard ratio 0.62).",
    "limitations": "Only patients who completed induction without progression were randomized. Overall survival is not reported in this abstract.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "22341744",
        "doi": "10.1016/S1470-2045(12)70063-3",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 2, 1, 500, 75, 21): PubMed abstract PMID 22341744, METHODS: \"In this double-blind, multicentre, phase 3, randomised placebo-controlled trial, patients with advanced non-squamous NSCLC aged 18 years or older, with no previous systemic chemotherapy for lung cancer, with at least one measurable lesion, and an Eastern Cooperative Oncology Group (ECOG) performance status of 0 or 1 participated.\"; METHODS: \"Before randomisation, patients entered an induction phase which consisted of four cycles of induction pemetrexed (500 mg/m(2)) plus cisplatin (75 mg/m(2)) on day 1 of a 21-day cycle.\"",
      "population (539, 0, 1, 939): PubMed abstract PMID 22341744, FINDINGS: \"Of these, 539 patients were randomly assigned to receive continuation maintenance with pemetrexed plus best supportive care (n=359) or with placebo plus best supportive care (n=180).\"; METHODS: \"In this double-blind, multicentre, phase 3, randomised placebo-controlled trial, patients with advanced non-squamous NSCLC aged 18 years or older, with no previous systemic chemotherapy for lung cancer, with at least one measurable lesion, and an Eastern Cooperative Oncology Group (ECOG) performance status of 0 or 1 participated.\"; FINDINGS: \"Of the 1022 patients enrolled, 939 participated in the induction phase.\"",
      "intervention (500, 21, 359): PubMed abstract PMID 22341744, METHODS: \"Before randomisation, patients entered an induction phase which consisted of four cycles of induction pemetrexed (500 mg/m(2)) plus cisplatin (75 mg/m(2)) on day 1 of a 21-day cycle.\"; FINDINGS: \"Of these, 539 patients were randomly assigned to receive continuation maintenance with pemetrexed plus best supportive care (n=359) or with placebo plus best supportive care (n=180).\"",
      "comparator (180): PubMed abstract PMID 22341744, FINDINGS: \"Of these, 539 patients were randomly assigned to receive continuation maintenance with pemetrexed plus best supportive care (n=359) or with placebo plus best supportive care (n=180).\"",
      "primaryResult (0.62, 95, 0.49, 0.79, 0.0001, 4.1, 2.8): PubMed abstract PMID 22341744, FINDINGS: \"Among the 359 patients randomised to continuation maintenance with pemetrexed, there was a significant reduction in the risk of disease progression over the placebo group (HR 0·62, 95% CI 0·49-0·79; p<0·0001).\"; FINDINGS: \"The median progression-free survival, measured from randomisation, was 4·1 months (95% CI 3·2-4·6) for pemetrexed and 2·8 months (2·6-3·1) for placebo.\"",
      "safety (3, 4, 9, 1, 0.0001, 5, 0.080): PubMed abstract PMID 22341744, FINDINGS: \"Possibly treatment-related laboratory grade 3-4 adverse events were more common in the pemetrexed group (33 [9%] of 359 patients) than in the placebo group (one [<1%] of 180 patients; p<0·0001), as were non-laboratory grade 3-5 adverse events (32 [9%] of 359 patients in the pemetrexed group; eight [4%] of 180 patients in the placebo group; p=0·080); one possibly treatment-related death was reported in each group.\"",
      "takeaway (4.1, 2.8, 0.62): PubMed abstract PMID 22341744, FINDINGS: \"The median progression-free survival, measured from randomisation, was 4·1 months (95% CI 3·2-4·6) for pemetrexed and 2·8 months (2·6-3·1) for placebo.\"; FINDINGS: \"Among the 359 patients randomised to continuation maintenance with pemetrexed, there was a significant reduction in the risk of disease progression over the placebo group (HR 0·62, 95% CI 0·49-0·79; p<0·0001).\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "alsympca",
    "placeholder": false,
    "acronym": "ALSYMPCA",
    "year": 2013,
    "yearLabel": "2013",
    "topic": "prostate",
    "status": "published",
    "title": "Alpha emitter radium-223 and survival in metastatic prostate cancer",
    "citation": "Parker C, Nilsson S, Heinrich D, and others. Alpha emitter radium-223 and survival in metastatic prostate cancer. New England Journal of Medicine. 2013;369(3):213-223.",
    "pmid": "23863050",
    "doi": "10.1056/NEJMoa1213755",
    "design": "Phase 3, randomized, double-blind, placebo-controlled trial (2:1). Six injections were given, one every 4 weeks, with best standard of care for all patients. The primary end point was overall survival; a prespecified interim analysis was done at 314 deaths and an updated analysis at 528 deaths, before crossover.",
    "population": "921 patients with castration-resistant prostate cancer and bone metastases who had received, were not eligible to receive, or declined docetaxel.",
    "intervention": "Radium-223, 50 kBq per kilogram intravenously.",
    "comparator": "Matching placebo.",
    "primaryResult": "At the interim analysis (809 patients), median overall survival was 14.0 months with radium-223 versus 11.2 months with placebo (hazard ratio 0.70; 95% CI 0.55 to 0.88; P=0.002). The updated analysis (921 patients) confirmed benefit: 14.9 versus 11.3 months (hazard ratio 0.70; 95% CI 0.58 to 0.83; P<0.001).",
    "secondaryResults": "All main secondary efficacy end points, including time to the first symptomatic skeletal event, favored radium-223.",
    "safety": "Radium-223 was associated with low myelosuppression rates and fewer adverse events.",
    "takeaway": "In castration-resistant prostate cancer with bone metastases after, ineligible for, or declining docetaxel, radium-223 improved median overall survival over placebo (14.9 versus 11.3 months in the updated analysis; hazard ratio 0.70).",
    "limitations": "The trial was terminated for efficacy at the interim analysis. The abstract gives no adverse event rates.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "23863050",
        "doi": "10.1056/NEJMoa1213755",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 2, 1, 4, 314, 528): PubMed abstract PMID 23863050, METHODS: \"In our phase 3, randomized, double-blind, placebo-controlled study, we randomly assigned 921 patients who had received, were not eligible to receive, or declined docetaxel, in a 2:1 ratio, to receive six injections of radium-223 (at a dose of 50 kBq per kilogram of body weight intravenously) or matching placebo; one injection was administered every 4 weeks.\"; METHODS: \"A prespecified interim analysis, conducted when 314 deaths had occurred, assessed the effect of radium-223 versus placebo on survival.\"; METHODS: \"An updated analysis, when 528 deaths had occurred, was performed before crossover from placebo to radium-223.\"",
      "population (921): PubMed abstract PMID 23863050, METHODS: \"In our phase 3, randomized, double-blind, placebo-controlled study, we randomly assigned 921 patients who had received, were not eligible to receive, or declined docetaxel, in a 2:1 ratio, to receive six injections of radium-223 (at a dose of 50 kBq per kilogram of body weight intravenously) or matching placebo; one injection was administered every 4 weeks.\"",
      "intervention (223, 50): PubMed abstract PMID 23863050, METHODS: \"In our phase 3, randomized, double-blind, placebo-controlled study, we randomly assigned 921 patients who had received, were not eligible to receive, or declined docetaxel, in a 2:1 ratio, to receive six injections of radium-223 (at a dose of 50 kBq per kilogram of body weight intravenously) or matching placebo; one injection was administered every 4 weeks.\"",
      "primaryResult (809, 14.0, 223, 11.2, 0.70, 95, 0.55, 0.88, 0.002, 921, 14.9, 11.3, 0.58, 0.83, 0.001): PubMed abstract PMID 23863050, RESULTS: \"At the interim analysis, which involved 809 patients, radium-223, as compared with placebo, significantly improved overall survival (median, 14.0 months vs. 11.2 months; hazard ratio, 0.70; 95% confidence interval [CI], 0.55 to 0.88; two-sided P=0.002).\"; RESULTS: \"The updated analysis involving 921 patients confirmed the radium-223 survival benefit (median, 14.9 months vs. 11.3 months; hazard ratio, 0.70; 95% CI, 0.58 to 0.83;\"; RESULTS: \"P<0.001).\"",
      "secondaryResults (223): PubMed abstract PMID 23863050, TITLE: \"Alpha emitter radium-223 and survival in metastatic prostate cancer.\"",
      "safety (223): PubMed abstract PMID 23863050, TITLE: \"Alpha emitter radium-223 and survival in metastatic prostate cancer.\"",
      "takeaway (223, 14.9, 11.3, 0.70): PubMed abstract PMID 23863050, RESULTS: \"The updated analysis involving 921 patients confirmed the radium-223 survival benefit (median, 14.9 months vs. 11.3 months; hazard ratio, 0.70; 95% CI, 0.58 to 0.83;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "correct",
    "placeholder": false,
    "acronym": "CORRECT",
    "year": 2013,
    "yearLabel": "2013",
    "topic": "colorectal",
    "status": "published",
    "title": "Regorafenib monotherapy for previously treated metastatic colorectal cancer (CORRECT): an international, multicentre, randomised, placebo-controlled, phase 3 trial",
    "citation": "Grothey A, Van Cutsem E, Sobrero A, and others. Regorafenib monotherapy for previously treated metastatic colorectal cancer (CORRECT): an international, multicentre, randomised, placebo-controlled, phase 3 trial. Lancet. 2013;381(9863):303-312.",
    "pmid": "23177514",
    "doi": "10.1016/S0140-6736(12)61900-X",
    "design": "International, multicentre, placebo-controlled phase 3 randomized trial (2:1) at 114 centres in 16 countries. Treatment was once daily for the first 3 weeks of each 4 week cycle. The primary end point was overall survival, met at a preplanned interim analysis.",
    "population": "760 patients with metastatic colorectal cancer that progressed during or within 3 months after the last standard therapy.",
    "intervention": "Best supportive care plus oral regorafenib 160 mg (505 patients).",
    "comparator": "Best supportive care plus placebo (255 patients).",
    "primaryResult": "Median overall survival was 6.4 months with regorafenib versus 5.0 months with placebo (hazard ratio 0.77; 95% CI 0.64 to 0.94; one-sided p=0.0052).",
    "safety": "Treatment-related adverse events occurred in 93% with regorafenib and 61% with placebo. The most common regorafenib-related grade 3 or higher events were hand-foot skin reaction (17%), fatigue (10%), diarrhoea (7%), hypertension (7%), and rash or desquamation (6%).",
    "takeaway": "After all standard therapies for metastatic colorectal cancer, regorafenib extended median overall survival over placebo (6.4 versus 5.0 months; hazard ratio 0.77), with grade 3 or higher hand-foot skin reaction in 17%.",
    "limitations": "Median overall survival gain of 6.4 versus 5.0 months at an interim analysis, with treatment-related adverse events in 93% of regorafenib patients.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "23177514",
        "doi": "10.1016/S0140-6736(12)61900-X",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 2, 1, 114, 16, 4): PubMed abstract PMID 23177514, METHODS: \"Patients with documented metastatic colorectal cancer and progression during or within 3 months after the last standard therapy were randomised (in a 2:1 ratio; by computer-generated randomisation list and interactive voice response system; preallocated block design (block size six); stratified by previous treatment with VEGF-targeting drugs, time from diagnosis of metastatic disease, and geographical region) to receive best supportive care plus oral regorafenib 160 mg or placebo once daily, for the first 3 weeks of each 4 week cycle.\"; METHODS: \"We did this trial at 114 centres in 16 countries.\"",
      "population (760, 3): PubMed abstract PMID 23177514, FINDINGS: \"Between April 30, 2010, and March 22, 2011, 1052 patients were screened, 760 patients were randomised to receive regorafenib (n=505) or placebo (n=255), and 753 patients initiated treatment (regorafenib n=500; placebo n=253; population for safety analyses).\"; TITLE: \"Regorafenib monotherapy for previously treated metastatic colorectal cancer (CORRECT): an international, multicentre, randomised, placebo-controlled, phase 3 trial.\"",
      "intervention (160, 505): PubMed abstract PMID 23177514, METHODS: \"Patients with documented metastatic colorectal cancer and progression during or within 3 months after the last standard therapy were randomised (in a 2:1 ratio; by computer-generated randomisation list and interactive voice response system; preallocated block design (block size six); stratified by previous treatment with VEGF-targeting drugs, time from diagnosis of metastatic disease, and geographical region) to receive best supportive care plus oral regorafenib 160 mg or placebo once daily, for the first 3 weeks of each 4 week cycle.\"; FINDINGS: \"Between April 30, 2010, and March 22, 2011, 1052 patients were screened, 760 patients were randomised to receive regorafenib (n=505) or placebo (n=255), and 753 patients initiated treatment (regorafenib n=500; placebo n=253; population for safety analyses).\"",
      "comparator (255): PubMed abstract PMID 23177514, FINDINGS: \"Between April 30, 2010, and March 22, 2011, 1052 patients were screened, 760 patients were randomised to receive regorafenib (n=505) or placebo (n=255), and 753 patients initiated treatment (regorafenib n=500; placebo n=253; population for safety analyses).\"",
      "primaryResult (6.4, 5.0, 0.77, 95, 0.64, 0.94, 0.0052): PubMed abstract PMID 23177514, FINDINGS: \"Median overall survival was 6·4 months in the regorafenib group versus 5·0 months in the placebo group (hazard ratio 0·77; 95% CI 0·64-0·94; one-sided p=0·0052).\"",
      "safety (93, 61, 3, 17, 10, 7, 6): PubMed abstract PMID 23177514, FINDINGS: \"Treatment-related adverse events occurred in 465 (93%) patients assigned regorafenib and in 154 (61%) of those assigned placebo.\"; TITLE: \"Regorafenib monotherapy for previously treated metastatic colorectal cancer (CORRECT): an international, multicentre, randomised, placebo-controlled, phase 3 trial.\"; FINDINGS: \"The most common adverse events of grade three or higher related to regorafenib were hand-foot skin reaction (83 patients, 17%), fatigue (48, 10%), diarrhoea (36, 7%), hypertension (36, 7%), and rash or desquamation (29, 6%).\"",
      "takeaway (6.4, 5.0, 0.77, 3, 17): PubMed abstract PMID 23177514, FINDINGS: \"Median overall survival was 6·4 months in the regorafenib group versus 5·0 months in the placebo group (hazard ratio 0·77; 95% CI 0·64-0·94; one-sided p=0·0052).\"; TITLE: \"Regorafenib monotherapy for previously treated metastatic colorectal cancer (CORRECT): an international, multicentre, randomised, placebo-controlled, phase 3 trial.\"; FINDINGS: \"The most common adverse events of grade three or higher related to regorafenib were hand-foot skin reaction (83 patients, 17%), fatigue (48, 10%), diarrhoea (36, 7%), hypertension (36, 7%), and rash or desquamation (29, 6%).\"",
      "limitations (6.4, 5.0, 93): PubMed abstract PMID 23177514, FINDINGS: \"Median overall survival was 6·4 months in the regorafenib group versus 5·0 months in the placebo group (hazard ratio 0·77; 95% CI 0·64-0·94; one-sided p=0·0052).\"; FINDINGS: \"Treatment-related adverse events occurred in 465 (93%) patients assigned regorafenib and in 154 (61%) of those assigned placebo.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "prevail",
    "placeholder": false,
    "acronym": "PREVAIL",
    "year": 2014,
    "yearLabel": "2014",
    "topic": "prostate",
    "status": "published",
    "title": "Enzalutamide in metastatic prostate cancer before chemotherapy",
    "citation": "Beer TM, Armstrong AJ, Rathkopf DE, and others. Enzalutamide in metastatic prostate cancer before chemotherapy. New England Journal of Medicine. 2014;371(5):424-433.",
    "pmid": "24881730",
    "doi": "10.1056/NEJMoa1405095",
    "design": "Double-blind, placebo-controlled phase 3 randomized trial. Coprimary end points were radiographic progression-free survival and overall survival. The study was stopped after a planned interim analysis at 540 deaths.",
    "population": "1717 men with metastatic prostate cancer that had progressed despite androgen-deprivation therapy and who had not received chemotherapy.",
    "intervention": "Enzalutamide 160 mg once daily.",
    "comparator": "Placebo once daily.",
    "primaryResult": "Radiographic progression-free survival at 12 months was 65% with enzalutamide versus 14% with placebo (hazard ratio 0.19; 95% CI 0.15 to 0.23; P<0.001). At data cutoff, 72% versus 63% were alive (hazard ratio for death 0.71; 95% CI 0.60 to 0.84; P<0.001).",
    "secondaryResults": "Enzalutamide delayed initiation of cytotoxic chemotherapy (hazard ratio 0.35), the first skeletal-related event (hazard ratio 0.72), and PSA progression (hazard ratio 0.17). Soft-tissue response was 59% versus 5%, and PSA decline of at least 50% was 78% versus 3% (P<0.001 for all).",
    "safety": "Fatigue and hypertension were the most common clinically relevant adverse events with enzalutamide.",
    "takeaway": "In chemotherapy-naive metastatic prostate cancer that had progressed despite androgen-deprivation therapy, enzalutamide reduced the risk of radiographic progression (hazard ratio 0.19) and death (hazard ratio 0.71) and delayed chemotherapy compared with placebo.",
    "limitations": "Interim analysis. The abstract does not give median overall survival or adverse event rates, and it does not use the term castration-resistant; it describes disease that had progressed despite androgen-deprivation therapy.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "24881730",
        "doi": "10.1056/NEJMoa1405095",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 540): PubMed abstract PMID 24881730, METHODS: \"In this double-blind, phase 3 study, we randomly assigned 1717 patients to receive either enzalutamide (at a dose of 160 mg) or placebo once daily.\"; RESULTS: \"The study was stopped after a planned interim analysis, conducted when 540 deaths had been reported, showed a benefit of the active treatment.\"",
      "population (1717): PubMed abstract PMID 24881730, METHODS: \"In this double-blind, phase 3 study, we randomly assigned 1717 patients to receive either enzalutamide (at a dose of 160 mg) or placebo once daily.\"",
      "intervention (160): PubMed abstract PMID 24881730, METHODS: \"In this double-blind, phase 3 study, we randomly assigned 1717 patients to receive either enzalutamide (at a dose of 160 mg) or placebo once daily.\"",
      "primaryResult (12, 65, 14, 0.19, 95, 0.15, 0.23, 0.001, 72, 63, 0.71, 0.60, 0.84): PubMed abstract PMID 24881730, RESULTS: \"The rate of radiographic progression-free survival at 12 months was 65% among patients treated with enzalutamide, as compared with 14% among patients receiving placebo (81% risk reduction; hazard ratio in the enzalutamide group, 0.19; 95% confidence interval [CI], 0.15 to 0.23;\"; RESULTS: \"P<0.001).\"; RESULTS: \"A total of 626 patients (72%) in the enzalutamide group, as compared with 532 patients (63%) in the placebo group, were alive at the data-cutoff date (29% reduction in the risk of death; hazard ratio, 0.71; 95% CI, 0.60 to 0.84;\"",
      "secondaryResults (0.35, 0.72, 0.17, 59, 5, 50, 78, 3, 0.001): PubMed abstract PMID 24881730, RESULTS: \"The benefit of enzalutamide was shown with respect to all secondary end points, including the time until the initiation of cytotoxic chemotherapy (hazard ratio, 0.35), the time until the first skeletal-related event (hazard ratio, 0.72), a complete or partial soft-tissue response (59% vs. 5%), the time until prostate-specific antigen (PSA) progression (hazard ratio, 0.17), and a rate of decline of at least 50% in PSA (78% vs. 3%) (P<0.001 for all comparisons).\"",
      "takeaway (0.19, 0.71): PubMed abstract PMID 24881730, RESULTS: \"The rate of radiographic progression-free survival at 12 months was 65% among patients treated with enzalutamide, as compared with 14% among patients receiving placebo (81% risk reduction; hazard ratio in the enzalutamide group, 0.19; 95% confidence interval [CI], 0.15 to 0.23;\"; RESULTS: \"A total of 626 patients (72%) in the enzalutamide group, as compared with 532 patients (63%) in the placebo group, were alive at the data-cutoff date (29% reduction in the risk of death; hazard ratio, 0.71; 95% CI, 0.60 to 0.84;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "tribe",
    "placeholder": false,
    "acronym": "TRIBE",
    "year": 2014,
    "yearLabel": "2014",
    "topic": "colorectal",
    "status": "published",
    "title": "Initial therapy with FOLFOXIRI and bevacizumab for metastatic colorectal cancer",
    "citation": "Loupakis F, Cremolini C, Masi G, and others. Initial therapy with FOLFOXIRI and bevacizumab for metastatic colorectal cancer. New England Journal of Medicine. 2014;371(17):1609-1618.",
    "pmid": "25337750",
    "doi": "10.1056/NEJMoa1403108",
    "design": "Randomized trial. Up to 12 cycles of induction were followed by fluorouracil plus bevacizumab until progression. The primary end point was progression-free survival.",
    "population": "508 patients with untreated metastatic colorectal cancer.",
    "intervention": "FOLFOXIRI plus bevacizumab.",
    "comparator": "FOLFIRI plus bevacizumab.",
    "primaryResult": "Median progression-free survival was 12.1 months with FOLFOXIRI plus bevacizumab versus 9.7 months with FOLFIRI plus bevacizumab (hazard ratio 0.75; 95% CI 0.62 to 0.90; P=0.003).",
    "secondaryResults": "Objective response was 65% versus 53% (P=0.006). Overall survival was longer but not significantly so (31.0 versus 25.8 months; hazard ratio 0.79; 95% CI 0.63 to 1.00; P=0.054).",
    "safety": "Grade 3 or 4 neurotoxicity, stomatitis, diarrhea, and neutropenia were significantly more frequent with FOLFOXIRI plus bevacizumab.",
    "takeaway": "As initial therapy for metastatic colorectal cancer, FOLFOXIRI plus bevacizumab improved progression-free survival over FOLFIRI plus bevacizumab (12.1 versus 9.7 months; hazard ratio 0.75), with more neurotoxicity, stomatitis, diarrhea, and neutropenia.",
    "limitations": "Overall survival did not reach significance in this report. The abstract does not give adverse event rates.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "25337750",
        "doi": "10.1056/NEJMoa1403108",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (12): PubMed abstract PMID 25337750, METHODS: \"Up to 12 cycles of treatment were administered, followed by fluorouracil plus bevacizumab until disease progression.\"",
      "population (508): PubMed abstract PMID 25337750, METHODS: \"We randomly assigned 508 patients with untreated metastatic colorectal cancer to receive either FOLFIRI plus bevacizumab (control group) or FOLFOXIRI plus bevacizumab (experimental group).\"",
      "primaryResult (12.1, 9.7, 0.75, 95, 0.62, 0.90, 0.003): PubMed abstract PMID 25337750, RESULTS: \"The median progression-free survival was 12.1 months in the experimental group, as compared with 9.7 months in the control group (hazard ratio for progression, 0.75; 95% confidence interval [CI], 0.62 to 0.90;\"; RESULTS: \"P=0.003).\"",
      "secondaryResults (65, 53, 0.006, 31.0, 25.8, 0.79, 95, 0.63, 1.00, 0.054): PubMed abstract PMID 25337750, RESULTS: \"The objective response rate was 65% in the experimental group and 53% in the control group (P=0.006).\"; RESULTS: \"Overall survival was longer, but not significantly so, in the experimental group (31.0 vs. 25.8 months; hazard ratio for death, 0.79; 95% CI, 0.63 to 1.00;\"; RESULTS: \"P=0.054).\"",
      "safety (3, 4): PubMed abstract PMID 25337750, RESULTS: \"The incidences of grade 3 or 4 neurotoxicity, stomatitis, diarrhea, and neutropenia were significantly higher in the experimental group.\"",
      "takeaway (12.1, 9.7, 0.75): PubMed abstract PMID 25337750, RESULTS: \"The median progression-free survival was 12.1 months in the experimental group, as compared with 9.7 months in the control group (hazard ratio for progression, 0.75; 95% confidence interval [CI], 0.62 to 0.90;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "chaarted",
    "placeholder": false,
    "acronym": "CHAARTED",
    "year": 2015,
    "yearLabel": "2015",
    "topic": "prostate",
    "status": "published",
    "title": "Chemohormonal Therapy in Metastatic Hormone-Sensitive Prostate Cancer",
    "citation": "Sweeney CJ, Chen YH, Carducci M, and others. Chemohormonal Therapy in Metastatic Hormone-Sensitive Prostate Cancer. New England Journal of Medicine. 2015;373(8):737-746.",
    "pmid": "26244877",
    "doi": "10.1056/NEJMoa1503747",
    "design": "Randomized trial. The primary objective tested whether docetaxel added early to androgen-deprivation therapy (ADT) would lengthen median overall survival by 33.3%. Median follow-up was 28.9 months.",
    "population": "790 men (median age 63 years) with metastatic, hormone-sensitive prostate cancer.",
    "intervention": "ADT plus docetaxel 75 mg per square meter every 3 weeks for six cycles.",
    "comparator": "ADT alone.",
    "primaryResult": "Median overall survival was 57.6 months with ADT plus docetaxel versus 44.0 months with ADT alone, 13.6 months longer (hazard ratio for death 0.61; 95% CI 0.47 to 0.80; P<0.001).",
    "secondaryResults": "Median time to biochemical, symptomatic, or radiographic progression was 20.2 versus 11.7 months (hazard ratio 0.61; 95% CI 0.51 to 0.72; P<0.001). PSA below 0.2 ng per milliliter at 12 months occurred in 27.7% versus 16.8% (P<0.001).",
    "safety": "With ADT plus docetaxel, grade 3 or 4 febrile neutropenia occurred in 6.2%, grade 3 or 4 infection with neutropenia in 2.3%, and grade 3 sensory neuropathy and grade 3 motor neuropathy each in 0.5%.",
    "takeaway": "In metastatic hormone-sensitive prostate cancer, six cycles of docetaxel started with ADT lengthened median overall survival by 13.6 months over ADT alone (57.6 versus 44.0 months; hazard ratio 0.61), with grade 3 or 4 febrile neutropenia in 6.2%.",
    "limitations": "Open-label status and volume-of-disease subgroups are not described in this abstract. Median follow-up was 28.9 months.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "26244877",
        "doi": "10.1056/NEJMoa1503747",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (33.3, 28.9): PubMed abstract PMID 26244877, METHODS: \"The primary objective was to test the hypothesis that the median overall survival would be 33.3% longer among patients receiving docetaxel added to ADT early during therapy than among patients receiving ADT alone.\"; RESULTS: \"After a median follow-up of 28.9 months, the median overall survival was 13.6 months longer with ADT plus docetaxel (combination therapy) than with ADT alone (57.6 months vs. 44.0 months; hazard ratio for death in the combination group, 0.61; 95% confidence interval [CI], 0.47 to 0.80;\"",
      "population (790, 63): PubMed abstract PMID 26244877, RESULTS: \"A total of 790 patients (median age, 63 years) underwent randomization.\"",
      "intervention (75, 3): PubMed abstract PMID 26244877, METHODS: \"We assigned men with metastatic, hormone-sensitive prostate cancer to receive either ADT plus docetaxel (at a dose of 75 mg per square meter of body-surface area every 3 weeks for six cycles) or ADT alone.\"",
      "primaryResult (57.6, 44.0, 13.6, 0.61, 95, 0.47, 0.80, 0.001): PubMed abstract PMID 26244877, RESULTS: \"After a median follow-up of 28.9 months, the median overall survival was 13.6 months longer with ADT plus docetaxel (combination therapy) than with ADT alone (57.6 months vs. 44.0 months; hazard ratio for death in the combination group, 0.61; 95% confidence interval [CI], 0.47 to 0.80;\"; RESULTS: \"P<0.001).\"",
      "secondaryResults (20.2, 11.7, 0.61, 95, 0.51, 0.72, 0.001, 0.2, 12, 27.7, 16.8): PubMed abstract PMID 26244877, RESULTS: \"The median time to biochemical, symptomatic, or radiographic progression was 20.2 months in the combination group, as compared with 11.7 months in the ADT-alone group (hazard ratio, 0.61; 95% CI, 0.51 to 0.72;\"; RESULTS: \"The rate of a prostate-specific antigen level of less than 0.2 ng per milliliter at 12 months was 27.7% in the combination group versus 16.8% in the ADT-alone group (P<0.001).\"",
      "safety (3, 4, 6.2, 2.3, 0.5): PubMed abstract PMID 26244877, RESULTS: \"In the combination group, the rate of grade 3 or 4 febrile neutropenia was 6.2%, the rate of grade 3 or 4 infection with neutropenia was 2.3%, and the rate of grade 3 sensory neuropathy and of grade 3 motor neuropathy was 0.5%.\"",
      "takeaway (13.6, 57.6, 44.0, 0.61, 3, 4, 6.2): PubMed abstract PMID 26244877, RESULTS: \"After a median follow-up of 28.9 months, the median overall survival was 13.6 months longer with ADT plus docetaxel (combination therapy) than with ADT alone (57.6 months vs. 44.0 months; hazard ratio for death in the combination group, 0.61; 95% confidence interval [CI], 0.47 to 0.80;\"; RESULTS: \"In the combination group, the rate of grade 3 or 4 febrile neutropenia was 6.2%, the rate of grade 3 or 4 infection with neutropenia was 2.3%, and the rate of grade 3 sensory neuropathy and of grade 3 motor neuropathy was 0.5%.\"",
      "limitations (28.9): PubMed abstract PMID 26244877, RESULTS: \"After a median follow-up of 28.9 months, the median overall survival was 13.6 months longer with ADT plus docetaxel (combination therapy) than with ADT alone (57.6 months vs. 44.0 months; hazard ratio for death in the combination group, 0.61; 95% confidence interval [CI], 0.47 to 0.80;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "recourse",
    "placeholder": false,
    "acronym": "RECOURSE",
    "year": 2015,
    "yearLabel": "2015",
    "topic": "colorectal",
    "status": "published",
    "title": "Randomized trial of TAS-102 for refractory metastatic colorectal cancer",
    "citation": "Mayer RJ, Van Cutsem E, Falcone A, and others. Randomized trial of TAS-102 for refractory metastatic colorectal cancer. New England Journal of Medicine. 2015;372(20):1909-1919.",
    "pmid": "25970050",
    "doi": "10.1056/NEJMoa1414325",
    "design": "Double-blind, placebo-controlled randomized trial (2:1). The primary end point was overall survival.",
    "population": "800 patients with refractory metastatic colorectal cancer.",
    "intervention": "TAS-102 (trifluridine-tipiracil).",
    "comparator": "Placebo.",
    "primaryResult": "Median overall survival was 7.1 months with TAS-102 versus 5.3 months with placebo (hazard ratio for death 0.68; 95% CI 0.58 to 0.81; P<0.001).",
    "secondaryResults": "Median time to worsening ECOG performance status (from 0 or 1 to 2 or more) was 5.7 versus 4.0 months (hazard ratio 0.66; 95% CI 0.56 to 0.78; P<0.001).",
    "safety": "The most frequent clinically significant adverse events with TAS-102 were neutropenia (38%) and leukopenia (21%); 4% had febrile neutropenia, and one death related to TAS-102 was reported.",
    "takeaway": "In refractory metastatic colorectal cancer, TAS-102 improved median overall survival over placebo (7.1 versus 5.3 months; hazard ratio 0.68), with neutropenia in 38%.",
    "limitations": "Placebo comparator in a refractory population. The abstract does not detail prior therapies.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "25970050",
        "doi": "10.1056/NEJMoa1414325",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (2, 1): PubMed abstract PMID 25970050, METHODS: \"In this double-blind study, we randomly assigned 800 patients, in a 2:1 ratio, to receive TAS-102 or placebo.\"",
      "population (800): PubMed abstract PMID 25970050, METHODS: \"In this double-blind study, we randomly assigned 800 patients, in a 2:1 ratio, to receive TAS-102 or placebo.\"",
      "intervention (102): PubMed abstract PMID 25970050, TITLE: \"Randomized trial of TAS-102 for refractory metastatic colorectal cancer.\"",
      "primaryResult (7.1, 102, 5.3, 0.68, 95, 0.58, 0.81, 0.001): PubMed abstract PMID 25970050, RESULTS: \"The median overall survival improved from 5.3 months with placebo to 7.1 months with TAS-102, and the hazard ratio for death in the TAS-102 group versus the placebo group was 0.68 (95% confidence interval [CI], 0.58 to 0.81;\"; RESULTS: \"P<0.001).\"",
      "secondaryResults (0, 1, 2, 5.7, 4.0, 0.66, 95, 0.56, 0.78, 0.001): PubMed abstract PMID 25970050, RESULTS: \"The median time to worsening performance status (a change in Eastern Cooperative Oncology Group performance status [on a scale of 0 to 5, with 0 indicating no symptoms and higher numbers indicating increasing degrees of disability] from 0 or 1 to 2 or more) was 5.7 months with TAS-102 versus 4.0 months with placebo (hazard ratio, 0.66; 95% CI, 0.56 to 0.78;\"; RESULTS: \"P<0.001).\"",
      "safety (102, 38, 21, 4): PubMed abstract PMID 25970050, RESULTS: \"The most frequently observed clinically significant adverse events associated with TAS-102 were neutropenia, which occurred in 38% of those treated, and leukopenia, which occurred in 21%; 4% of the patients who received TAS-102 had febrile neutropenia, and one death related to TAS-102 was reported.\"",
      "takeaway (102, 7.1, 5.3, 0.68, 38): PubMed abstract PMID 25970050, RESULTS: \"The median overall survival improved from 5.3 months with placebo to 7.1 months with TAS-102, and the hazard ratio for death in the TAS-102 group versus the placebo group was 0.68 (95% confidence interval [CI], 0.58 to 0.81;\"; RESULTS: \"The most frequently observed clinically significant adverse events associated with TAS-102 were neutropenia, which occurred in 38% of those treated, and leukopenia, which occurred in 21%; 4% of the patients who received TAS-102 had febrile neutropenia, and one death related to TAS-102 was reported.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "paloma-2",
    "placeholder": false,
    "acronym": "PALOMA-2",
    "year": 2016,
    "yearLabel": "2016",
    "topic": "breast",
    "status": "published",
    "title": "Palbociclib and Letrozole in Advanced Breast Cancer",
    "citation": "Finn RS, Martin M, Rugo HS, and others. Palbociclib and Letrozole in Advanced Breast Cancer. New England Journal of Medicine. 2016;375(20):1925-1936.",
    "pmid": "27959613",
    "doi": "10.1056/NEJMoa1607303",
    "design": "Double-blind randomized trial with 2:1 allocation. The primary end point was investigator-assessed progression-free survival.",
    "population": "666 postmenopausal women with ER-positive, HER2-negative breast cancer and no prior treatment for advanced disease.",
    "intervention": "Palbociclib plus letrozole.",
    "comparator": "Placebo plus letrozole.",
    "primaryResult": "Median progression-free survival was 24.8 months with palbociclib-letrozole versus 14.5 months with placebo-letrozole (hazard ratio for progression or death 0.58; 95% CI 0.46 to 0.72; P<0.001).",
    "safety": "Grade 3 or 4 neutropenia occurred in 66.4% versus 1.4%, leukopenia in 24.8% versus 0%, anemia in 5.4% versus 1.8%, and fatigue in 1.8% versus 0.5%. Febrile neutropenia occurred in 1.8% with palbociclib-letrozole and in none with placebo-letrozole. Discontinuation for adverse events occurred in 9.7% versus 5.9%.",
    "takeaway": "As first-line therapy for ER-positive, HER2-negative advanced breast cancer, adding palbociclib to letrozole prolonged median progression-free survival (24.8 versus 14.5 months; hazard ratio 0.58), with grade 3 or 4 neutropenia in 66.4% but febrile neutropenia in 1.8%.",
    "limitations": "Overall survival is not reported in this abstract. Postmenopausal women only.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "27959613",
        "doi": "10.1056/NEJMoa1607303",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (2, 1): PubMed abstract PMID 27959613, METHODS: \"In this double-blind study, we randomly assigned, in a 2:1 ratio, 666 postmenopausal women with ER-positive, HER2-negative breast cancer, who had not had prior treatment for advanced disease, to receive palbociclib plus letrozole or placebo plus letrozole.\"",
      "population (666): PubMed abstract PMID 27959613, METHODS: \"In this double-blind study, we randomly assigned, in a 2:1 ratio, 666 postmenopausal women with ER-positive, HER2-negative breast cancer, who had not had prior treatment for advanced disease, to receive palbociclib plus letrozole or placebo plus letrozole.\"",
      "primaryResult (24.8, 14.5, 0.58, 95, 0.46, 0.72, 0.001): PubMed abstract PMID 27959613, RESULTS: \"The median progression-free survival was 24.8 months (95% confidence interval [CI], 22.1 to not estimable) in the palbociclib-letrozole group, as compared with 14.5 months (95% CI, 12.9 to 17.1) in the placebo-letrozole group (hazard ratio for disease progression or death, 0.58; 95% CI, 0.46 to 0.72;\"; RESULTS: \"P<0.001).\"",
      "safety (3, 4, 66.4, 1.4, 24.8, 0, 5.4, 1.8, 0.5, 9.7, 5.9): PubMed abstract PMID 27959613, RESULTS: \"The most common grade 3 or 4 adverse events were neutropenia (occurring in 66.4% of the patients in the palbociclib-letrozole group vs. 1.4% in the placebo-letrozole group), leukopenia (24.8% vs. 0%), anemia (5.4% vs. 1.8%), and fatigue (1.8% vs. 0.5%).\"; RESULTS: \"Permanent discontinuation of any study treatment as a result of adverse events occurred in 43 patients (9.7%) in the palbociclib-letrozole group and in 13 patients (5.9%) in the placebo-letrozole group.\"",
      "takeaway (24.8, 14.5, 0.58, 3, 4, 66.4, 1.8): PubMed abstract PMID 27959613, RESULTS: \"The most common grade 3 or 4 adverse events were neutropenia (occurring in 66.4% of the patients in the palbociclib-letrozole group vs. 1.4% in the placebo-letrozole group), leukopenia (24.8% vs. 0%), anemia (5.4% vs. 1.8%), and fatigue (1.8% vs. 0.5%).\"; RESULTS: \"The median progression-free survival was 24.8 months (95% confidence interval [CI], 22.1 to not estimable) in the palbociclib-letrozole group, as compared with 14.5 months (95% CI, 12.9 to 17.1) in the placebo-letrozole group (hazard ratio for disease progression or death, 0.58; 95% CI, 0.46 to 0.72;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "alex",
    "placeholder": false,
    "acronym": "ALEX",
    "year": 2017,
    "yearLabel": "2017",
    "topic": "lung",
    "status": "published",
    "title": "Alectinib versus Crizotinib in Untreated ALK-Positive Non-Small-Cell Lung Cancer",
    "citation": "Peters S, Camidge DR, Shaw AT, and others. Alectinib versus Crizotinib in Untreated ALK-Positive Non-Small-Cell Lung Cancer. New England Journal of Medicine. 2017;377(9):829-838.",
    "pmid": "28586279",
    "doi": "10.1056/NEJMoa1704795",
    "design": "Randomized, open-label, phase 3 trial. The primary end point was investigator-assessed progression-free survival. Median follow-up was 17.6 months (crizotinib) and 18.6 months (alectinib).",
    "population": "303 patients with previously untreated, advanced ALK-positive NSCLC.",
    "intervention": "Alectinib 600 mg twice daily (152 patients).",
    "comparator": "Crizotinib 250 mg twice daily (151 patients).",
    "primaryResult": "Progression or death occurred in 41% with alectinib and 68% with crizotinib. Twelve-month event-free survival was 68.4% versus 48.7% (hazard ratio for progression or death 0.47; 95% CI 0.34 to 0.65; P<0.001); median progression-free survival with alectinib was not reached.",
    "secondaryResults": "Central nervous system progression occurred in 12% with alectinib and 45% with crizotinib (cause-specific hazard ratio 0.16; 95% CI 0.10 to 0.28; P<0.001). Response rates were 82.9% and 75.5% (P=0.09).",
    "safety": "Grade 3 to 5 adverse events were less frequent with alectinib (41% versus 50%).",
    "takeaway": "For untreated ALK-positive advanced NSCLC, alectinib improved progression-free survival over crizotinib (hazard ratio 0.47) and reduced central nervous system progression (12% versus 45%), with fewer grade 3 to 5 adverse events.",
    "limitations": "Open-label design with a median follow-up under two years; overall survival is not reported in the abstract.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "28586279",
        "doi": "10.1056/NEJMoa1704795",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 17.6, 18.6): PubMed abstract PMID 28586279, METHODS: \"In a randomized, open-label, phase 3 trial, we randomly assigned 303 patients with previously untreated, advanced ALK-positive NSCLC to receive either alectinib (600 mg twice daily) or crizotinib (250 mg twice daily).\"; RESULTS: \"During a median follow-up of 17.6 months (crizotinib) and 18.6 months (alectinib), an event of disease progression or death occurred in 62 of 152 patients (41%) in the alectinib group and 102 of 151 patients (68%) in the crizotinib group.\"",
      "population (303): PubMed abstract PMID 28586279, METHODS: \"In a randomized, open-label, phase 3 trial, we randomly assigned 303 patients with previously untreated, advanced ALK-positive NSCLC to receive either alectinib (600 mg twice daily) or crizotinib (250 mg twice daily).\"",
      "intervention (600, 152): PubMed abstract PMID 28586279, METHODS: \"In a randomized, open-label, phase 3 trial, we randomly assigned 303 patients with previously untreated, advanced ALK-positive NSCLC to receive either alectinib (600 mg twice daily) or crizotinib (250 mg twice daily).\"; RESULTS: \"During a median follow-up of 17.6 months (crizotinib) and 18.6 months (alectinib), an event of disease progression or death occurred in 62 of 152 patients (41%) in the alectinib group and 102 of 151 patients (68%) in the crizotinib group.\"",
      "comparator (250, 151): PubMed abstract PMID 28586279, METHODS: \"In a randomized, open-label, phase 3 trial, we randomly assigned 303 patients with previously untreated, advanced ALK-positive NSCLC to receive either alectinib (600 mg twice daily) or crizotinib (250 mg twice daily).\"; RESULTS: \"During a median follow-up of 17.6 months (crizotinib) and 18.6 months (alectinib), an event of disease progression or death occurred in 62 of 152 patients (41%) in the alectinib group and 102 of 151 patients (68%) in the crizotinib group.\"",
      "primaryResult (41, 68, 68.4, 48.7, 0.47, 95, 0.34, 0.65, 0.001): PubMed abstract PMID 28586279, RESULTS: \"During a median follow-up of 17.6 months (crizotinib) and 18.6 months (alectinib), an event of disease progression or death occurred in 62 of 152 patients (41%) in the alectinib group and 102 of 151 patients (68%) in the crizotinib group.\"; RESULTS: \"The rate of investigator-assessed progression-free survival was significantly higher with alectinib than with crizotinib (12-month event-free survival rate, 68.4% [95% confidence interval (CI), 61.0 to 75.9] with alectinib vs. 48.7% [95% CI, 40.4 to 56.9] with crizotinib; hazard ratio for disease progression or death, 0.47 [95% CI, 0.34 to 0.65];\"; RESULTS: \"P<0.001); the median progression-free survival with alectinib was not reached.\"",
      "secondaryResults (12, 45, 0.16, 95, 0.10, 0.28, 0.001, 82.9, 75.5, 0.09): PubMed abstract PMID 28586279, RESULTS: \"A total of 18 patients (12%) in the alectinib group had an event of CNS progression, as compared with 68 patients (45%) in the crizotinib group (cause-specific hazard ratio, 0.16; 95% CI, 0.10 to 0.28;\"; RESULTS: \"P<0.001); the median progression-free survival with alectinib was not reached.\"; RESULTS: \"A response occurred in 126 patients in the alectinib group (response rate, 82.9%; 95% CI, 76.0 to 88.5) and in 114 patients in the crizotinib group (response rate, 75.5%; 95% CI, 67.8 to 82.1) (P=0.09).\"",
      "safety (3, 5, 41, 50): PubMed abstract PMID 28586279, RESULTS: \"Grade 3 to 5 adverse events were less frequent with alectinib (41% vs. 50% with crizotinib).\"",
      "takeaway (0.47, 12, 45, 3, 5): PubMed abstract PMID 28586279, RESULTS: \"The rate of investigator-assessed progression-free survival was significantly higher with alectinib than with crizotinib (12-month event-free survival rate, 68.4% [95% confidence interval (CI), 61.0 to 75.9] with alectinib vs. 48.7% [95% CI, 40.4 to 56.9] with crizotinib; hazard ratio for disease progression or death, 0.47 [95% CI, 0.34 to 0.65];\"; RESULTS: \"A total of 18 patients (12%) in the alectinib group had an event of CNS progression, as compared with 68 patients (45%) in the crizotinib group (cause-specific hazard ratio, 0.16; 95% CI, 0.10 to 0.28;\"; RESULTS: \"Grade 3 to 5 adverse events were less frequent with alectinib (41% vs. 50% with crizotinib).\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "calgb-80405",
    "placeholder": false,
    "acronym": "CALGB/SWOG 80405",
    "year": 2017,
    "yearLabel": "2017",
    "topic": "colorectal",
    "status": "published",
    "title": "Effect of First-Line Chemotherapy Combined With Cetuximab or Bevacizumab on Overall Survival in Patients With KRAS Wild-Type Advanced or Metastatic Colorectal Cancer: A Randomized Clinical Trial",
    "citation": "Venook AP, Niedzwiecki D, Lenz HJ, and others. Effect of First-Line Chemotherapy Combined With Cetuximab or Bevacizumab on Overall Survival in Patients With KRAS Wild-Type Advanced or Metastatic Colorectal Cancer: A Randomized Clinical Trial. JAMA. 2017;317(23):2392-2401.",
    "pmid": "28632865",
    "doi": "10.1001/jama.2017.7105",
    "design": "Randomized clinical trial in the National Clinical Trials Network (United States and Canada), November 2005 to March 2012. The chemotherapy backbone (mFOLFOX6 or FOLFIRI) was chosen by physician and patient before randomization of the biologic. The primary end point was overall survival.",
    "population": "1137 patients (median age 59 years; 39% women) with previously untreated KRAS wild-type advanced or metastatic colorectal cancer; 1074 (94%) met eligibility criteria.",
    "intervention": "Cetuximab plus mFOLFOX6 or FOLFIRI (578 patients).",
    "comparator": "Bevacizumab plus mFOLFOX6 or FOLFIRI (559 patients).",
    "primaryResult": "Median overall survival was 30.0 months with cetuximab and 29.0 months with bevacizumab (stratified hazard ratio 0.88; 95% CI 0.77 to 1.01; P = .08).",
    "secondaryResults": "Median progression-free survival was 10.5 versus 10.6 months (hazard ratio 0.95; 95% CI 0.84 to 1.08; P = .45). Response rates were 59.6% versus 55.2% (P = .13). Median follow-up for 263 surviving patients was 47.4 months.",
    "safety": "The abstract does not report adverse event rates.",
    "takeaway": "In KRAS wild-type metastatic colorectal cancer, choosing cetuximab or bevacizumab as the first-line biologic with chemotherapy made no significant difference in overall survival (30.0 versus 29.0 months).",
    "limitations": "Eligibility used KRAS status; the abstract does not address other RAS mutations or tumor sidedness. The chemotherapy backbone was not randomized.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "28632865",
        "doi": "10.1001/jama.2017.7105",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (2005, 2012): PubMed abstract PMID 28632865, DESIGN, SETTING, AND PARTICIPANTS: \"Patients (≥18 years) enrolled at community and academic centers throughout the National Clinical Trials Network in the United States and Canada (November 2005-March 2012) with previously untreated advanced or metastatic colorectal cancer whose tumors were KRAS wt chose to take either the mFOLFOX6 regimen or the FOLFIRI regimen as chemotherapy and were randomized to receive either cetuximab (n = 578) or bevacizumab (n = 559).\"",
      "population (1137, 59, 39, 1074, 94): PubMed abstract PMID 28632865, RESULTS: \"Among 1137 patients (median age, 59 years; 440 [39%] women), 1074 (94%) of patients met eligibility criteria.\"",
      "intervention (578): PubMed abstract PMID 28632865, DESIGN, SETTING, AND PARTICIPANTS: \"Patients (≥18 years) enrolled at community and academic centers throughout the National Clinical Trials Network in the United States and Canada (November 2005-March 2012) with previously untreated advanced or metastatic colorectal cancer whose tumors were KRAS wt chose to take either the mFOLFOX6 regimen or the FOLFIRI regimen as chemotherapy and were randomized to receive either cetuximab (n = 578) or bevacizumab (n = 559).\"",
      "comparator (559): PubMed abstract PMID 28632865, DESIGN, SETTING, AND PARTICIPANTS: \"Patients (≥18 years) enrolled at community and academic centers throughout the National Clinical Trials Network in the United States and Canada (November 2005-March 2012) with previously untreated advanced or metastatic colorectal cancer whose tumors were KRAS wt chose to take either the mFOLFOX6 regimen or the FOLFIRI regimen as chemotherapy and were randomized to receive either cetuximab (n = 578) or bevacizumab (n = 559).\"",
      "primaryResult (30.0, 29.0, 0.88, 95, 0.77, 1.01, .08): PubMed abstract PMID 28632865, RESULTS: \"The median overall survival was 30.0 months in the cetuximab-chemotherapy group and 29.0 months in the bevacizumab-chemotherapy group with a stratified hazard ratio (HR) of 0.88 (95% CI, 0.77-1.01;\"; RESULTS: \"P = .08).\"",
      "secondaryResults (10.5, 10.6, 0.95, 95, 0.84, 1.08, .45, 59.6, 55.2, .13, 263, 47.4): PubMed abstract PMID 28632865, RESULTS: \"The median progression-free survival was 10.5 months in the cetuximab-chemotherapy group and 10.6 months in the bevacizumab-chemotherapy group with a stratified HR of 0.95 (95% CI, 0.84-1.08;\"; RESULTS: \"P = .45).\"; RESULTS: \"Response rates were not significantly different, 59.6% vs 55.2% for cetuximab and bevacizumab, respectively (difference, 4.4%, 95% CI, 1.0%-9.0%, P = .13).\"; RESULTS: \"As of December 15, 2015, median follow-up for 263 surviving patients was 47.4 months (range, 0-110.7 months), and 82% of patients (938 of 1137) experienced disease progression.\"",
      "takeaway (30.0, 29.0): PubMed abstract PMID 28632865, RESULTS: \"The median overall survival was 30.0 months in the cetuximab-chemotherapy group and 29.0 months in the bevacizumab-chemotherapy group with a stratified hazard ratio (HR) of 0.88 (95% CI, 0.77-1.01;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "pacific",
    "placeholder": false,
    "acronym": "PACIFIC",
    "year": 2017,
    "yearLabel": "2017",
    "topic": "lung",
    "status": "published",
    "title": "Durvalumab after Chemoradiotherapy in Stage III Non-Small-Cell Lung Cancer",
    "citation": "Antonia SJ, Villegas A, Daniel D, and others. Durvalumab after Chemoradiotherapy in Stage III Non-Small-Cell Lung Cancer. New England Journal of Medicine. 2017;377(20):1919-1929.",
    "pmid": "28885881",
    "doi": "10.1056/NEJMoa1709937",
    "design": "Phase 3, placebo-controlled randomized trial (2:1). Durvalumab or placebo was given every 2 weeks for up to 12 months, starting 1 to 42 days after chemoradiotherapy. The coprimary end points were progression-free survival by blinded independent central review and overall survival, which was unplanned for this interim analysis.",
    "population": "713 patients with stage III non-small-cell lung cancer who did not have disease progression after two or more cycles of platinum-based chemoradiotherapy; 709 received consolidation therapy.",
    "intervention": "Durvalumab 10 mg per kilogram intravenously every 2 weeks for up to 12 months (473 patients received consolidation therapy).",
    "comparator": "Placebo every 2 weeks for up to 12 months (236 patients received consolidation therapy).",
    "primaryResult": "Median progression-free survival from randomization was 16.8 months with durvalumab versus 5.6 months with placebo (stratified hazard ratio for progression or death 0.52; 95% CI 0.42 to 0.65; P<0.001). The 12-month progression-free survival rate was 55.9% versus 35.3%, and the 18-month rate was 44.2% versus 27.0%.",
    "secondaryResults": "The response rate was 28.4% versus 16.0% (P<0.001). 72.8% versus 46.8% of the patients had an ongoing response at 18 months. Median time to death or distant metastasis was 23.2 versus 14.6 months (P<0.001). Overall survival, a coprimary end point, was unplanned for this interim analysis and is not reported in the abstract.",
    "safety": "Grade 3 or 4 adverse events occurred in 29.9% with durvalumab and 26.1% with placebo; the most common was pneumonia (4.4% versus 3.8%). Discontinuation because of adverse events occurred in 15.4% versus 9.8%.",
    "takeaway": "After chemoradiotherapy for stage III NSCLC, consolidation durvalumab prolonged median progression-free survival over placebo (16.8 versus 5.6 months; hazard ratio 0.52), with similar rates of grade 3 or 4 adverse events.",
    "limitations": "Overall survival, a coprimary end point, was unplanned for this interim analysis and is not in the abstract. The abstract's duration-of-response line gives the percentage with an ongoing response at 18 months, not a median duration in months.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "28885881",
        "doi": "10.1056/NEJMoa1709937",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 2, 1, 12, 42): PubMed abstract PMID 28885881, BACKGROUND: \"This phase 3 study compared the anti-programmed death ligand 1 antibody durvalumab as consolidation therapy with placebo in patients with stage III NSCLC who did not have disease progression after two or more cycles of platinum-based chemoradiotherapy.\"; METHODS: \"We randomly assigned patients, in a 2:1 ratio, to receive durvalumab (at a dose of 10 mg per kilogram of body weight intravenously) or placebo every 2 weeks for up to 12 months.\"; METHODS: \"The study drug was administered 1 to 42 days after the patients had received chemoradiotherapy.\"",
      "population (713, 709): PubMed abstract PMID 28885881, RESULTS: \"Of 713 patients who underwent randomization, 709 received consolidation therapy (473 received durvalumab and 236 received placebo).\"",
      "intervention (10, 2, 12, 473): PubMed abstract PMID 28885881, METHODS: \"We randomly assigned patients, in a 2:1 ratio, to receive durvalumab (at a dose of 10 mg per kilogram of body weight intravenously) or placebo every 2 weeks for up to 12 months.\"; RESULTS: \"Of 713 patients who underwent randomization, 709 received consolidation therapy (473 received durvalumab and 236 received placebo).\"",
      "comparator (2, 12, 236): PubMed abstract PMID 28885881, METHODS: \"We randomly assigned patients, in a 2:1 ratio, to receive durvalumab (at a dose of 10 mg per kilogram of body weight intravenously) or placebo every 2 weeks for up to 12 months.\"; RESULTS: \"Of 713 patients who underwent randomization, 709 received consolidation therapy (473 received durvalumab and 236 received placebo).\"",
      "primaryResult (16.8, 5.6, 0.52, 95, 0.42, 0.65, 0.001, 12, 55.9, 35.3, 18, 44.2, 27.0): PubMed abstract PMID 28885881, RESULTS: \"The median progression-free survival from randomization was 16.8 months (95% confidence interval [CI], 13.0 to 18.1) with durvalumab versus 5.6 months (95% CI, 4.6 to 7.8) with placebo (stratified hazard ratio for disease progression or death, 0.52; 95% CI, 0.42 to 0.65;\"; RESULTS: \"P<0.001); the 12-month progression-free survival rate was 55.9% versus 35.3%, and the 18-month progression-free survival rate was 44.2% versus 27.0%.\"",
      "secondaryResults (28.4, 16.0, 0.001, 72.8, 46.8, 18, 23.2, 14.6): PubMed abstract PMID 28885881, RESULTS: \"The response rate was higher with durvalumab than with placebo (28.4% vs. 16.0%;\"; RESULTS: \"P<0.001), and the median duration of response was longer (72.8% vs. 46.8% of the patients had an ongoing response at 18 months).\"; RESULTS: \"The median time to death or distant metastasis was longer with durvalumab than with placebo (23.2 months vs. 14.6 months;\"",
      "safety (3, 4, 29.9, 26.1, 4.4, 3.8, 15.4, 9.8): PubMed abstract PMID 28885881, RESULTS: \"Grade 3 or 4 adverse events occurred in 29.9% of the patients who received durvalumab and 26.1% of those who received placebo; the most common adverse event of grade 3 or 4 was pneumonia (4.4% and 3.8%, respectively).\"; RESULTS: \"A total of 15.4% of patients in the durvalumab group and 9.8% of those in the placebo group discontinued the study drug because of adverse events.\"",
      "takeaway (16.8, 5.6, 0.52, 3, 4): PubMed abstract PMID 28885881, RESULTS: \"The median progression-free survival from randomization was 16.8 months (95% confidence interval [CI], 13.0 to 18.1) with durvalumab versus 5.6 months (95% CI, 4.6 to 7.8) with placebo (stratified hazard ratio for disease progression or death, 0.52; 95% CI, 0.42 to 0.65;\"; RESULTS: \"Grade 3 or 4 adverse events occurred in 29.9% of the patients who received durvalumab and 26.1% of those who received placebo; the most common adverse event of grade 3 or 4 was pneumonia (4.4% and 3.8%, respectively).\"",
      "limitations (18): PubMed abstract PMID 28885881, METHODS: \"Secondary end points included 12-month and 18-month progression-free survival rates, the objective response rate, the duration of response, the time to death or distant metastasis, and safety.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "stampede-abiraterone",
    "placeholder": false,
    "acronym": "STAMPEDE (abiraterone)",
    "year": 2017,
    "yearLabel": "2017",
    "topic": "prostate",
    "status": "published",
    "title": "Abiraterone for Prostate Cancer Not Previously Treated with Hormone Therapy",
    "citation": "James ND, de Bono JS, Spears MR, and others. Abiraterone for Prostate Cancer Not Previously Treated with Hormone Therapy. New England Journal of Medicine. 2017;377(4):338-351.",
    "pmid": "28578639",
    "doi": "10.1056/NEJMoa1702900",
    "design": "Randomized comparison (1:1) within the STAMPEDE platform, November 2011 through January 2014. Local radiotherapy was mandated for node-negative nonmetastatic disease and encouraged for node-positive disease. Treatment continued until progression for metastatic disease and for nonmetastatic disease without planned radiotherapy; otherwise for 2 years or until progression. The primary outcome was overall survival; failure-free survival was the intermediate primary outcome. Median follow-up was 40 months.",
    "population": "1917 patients with prostate cancer not previously treated with hormone therapy (median age 67 years; median PSA 53 ng per milliliter): 52% metastatic, 20% node-positive or node-indeterminate nonmetastatic, and 28% node-negative nonmetastatic; 95% newly diagnosed.",
    "intervention": "ADT plus abiraterone acetate 1000 mg daily and prednisolone 5 mg daily.",
    "comparator": "ADT alone.",
    "primaryResult": "There were 184 deaths with combination therapy versus 262 with ADT alone (hazard ratio 0.63; 95% CI 0.52 to 0.76; P<0.001). The hazard ratio was 0.75 in nonmetastatic and 0.61 in metastatic disease (subgroup estimates; no confidence intervals given in the abstract).",
    "secondaryResults": "Treatment-failure events numbered 248 versus 535 (hazard ratio 0.29; 95% CI 0.25 to 0.34; P<0.001); hazard ratio 0.21 in nonmetastatic and 0.31 in metastatic disease (subgroup estimates; no confidence intervals given in the abstract).",
    "safety": "Grade 3 to 5 adverse events occurred in 47% with combination therapy (nine grade 5 events) and 33% with ADT alone (three grade 5 events).",
    "takeaway": "In locally advanced or metastatic prostate cancer not previously treated with hormone therapy, adding abiraterone and prednisolone lowered the hazard of death (hazard ratio 0.63) and of treatment failure (hazard ratio 0.29), with more grade 3 to 5 adverse events (47% versus 33%).",
    "limitations": "Mixed population: 52% metastatic, 20% node-positive or node-indeterminate nonmetastatic, and 28% node-negative nonmetastatic disease, so the overall hazard ratios pool these groups. The subgroup hazard ratios are given without confidence intervals in the abstract.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "28578639",
        "doi": "10.1056/NEJMoa1702900",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (1, 2011, 2014, 2, 40): PubMed abstract PMID 28578639, METHODS: \"We randomly assigned patients in a 1:1 ratio to receive ADT alone or ADT plus abiraterone acetate (1000 mg daily) and prednisolone (5 mg daily) (combination therapy).\"; RESULTS: \"A total of 1917 patients underwent randomization from November 2011 through January 2014.\"; METHODS: \"For patients with nonmetastatic disease with no radiotherapy planned and for patients with metastatic disease, treatment continued until radiologic, clinical, or prostate-specific antigen (PSA) progression; otherwise, treatment was to continue for 2 years or until any type of progression, whichever came first.\"; RESULTS: \"The median follow-up was 40 months.\"",
      "population (1917, 67, 53, 52, 20, 28, 95): PubMed abstract PMID 28578639, RESULTS: \"A total of 1917 patients underwent randomization from November 2011 through January 2014.\"; RESULTS: \"The median age was 67 years, and the median PSA level was 53 ng per milliliter.\"; RESULTS: \"A total of 52% of the patients had metastatic disease, 20% had node-positive or node-indeterminate nonmetastatic disease, and 28% had node-negative, nonmetastatic disease; 95% had newly diagnosed disease.\"",
      "intervention (1000, 5): PubMed abstract PMID 28578639, METHODS: \"We randomly assigned patients in a 1:1 ratio to receive ADT alone or ADT plus abiraterone acetate (1000 mg daily) and prednisolone (5 mg daily) (combination therapy).\"",
      "primaryResult (184, 262, 0.63, 95, 0.52, 0.76, 0.001, 0.75, 0.61): PubMed abstract PMID 28578639, RESULTS: \"There were 184 deaths in the combination group as compared with 262 in the ADT-alone group (hazard ratio, 0.63; 95% confidence interval [CI], 0.52 to 0.76;\"; RESULTS: \"P<0.001); the hazard ratio was 0.75 in patients with nonmetastatic disease and 0.61 in those with metastatic disease.\"",
      "secondaryResults (248, 535, 0.29, 95, 0.25, 0.34, 0.001, 0.21, 0.31): PubMed abstract PMID 28578639, RESULTS: \"There were 248 treatment-failure events in the combination group as compared with 535 in the ADT-alone group (hazard ratio, 0.29; 95% CI, 0.25 to 0.34;\"; RESULTS: \"P<0.001); the hazard ratio was 0.21 in patients with nonmetastatic disease and 0.31 in those with metastatic disease.\"",
      "safety (3, 5, 47, 33): PubMed abstract PMID 28578639, RESULTS: \"Grade 3 to 5 adverse events occurred in 47% of the patients in the combination group (with nine grade 5 events) and in 33% of the patients in the ADT-alone group (with three grade 5 events).\"",
      "takeaway (0.63, 0.29, 3, 5, 47, 33): PubMed abstract PMID 28578639, RESULTS: \"There were 184 deaths in the combination group as compared with 262 in the ADT-alone group (hazard ratio, 0.63; 95% confidence interval [CI], 0.52 to 0.76;\"; RESULTS: \"There were 248 treatment-failure events in the combination group as compared with 535 in the ADT-alone group (hazard ratio, 0.29; 95% CI, 0.25 to 0.34;\"; RESULTS: \"Grade 3 to 5 adverse events occurred in 47% of the patients in the combination group (with nine grade 5 events) and in 33% of the patients in the ADT-alone group (with three grade 5 events).\"",
      "limitations (52, 20, 28): PubMed abstract PMID 28578639, RESULTS: \"A total of 52% of the patients had metastatic disease, 20% had node-positive or node-indeterminate nonmetastatic disease, and 28% had node-negative, nonmetastatic disease; 95% had newly diagnosed disease.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "flaura",
    "placeholder": false,
    "acronym": "FLAURA",
    "year": 2018,
    "yearLabel": "2018",
    "topic": "lung",
    "status": "published",
    "title": "Osimertinib in Untreated EGFR-Mutated Advanced Non-Small-Cell Lung Cancer",
    "citation": "Soria JC, Ohe Y, Vansteenkiste J, and others. Osimertinib in Untreated EGFR-Mutated Advanced Non-Small-Cell Lung Cancer. New England Journal of Medicine. 2018;378(2):113-125.",
    "pmid": "29151359",
    "doi": "10.1056/NEJMoa1713137",
    "design": "Double-blind, phase 3 randomized trial (1:1). The primary end point was investigator-assessed progression-free survival.",
    "population": "556 patients with previously untreated, EGFR mutation-positive (exon 19 deletion or L858R) advanced NSCLC.",
    "intervention": "Osimertinib 80 mg once daily.",
    "comparator": "A standard EGFR tyrosine kinase inhibitor: gefitinib 250 mg once daily or erlotinib 150 mg once daily.",
    "primaryResult": "Median progression-free survival was 18.9 months with osimertinib versus 10.2 months with standard EGFR inhibitors (hazard ratio for progression or death 0.46; 95% CI 0.37 to 0.57; P<0.001).",
    "secondaryResults": "Objective response was similar (80% versus 76%; odds ratio 1.27; 95% CI 0.85 to 1.90; P=0.24). Median duration of response was 17.2 versus 8.5 months. Overall survival was immature (25% maturity); 18-month survival was 83% versus 71% (hazard ratio for death 0.63; 95% CI 0.45 to 0.88; P=0.007, nonsignificant at the interim analysis).",
    "safety": "Adverse events of grade 3 or higher were less frequent with osimertinib (34% versus 45%).",
    "takeaway": "For untreated EGFR-mutated advanced NSCLC, osimertinib prolonged median progression-free survival compared with gefitinib or erlotinib (18.9 versus 10.2 months; hazard ratio 0.46), with fewer grade 3 or higher adverse events.",
    "limitations": "Overall survival was immature at this analysis. Only exon 19 deletion and L858R mutations were included.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "29151359",
        "doi": "10.1056/NEJMoa1713137",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 1): PubMed abstract PMID 29151359, METHODS: \"In this double-blind, phase 3 trial, we randomly assigned 556 patients with previously untreated, EGFR mutation-positive (exon 19 deletion or L858R) advanced NSCLC in a 1:1 ratio to receive either osimertinib (at a dose of 80 mg once daily) or a standard EGFR-TKI (gefitinib at a dose of 250 mg once daily or erlotinib at a dose of 150 mg once daily).\"",
      "population (556, 19): PubMed abstract PMID 29151359, METHODS: \"In this double-blind, phase 3 trial, we randomly assigned 556 patients with previously untreated, EGFR mutation-positive (exon 19 deletion or L858R) advanced NSCLC in a 1:1 ratio to receive either osimertinib (at a dose of 80 mg once daily) or a standard EGFR-TKI (gefitinib at a dose of 250 mg once daily or erlotinib at a dose of 150 mg once daily).\"",
      "intervention (80): PubMed abstract PMID 29151359, METHODS: \"In this double-blind, phase 3 trial, we randomly assigned 556 patients with previously untreated, EGFR mutation-positive (exon 19 deletion or L858R) advanced NSCLC in a 1:1 ratio to receive either osimertinib (at a dose of 80 mg once daily) or a standard EGFR-TKI (gefitinib at a dose of 250 mg once daily or erlotinib at a dose of 150 mg once daily).\"",
      "comparator (250, 150): PubMed abstract PMID 29151359, METHODS: \"In this double-blind, phase 3 trial, we randomly assigned 556 patients with previously untreated, EGFR mutation-positive (exon 19 deletion or L858R) advanced NSCLC in a 1:1 ratio to receive either osimertinib (at a dose of 80 mg once daily) or a standard EGFR-TKI (gefitinib at a dose of 250 mg once daily or erlotinib at a dose of 150 mg once daily).\"",
      "primaryResult (18.9, 10.2, 0.46, 95, 0.37, 0.57, 0.001): PubMed abstract PMID 29151359, RESULTS: \"The median progression-free survival was significantly longer with osimertinib than with standard EGFR-TKIs (18.9 months vs. 10.2 months; hazard ratio for disease progression or death, 0.46; 95% confidence interval [CI], 0.37 to 0.57;\"; RESULTS: \"P<0.001).\"",
      "secondaryResults (80, 76, 1.27, 95, 0.85, 1.90, 0.24, 17.2, 8.5, 25, 18, 83, 71, 0.63, 0.45, 0.88, 0.007): PubMed abstract PMID 29151359, RESULTS: \"The objective response rate was similar in the two groups: 80% with osimertinib and 76% with standard EGFR-TKIs (odds ratio, 1.27; 95% CI, 0.85 to 1.90;\"; RESULTS: \"The survival rate at 18 months was 83% (95% CI, 78 to 87) with osimertinib and 71% (95% CI, 65 to 76) with standard EGFR-TKIs (hazard ratio for death, 0.63; 95% CI, 0.45 to 0.88;\"; RESULTS: \"P=0.24).\"; RESULTS: \"The median duration of response was 17.2 months (95% CI, 13.8 to 22.0) with osimertinib versus 8.5 months (95% CI, 7.3 to 9.8) with standard EGFR-TKIs.\"; RESULTS: \"Data on overall survival were immature at the interim analysis (25% maturity).\"; RESULTS: \"P=0.007 [nonsignificant in the interim analysis]).\"",
      "safety (3, 34, 45): PubMed abstract PMID 29151359, RESULTS: \"Adverse events of grade 3 or higher were less frequent with osimertinib than with standard EGFR-TKIs (34% vs. 45%).\"",
      "takeaway (18.9, 10.2, 0.46, 3): PubMed abstract PMID 29151359, RESULTS: \"The median progression-free survival was significantly longer with osimertinib than with standard EGFR-TKIs (18.9 months vs. 10.2 months; hazard ratio for disease progression or death, 0.46; 95% confidence interval [CI], 0.37 to 0.57;\"; METHODS: \"In this double-blind, phase 3 trial, we randomly assigned 556 patients with previously untreated, EGFR mutation-positive (exon 19 deletion or L858R) advanced NSCLC in a 1:1 ratio to receive either osimertinib (at a dose of 80 mg once daily) or a standard EGFR-TKI (gefitinib at a dose of 250 mg once daily or erlotinib at a dose of 150 mg once daily).\"",
      "limitations (19): PubMed abstract PMID 29151359, METHODS: \"In this double-blind, phase 3 trial, we randomly assigned 556 patients with previously untreated, EGFR mutation-positive (exon 19 deletion or L858R) advanced NSCLC in a 1:1 ratio to receive either osimertinib (at a dose of 80 mg once daily) or a standard EGFR-TKI (gefitinib at a dose of 250 mg once daily or erlotinib at a dose of 150 mg once daily).\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "idea",
    "placeholder": false,
    "acronym": "IDEA",
    "year": 2018,
    "yearLabel": "2018",
    "topic": "colorectal",
    "status": "published",
    "title": "Duration of Adjuvant Chemotherapy for Stage III Colon Cancer",
    "citation": "Grothey A, Sobrero AF, Shields AF, and others. Duration of Adjuvant Chemotherapy for Stage III Colon Cancer. New England Journal of Medicine. 2018;378(13):1177-1188.",
    "pmid": "29590544",
    "doi": "10.1056/NEJMoa1713709",
    "design": "Prospective, preplanned pooled analysis of six concurrent randomized phase 3 trials testing noninferiority of 3 versus 6 months of adjuvant FOLFOX or CAPOX. The primary end point was 3-year disease-free survival; noninferiority required the upper 95% confidence limit of the hazard ratio not to exceed 1.12.",
    "population": "12,834 patients with stage III colon cancer (3263 recurrence or death events).",
    "intervention": "FOLFOX (fluorouracil, leucovorin, and oxaliplatin) or CAPOX (capecitabine and oxaliplatin) for 3 months.",
    "comparator": "The same regimen for 6 months.",
    "primaryResult": "Noninferiority of 3 months was not confirmed overall (hazard ratio 1.07; 95% CI 1.00 to 1.15). It was shown for CAPOX (hazard ratio 0.95; 95% CI 0.85 to 1.06) but not for FOLFOX (hazard ratio 1.16; 95% CI 1.06 to 1.26).",
    "secondaryResults": "In an exploratory analysis, for T1 to T3, N1 cancers, 3-year disease-free survival was 83.1% with 3 months and 83.3% with 6 months (hazard ratio 1.01; 95% CI 0.90 to 1.12). For T4, N2, or both, 6 months was superior (64.4% versus 62.7%; hazard ratio 1.12; 95% CI 1.03 to 1.23; P=0.01).",
    "safety": "The abstract does not report adverse event rates.",
    "takeaway": "In stage III colon cancer, 3 months of adjuvant therapy was not noninferior to 6 months overall, but 3 months of CAPOX was as effective as 6 months, especially in lower-risk (T1 to T3, N1) disease.",
    "limitations": "Pooled analysis of six separately run trials. The risk-group findings are exploratory. Neuropathy and other toxic effects by duration are not in the abstract.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "29590544",
        "doi": "10.1056/NEJMoa1713709",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 6, 95, 1.12): PubMed abstract PMID 29590544, METHODS: \"Noninferiority of 3 months versus 6 months of therapy could be claimed if the upper limit of the two-sided 95% confidence interval of the hazard ratio did not exceed 1.12.\"",
      "population (12834, 3263): PubMed abstract PMID 29590544, RESULTS: \"After 3263 events of disease recurrence or death had been reported in 12,834 patients, the noninferiority of 3 months of treatment versus 6 months was not confirmed in the overall study population (hazard ratio, 1.07; 95% confidence interval [CI], 1.00 to 1.15).\"",
      "intervention (3): PubMed abstract PMID 29590544, METHODS: \"We performed a prospective, preplanned, pooled analysis of six randomized, phase 3 trials that were conducted concurrently to evaluate the noninferiority of adjuvant therapy with either FOLFOX (fluorouracil, leucovorin, and oxaliplatin) or CAPOX (capecitabine and oxaliplatin) administered for 3 months, as compared with 6 months.\"",
      "comparator (6): PubMed abstract PMID 29590544, BACKGROUND: \"Since 2004, a regimen of 6 months of treatment with oxaliplatin plus a fluoropyrimidine has been standard adjuvant therapy in patients with stage III colon cancer.\"",
      "primaryResult (3, 1.07, 95, 1.00, 1.15, 0.95, 0.85, 1.06, 1.16, 1.26): PubMed abstract PMID 29590544, RESULTS: \"After 3263 events of disease recurrence or death had been reported in 12,834 patients, the noninferiority of 3 months of treatment versus 6 months was not confirmed in the overall study population (hazard ratio, 1.07; 95% confidence interval [CI], 1.00 to 1.15).\"; RESULTS: \"Noninferiority of the shorter regimen was seen for CAPOX (hazard ratio, 0.95; 95% CI, 0.85 to 1.06) but not for FOLFOX (hazard ratio, 1.16; 95% CI, 1.06 to 1.26).\"",
      "secondaryResults (3, 83.1, 83.3, 6, 1.01, 95, 0.90, 1.12, 64.4, 62.7, 1.03, 1.23, 0.01): PubMed abstract PMID 29590544, RESULTS: \"In an exploratory analysis of the combined regimens, among the patients with T1, T2, or T3 and N1 cancers, 3 months of therapy was noninferior to 6 months, with a 3-year rate of disease-free survival of 83.1% and 83.3%, respectively (hazard ratio, 1.01; 95% CI, 0.90 to 1.12).\"; RESULTS: \"Among patients with cancers that were classified as T4, N2, or both, the disease-free survival rate for a 6-month duration of therapy was superior to that for a 3-month duration (64.4% vs. 62.7%) for the combined treatments (hazard ratio, 1.12; 95% CI, 1.03 to 1.23;\"; RESULTS: \"P=0.01 for superiority).\"",
      "takeaway (3, 6): PubMed abstract PMID 29590544, METHODS: \"We performed a prospective, preplanned, pooled analysis of six randomized, phase 3 trials that were conducted concurrently to evaluate the noninferiority of adjuvant therapy with either FOLFOX (fluorouracil, leucovorin, and oxaliplatin) or CAPOX (capecitabine and oxaliplatin) administered for 3 months, as compared with 6 months.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "impower133",
    "placeholder": false,
    "acronym": "IMpower133",
    "year": 2018,
    "yearLabel": "2018",
    "topic": "lung",
    "status": "published",
    "title": "First-Line Atezolizumab plus Chemotherapy in Extensive-Stage Small-Cell Lung Cancer",
    "citation": "Horn L, Mansfield AS, Szczęsna A, and others. First-Line Atezolizumab plus Chemotherapy in Extensive-Stage Small-Cell Lung Cancer. New England Journal of Medicine. 2018;379(23):2220-2229.",
    "pmid": "30280641",
    "doi": "10.1056/NEJMoa1809064",
    "design": "Double-blind, placebo-controlled, phase 3 randomized trial (1:1). Induction was carboplatin and etoposide with atezolizumab or placebo for four 21-day cycles, then maintenance atezolizumab or placebo until unacceptable toxic effects, disease progression, or no additional clinical benefit. The two primary end points were investigator-assessed progression-free survival and overall survival in the intention-to-treat population.",
    "population": "Patients with previously untreated extensive-stage small-cell lung cancer (201 assigned to atezolizumab and 202 to placebo).",
    "intervention": "Carboplatin and etoposide plus atezolizumab for four cycles, then maintenance atezolizumab.",
    "comparator": "Carboplatin and etoposide plus placebo for four cycles, then maintenance placebo.",
    "primaryResult": "At a median follow-up of 13.9 months, median overall survival was 12.3 months with atezolizumab versus 10.3 months with placebo (hazard ratio for death 0.70; 95% CI 0.54 to 0.91; P=0.007). Median progression-free survival was 5.2 versus 4.3 months (hazard ratio for progression or death 0.77; 95% CI 0.62 to 0.96; P=0.02).",
    "safety": "The safety profile of atezolizumab plus carboplatin and etoposide was consistent with the previously reported safety profile of the individual agents, with no new findings observed.",
    "takeaway": "In previously untreated extensive-stage SCLC, adding atezolizumab to carboplatin and etoposide prolonged median overall survival (12.3 versus 10.3 months; hazard ratio 0.70) and progression-free survival (5.2 versus 4.3 months).",
    "limitations": "Progression-free survival was investigator-assessed. The abstract gives no adverse event rates.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "30280641",
        "doi": "10.1056/NEJMoa1809064",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 1, 21): PubMed abstract PMID 30280641, METHODS: \"We conducted this double-blind, placebo-controlled, phase 3 trial to evaluate atezolizumab plus carboplatin and etoposide in patients with extensive-stage small-cell lung cancer who had not previously received treatment.\"; METHODS: \"Patients were randomly assigned in a 1:1 ratio to receive carboplatin and etoposide with either atezolizumab or placebo for four 21-day cycles (induction phase), followed by a maintenance phase during which they received either atezolizumab or placebo (according to the previous random assignment) until they had unacceptable toxic effects, disease progression according to Response Evaluation Criteria in Solid Tumors, version 1.1, or no additional clinical benefit.\"",
      "population (201, 202): PubMed abstract PMID 30280641, RESULTS: \"A total of 201 patients were randomly assigned to the atezolizumab group, and 202 patients to the placebo group.\"",
      "primaryResult (13.9, 12.3, 10.3, 0.70, 95, 0.54, 0.91, 0.007, 5.2, 4.3, 0.77, 0.62, 0.96, 0.02): PubMed abstract PMID 30280641, RESULTS: \"At a median follow-up of 13.9 months, the median overall survival was 12.3 months in the atezolizumab group and 10.3 months in the placebo group (hazard ratio for death, 0.70; 95% confidence interval [CI], 0.54 to 0.91;\"; RESULTS: \"P=0.007).\"; RESULTS: \"The median progression-free survival was 5.2 months and 4.3 months, respectively (hazard ratio for disease progression or death, 0.77; 95% CI, 0.62 to 0.96;\"; RESULTS: \"P=0.02).\"",
      "takeaway (12.3, 10.3, 0.70, 5.2, 4.3): PubMed abstract PMID 30280641, RESULTS: \"At a median follow-up of 13.9 months, the median overall survival was 12.3 months in the atezolizumab group and 10.3 months in the placebo group (hazard ratio for death, 0.70; 95% confidence interval [CI], 0.54 to 0.91;\"; RESULTS: \"The median progression-free survival was 5.2 months and 4.3 months, respectively (hazard ratio for disease progression or death, 0.77; 95% CI, 0.62 to 0.96;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "aramis",
    "placeholder": false,
    "acronym": "ARAMIS",
    "year": 2019,
    "yearLabel": "2019",
    "topic": "prostate",
    "status": "published",
    "title": "Darolutamide in Nonmetastatic, Castration-Resistant Prostate Cancer",
    "citation": "Fizazi K, Shore N, Tammela TL, and others. Darolutamide in Nonmetastatic, Castration-Resistant Prostate Cancer. New England Journal of Medicine. 2019;380(13):1235-1246.",
    "pmid": "30763142",
    "doi": "10.1056/NEJMoa1815671",
    "design": "Randomized, double-blind, placebo-controlled phase 3 trial (2:1). Androgen-deprivation therapy continued in both groups. The primary end point was metastasis-free survival by independent central imaging review every 16 weeks; the primary analysis followed 437 events.",
    "population": "1509 men with nonmetastatic, castration-resistant prostate cancer and a PSA doubling time of 10 months or less.",
    "intervention": "Darolutamide 600 mg twice daily (955 patients).",
    "comparator": "Placebo (554 patients).",
    "primaryResult": "Median metastasis-free survival was 40.4 months with darolutamide versus 18.4 months with placebo (hazard ratio for metastasis or death 0.41; 95% CI 0.34 to 0.50; P<0.001).",
    "secondaryResults": "Darolutamide was associated with benefit on all secondary end points, including overall survival, time to pain progression, time to cytotoxic chemotherapy, and time to a symptomatic skeletal event.",
    "safety": "Adverse events were similar between groups. Discontinuation for adverse events was 8.9% with darolutamide and 8.7% with placebo. Darolutamide was not associated with more seizures, falls, fractures, cognitive disorder, or hypertension than placebo.",
    "takeaway": "In nonmetastatic castration-resistant prostate cancer with a PSA doubling time of 10 months or less, darolutamide prolonged median metastasis-free survival (40.4 versus 18.4 months; hazard ratio 0.41) with adverse events similar to placebo.",
    "limitations": "Metastasis was determined by independent central review of radiographic imaging every 16 weeks. The abstract does not give overall survival figures.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "30763142",
        "doi": "10.1056/NEJMoa1815671",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 2, 1, 16, 437): PubMed abstract PMID 30763142, METHODS: \"We conducted a randomized, double-blind, placebo-controlled, phase 3 trial involving men with nonmetastatic, castration-resistant prostate cancer and a prostate-specific antigen doubling time of 10 months or less.\"; METHODS: \"Patients were randomly assigned in a 2:1 ratio to receive darolutamide (600 mg [two 300-mg tablets] twice daily) or placebo while continuing androgen-deprivation therapy.\"; METHODS: \"The primary end point was metastasis-free survival, with the presence of metastasis determined by independent central review of radiographic imaging every 16 weeks.\"; RESULTS: \"In the planned primary analysis, which was performed after 437 primary end-point events had occurred, the median metastasis-free survival was 40.4 months with darolutamide, as compared with 18.4 months with placebo (hazard ratio for metastasis or death in the darolutamide group, 0.41; 95% confidence interval, 0.34 to 0.50;\"",
      "population (1509, 10): PubMed abstract PMID 30763142, RESULTS: \"In total, 1509 patients underwent randomization (955 to the darolutamide group and 554 to the placebo group).\"; METHODS: \"We conducted a randomized, double-blind, placebo-controlled, phase 3 trial involving men with nonmetastatic, castration-resistant prostate cancer and a prostate-specific antigen doubling time of 10 months or less.\"",
      "intervention (600, 955): PubMed abstract PMID 30763142, METHODS: \"Patients were randomly assigned in a 2:1 ratio to receive darolutamide (600 mg [two 300-mg tablets] twice daily) or placebo while continuing androgen-deprivation therapy.\"; RESULTS: \"In total, 1509 patients underwent randomization (955 to the darolutamide group and 554 to the placebo group).\"",
      "comparator (554): PubMed abstract PMID 30763142, RESULTS: \"In total, 1509 patients underwent randomization (955 to the darolutamide group and 554 to the placebo group).\"",
      "primaryResult (40.4, 18.4, 0.41, 95, 0.34, 0.50, 0.001): PubMed abstract PMID 30763142, RESULTS: \"In the planned primary analysis, which was performed after 437 primary end-point events had occurred, the median metastasis-free survival was 40.4 months with darolutamide, as compared with 18.4 months with placebo (hazard ratio for metastasis or death in the darolutamide group, 0.41; 95% confidence interval, 0.34 to 0.50;\"; RESULTS: \"P<0.001).\"",
      "safety (8.9, 8.7): PubMed abstract PMID 30763142, RESULTS: \"The percentage of patients who discontinued the assigned regimen because of adverse events was 8.9% in the darolutamide group and 8.7% in the placebo group.\"",
      "takeaway (10, 40.4, 18.4, 0.41): PubMed abstract PMID 30763142, METHODS: \"We conducted a randomized, double-blind, placebo-controlled, phase 3 trial involving men with nonmetastatic, castration-resistant prostate cancer and a prostate-specific antigen doubling time of 10 months or less.\"; RESULTS: \"In the planned primary analysis, which was performed after 437 primary end-point events had occurred, the median metastasis-free survival was 40.4 months with darolutamide, as compared with 18.4 months with placebo (hazard ratio for metastasis or death in the darolutamide group, 0.41; 95% confidence interval, 0.34 to 0.50;\"",
      "limitations (16): PubMed abstract PMID 30763142, METHODS: \"The primary end point was metastasis-free survival, with the presence of metastasis determined by independent central review of radiographic imaging every 16 weeks.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "beacon-crc",
    "placeholder": false,
    "acronym": "BEACON CRC",
    "year": 2019,
    "yearLabel": "2019",
    "topic": "colorectal",
    "status": "published",
    "title": "Encorafenib, Binimetinib, and Cetuximab in BRAF V600E-Mutated Colorectal Cancer",
    "citation": "Kopetz S, Grothey A, Yaeger R, and others. Encorafenib, Binimetinib, and Cetuximab in BRAF V600E-Mutated Colorectal Cancer. New England Journal of Medicine. 2019;381(17):1632-1643.",
    "pmid": "31566309",
    "doi": "10.1056/NEJMoa1908075",
    "design": "Open-label, phase 3 randomized trial (1:1:1). Primary end points were overall survival and objective response rate, triplet versus control; doublet versus control overall survival was secondary. Results are from a prespecified interim analysis.",
    "population": "665 patients with BRAF V600E-mutated metastatic colorectal cancer that progressed after one or two previous regimens.",
    "intervention": "Encorafenib, binimetinib, and cetuximab (triplet), or encorafenib and cetuximab (doublet).",
    "comparator": "Investigators' choice of cetuximab and irinotecan, or cetuximab and FOLFIRI.",
    "primaryResult": "Median overall survival was 9.0 months with the triplet versus 5.4 months with control (hazard ratio for death 0.52; 95% CI 0.39 to 0.70; P<0.001). Confirmed response rate was 26% versus 2% (P<0.001).",
    "secondaryResults": "Median overall survival with the doublet was 8.4 months (hazard ratio versus control 0.60; 95% CI 0.45 to 0.79; P<0.001).",
    "safety": "Grade 3 or higher adverse events occurred in 58% with the triplet, 50% with the doublet, and 61% with control.",
    "takeaway": "In previously treated BRAF V600E-mutated metastatic colorectal cancer, encorafenib plus cetuximab, with or without binimetinib, improved overall survival over cetuximab-irinotecan regimens (triplet 9.0 and doublet 8.4 versus 5.4 months).",
    "limitations": "Open-label interim analysis. The triplet and doublet were not formally compared with each other in the abstract.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "31566309",
        "doi": "10.1056/NEJMoa1908075",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 1): PubMed abstract PMID 31566309, METHODS: \"In this open-label, phase 3 trial, we enrolled 665 patients with BRAF V600E-mutated metastatic colorectal cancer who had had disease progression after one or two previous regimens.\"; METHODS: \"Patients were randomly assigned in a 1:1:1 ratio to receive encorafenib, binimetinib, and cetuximab (triplet-therapy group); encorafenib and cetuximab (doublet-therapy group); or the investigators' choice of either cetuximab and irinotecan or cetuximab and FOLFIRI (folinic acid, fluorouracil, and irinotecan) (control group).\"",
      "population (665): PubMed abstract PMID 31566309, METHODS: \"In this open-label, phase 3 trial, we enrolled 665 patients with BRAF V600E-mutated metastatic colorectal cancer who had had disease progression after one or two previous regimens.\"",
      "primaryResult (9.0, 5.4, 0.52, 95, 0.39, 0.70, 0.001, 26, 2): PubMed abstract PMID 31566309, RESULTS: \"The median overall survival was 9.0 months in the triplet-therapy group and 5.4 months in the control group (hazard ratio for death, 0.52; 95% confidence interval [CI], 0.39 to 0.70;\"; RESULTS: \"The confirmed response rate was 26% (95% CI, 18 to 35) in the triplet-therapy group and 2% (95% CI, 0 to 7) in the control group (P<0.001).\"",
      "secondaryResults (8.4, 0.60, 95, 0.45, 0.79, 0.001): PubMed abstract PMID 31566309, RESULTS: \"The median overall survival in the doublet-therapy group was 8.4 months (hazard ratio for death vs. control, 0.60; 95% CI, 0.45 to 0.79;\"; RESULTS: \"The confirmed response rate was 26% (95% CI, 18 to 35) in the triplet-therapy group and 2% (95% CI, 0 to 7) in the control group (P<0.001).\"",
      "safety (3, 58, 50, 61): PubMed abstract PMID 31566309, RESULTS: \"Adverse events of grade 3 or higher occurred in 58% of patients in the triplet-therapy group, in 50% in the doublet-therapy group, and in 61% in the control group.\"",
      "takeaway (9.0, 8.4, 5.4): PubMed abstract PMID 31566309, RESULTS: \"The median overall survival was 9.0 months in the triplet-therapy group and 5.4 months in the control group (hazard ratio for death, 0.52; 95% confidence interval [CI], 0.39 to 0.70;\"; RESULTS: \"The median overall survival in the doublet-therapy group was 8.4 months (hazard ratio for death vs. control, 0.60; 95% CI, 0.45 to 0.79;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "card",
    "placeholder": false,
    "acronym": "CARD",
    "year": 2019,
    "yearLabel": "2019",
    "topic": "prostate",
    "status": "published",
    "title": "Cabazitaxel versus Abiraterone or Enzalutamide in Metastatic Prostate Cancer",
    "citation": "de Wit R, de Bono J, Sternberg CN, and others. Cabazitaxel versus Abiraterone or Enzalutamide in Metastatic Prostate Cancer. New England Journal of Medicine. 2019;381(26):2506-2518.",
    "pmid": "31566937",
    "doi": "10.1056/NEJMoa1911206",
    "design": "Randomized trial (1:1). The primary end point was imaging-based progression-free survival. Median follow-up was 9.2 months.",
    "population": "255 patients with metastatic castration-resistant prostate cancer previously treated with docetaxel and an androgen-signaling-targeted inhibitor (abiraterone or enzalutamide).",
    "intervention": "Cabazitaxel 25 mg per square meter intravenously every 3 weeks, with prednisone daily and granulocyte colony-stimulating factor (129 patients).",
    "comparator": "The other androgen-signaling-targeted inhibitor: abiraterone 1000 mg plus prednisone daily, or enzalutamide 160 mg daily (126 patients).",
    "primaryResult": "Imaging-based progression or death occurred in 73.6% with cabazitaxel versus 80.2% with the androgen-signaling-targeted inhibitor (hazard ratio 0.54; 95% CI 0.40 to 0.73; P<0.001). Median imaging-based progression-free survival was 8.0 versus 3.7 months.",
    "secondaryResults": "Median overall survival was 13.6 versus 11.0 months (hazard ratio 0.64; 95% CI 0.46 to 0.89; P = 0.008). PSA response occurred in 35.7% versus 13.5% (P<0.001) and tumor response in 36.5% versus 11.5% (P = 0.004).",
    "safety": "Grade 3 or higher adverse events occurred in 56.3% with cabazitaxel and 52.4% with the androgen-signaling-targeted inhibitor. No new safety signals were observed.",
    "takeaway": "After docetaxel and one androgen-signaling-targeted inhibitor, cabazitaxel improved, compared with switching to the other inhibitor, imaging-based progression-free survival (8.0 versus 3.7 months; hazard ratio 0.54) and overall survival (13.6 versus 11.0 months).",
    "limitations": "Small trial (255 patients) with a short median follow-up of 9.2 months.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "31566937",
        "doi": "10.1056/NEJMoa1911206",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (1, 9.2): PubMed abstract PMID 31566937, METHODS: \"We randomly assigned, in a 1:1 ratio, patients who had previously received docetaxel and an androgen-signaling-targeted inhibitor (abiraterone or enzalutamide) to receive cabazitaxel (at a dose of 25 mg per square meter of body-surface area intravenously every 3 weeks, plus prednisone daily and granulocyte colony-stimulating factor) or the other androgen-signaling-targeted inhibitor (either 1000 mg of abiraterone plus prednisone daily or 160 mg of enzalutamide daily).\"; RESULTS: \"After a median follow-up of 9.2 months, imaging-based progression or death was reported in 95 of 129 patients (73.6%) in the cabazitaxel group, as compared with 101 of 126 patients (80.2%) in the group that received an androgen-signaling-targeted inhibitor (hazard ratio, 0.54; 95% confidence interval [CI], 0.40 to 0.73;\"",
      "population (255): PubMed abstract PMID 31566937, RESULTS: \"A total of 255 patients underwent randomization.\"",
      "intervention (25, 3, 129): PubMed abstract PMID 31566937, METHODS: \"We randomly assigned, in a 1:1 ratio, patients who had previously received docetaxel and an androgen-signaling-targeted inhibitor (abiraterone or enzalutamide) to receive cabazitaxel (at a dose of 25 mg per square meter of body-surface area intravenously every 3 weeks, plus prednisone daily and granulocyte colony-stimulating factor) or the other androgen-signaling-targeted inhibitor (either 1000 mg of abiraterone plus prednisone daily or 160 mg of enzalutamide daily).\"; RESULTS: \"After a median follow-up of 9.2 months, imaging-based progression or death was reported in 95 of 129 patients (73.6%) in the cabazitaxel group, as compared with 101 of 126 patients (80.2%) in the group that received an androgen-signaling-targeted inhibitor (hazard ratio, 0.54; 95% confidence interval [CI], 0.40 to 0.73;\"",
      "comparator (1000, 160, 126): PubMed abstract PMID 31566937, METHODS: \"We randomly assigned, in a 1:1 ratio, patients who had previously received docetaxel and an androgen-signaling-targeted inhibitor (abiraterone or enzalutamide) to receive cabazitaxel (at a dose of 25 mg per square meter of body-surface area intravenously every 3 weeks, plus prednisone daily and granulocyte colony-stimulating factor) or the other androgen-signaling-targeted inhibitor (either 1000 mg of abiraterone plus prednisone daily or 160 mg of enzalutamide daily).\"; RESULTS: \"After a median follow-up of 9.2 months, imaging-based progression or death was reported in 95 of 129 patients (73.6%) in the cabazitaxel group, as compared with 101 of 126 patients (80.2%) in the group that received an androgen-signaling-targeted inhibitor (hazard ratio, 0.54; 95% confidence interval [CI], 0.40 to 0.73;\"",
      "primaryResult (73.6, 80.2, 0.54, 95, 0.40, 0.73, 0.001, 8.0, 3.7): PubMed abstract PMID 31566937, RESULTS: \"After a median follow-up of 9.2 months, imaging-based progression or death was reported in 95 of 129 patients (73.6%) in the cabazitaxel group, as compared with 101 of 126 patients (80.2%) in the group that received an androgen-signaling-targeted inhibitor (hazard ratio, 0.54; 95% confidence interval [CI], 0.40 to 0.73;\"; RESULTS: \"P<0.001).\"; RESULTS: \"The median imaging-based progression-free survival was 8.0 months with cabazitaxel and 3.7 months with the androgen-signaling-targeted inhibitor.\"",
      "secondaryResults (13.6, 11.0, 0.64, 95, 0.46, 0.89, 0.008, 35.7, 13.5, 0.001, 36.5, 11.5, 0.004): PubMed abstract PMID 31566937, RESULTS: \"The median overall survival was 13.6 months with cabazitaxel and 11.0 months with the androgen-signaling-targeted inhibitor (hazard ratio for death, 0.64; 95% CI, 0.46 to 0.89;\"; RESULTS: \"P = 0.008).\"; RESULTS: \"P<0.001), a prostate-specific antigen response occurred in 35.7% and 13.5% of the patients, respectively (P<0.001), and tumor response was noted in 36.5% and 11.5% (P = 0.004).\"",
      "safety (3, 56.3, 52.4): PubMed abstract PMID 31566937, RESULTS: \"Adverse events of grade 3 or higher occurred in 56.3% of patients receiving cabazitaxel and in 52.4% of those receiving an androgen-signaling-targeted inhibitor.\"",
      "takeaway (8.0, 3.7, 0.54, 13.6, 11.0): PubMed abstract PMID 31566937, RESULTS: \"The median imaging-based progression-free survival was 8.0 months with cabazitaxel and 3.7 months with the androgen-signaling-targeted inhibitor.\"; RESULTS: \"After a median follow-up of 9.2 months, imaging-based progression or death was reported in 95 of 129 patients (73.6%) in the cabazitaxel group, as compared with 101 of 126 patients (80.2%) in the group that received an androgen-signaling-targeted inhibitor (hazard ratio, 0.54; 95% confidence interval [CI], 0.40 to 0.73;\"; RESULTS: \"The median overall survival was 13.6 months with cabazitaxel and 11.0 months with the androgen-signaling-targeted inhibitor (hazard ratio for death, 0.64; 95% CI, 0.46 to 0.89;\"",
      "limitations (255, 9.2): PubMed abstract PMID 31566937, RESULTS: \"A total of 255 patients underwent randomization.\"; RESULTS: \"After a median follow-up of 9.2 months, imaging-based progression or death was reported in 95 of 129 patients (73.6%) in the cabazitaxel group, as compared with 101 of 126 patients (80.2%) in the group that received an androgen-signaling-targeted inhibitor (hazard ratio, 0.54; 95% confidence interval [CI], 0.40 to 0.73;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "caspian",
    "placeholder": false,
    "acronym": "CASPIAN",
    "year": 2019,
    "yearLabel": "2019",
    "topic": "lung",
    "status": "published",
    "title": "Durvalumab plus platinum-etoposide versus platinum-etoposide in first-line treatment of extensive-stage small-cell lung cancer (CASPIAN): a randomised, controlled, open-label, phase 3 trial",
    "citation": "Paz-Ares L, Dvorkin M, Chen Y, and others. Durvalumab plus platinum-etoposide versus platinum-etoposide in first-line treatment of extensive-stage small-cell lung cancer (CASPIAN): a randomised, controlled, open-label, phase 3 trial. Lancet. 2019;394(10212):1929-1939.",
    "pmid": "31590988",
    "doi": "10.1016/S0140-6736(19)32222-6",
    "design": "Randomised, open-label, phase 3 trial at 209 sites in 23 countries, with 1:1:1 assignment to durvalumab plus platinum-etoposide, durvalumab plus tremelimumab plus platinum-etoposide, or platinum-etoposide alone. This report is a planned interim analysis of durvalumab plus platinum-etoposide versus platinum-etoposide. The immunotherapy groups received up to four cycles of platinum-etoposide plus durvalumab 1500 mg, with or without tremelimumab 75 mg, every 3 weeks, then maintenance durvalumab 1500 mg every 4 weeks. The platinum-etoposide group received up to six cycles every 3 weeks, with prophylactic cranial irradiation at the investigator's discretion. The primary endpoint was overall survival in the intention-to-treat population.",
    "population": "Adults with untreated extensive-stage small-cell lung cancer, World Health Organization performance status 0 or 1, and measurable disease. Enrollment ran from March 27, 2017, to May 29, 2018. 268 patients were allocated to durvalumab plus platinum-etoposide and 269 to platinum-etoposide alone.",
    "intervention": "Durvalumab 1500 mg plus platinum-etoposide (etoposide 80-100 mg/m2 on days 1-3 and investigator's choice of carboplatin area under the curve 5-6 mg/mL per min or cisplatin 75-80 mg/m2 on day 1).",
    "comparator": "Platinum-etoposide alone, up to six cycles, with prophylactic cranial irradiation at the investigator's discretion.",
    "primaryResult": "Overall survival favored durvalumab plus platinum-etoposide (hazard ratio 0.73; 95% CI 0.59 to 0.91; p=0.0047). Median overall survival was 13.0 months versus 10.3 months, and 18-month survival was 34% versus 25%.",
    "safety": "Any-cause grade 3 or 4 adverse events occurred in 62% (163 of 265 treated patients) with durvalumab plus platinum-etoposide and 62% (166 of 266) with platinum-etoposide. Adverse events leading to death occurred in 5% (13 patients) and 6% (15 patients).",
    "takeaway": "In untreated extensive-stage SCLC, adding durvalumab to platinum-etoposide improved median overall survival (13.0 versus 10.3 months; hazard ratio 0.73), with similar rates of grade 3 or 4 adverse events (62% in each group).",
    "limitations": "Open-label interim analysis of one of three arms; the durvalumab-tremelimumab arm is not reported here. The control group could receive more chemotherapy cycles and prophylactic cranial irradiation.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "31590988",
        "doi": "10.1016/S0140-6736(19)32222-6",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 209, 23, 1, 1500, 75, 4): PubMed abstract PMID 31590988, METHODS: \"Patients received up to four cycles of platinum-etoposide plus durvalumab 1500 mg with or without tremelimumab 75 mg every 3 weeks followed by maintenance durvalumab 1500 mg every 4 weeks in the immunotherapy groups and up to six cycles of platinum-etoposide every 3 weeks plus prophylactic cranial irradiation (investigator's discretion) in the platinum-etoposide group.\"; METHODS: \"This randomised, open-label, phase 3 trial was done at 209 sites across 23 countries.\"; METHODS: \"Platinum-etoposide consisted of etoposide 80-100 mg/m2 on days 1-3 of each cycle with investigator's choice of either carboplatin area under the curve 5-6 mg/mL per min or cisplatin 75-80 mg/m2 (administered on day 1 of each cycle).\"",
      "population (0, 1, 27, 2017, 29, 2018, 268, 269): PubMed abstract PMID 31590988, METHODS: \"Eligible patients were adults with untreated ES-SCLC, with WHO performance status 0 or 1 and measurable disease as per Response Evaluation Criteria in Solid Tumors, version 1.1.\"; FINDINGS: \"Patients were enrolled between March 27, 2017, and May 29, 2018. 268 patients were allocated to the durvalumab plus platinum-etoposide group and 269 to the platinum-etoposide group.\"",
      "intervention (1500, 80, 100, 1, 3, 5, 6, 75): PubMed abstract PMID 31590988, METHODS: \"Patients received up to four cycles of platinum-etoposide plus durvalumab 1500 mg with or without tremelimumab 75 mg every 3 weeks followed by maintenance durvalumab 1500 mg every 4 weeks in the immunotherapy groups and up to six cycles of platinum-etoposide every 3 weeks plus prophylactic cranial irradiation (investigator's discretion) in the platinum-etoposide group.\"; METHODS: \"Platinum-etoposide consisted of etoposide 80-100 mg/m2 on days 1-3 of each cycle with investigator's choice of either carboplatin area under the curve 5-6 mg/mL per min or cisplatin 75-80 mg/m2 (administered on day 1 of each cycle).\"",
      "primaryResult (0.73, 95, 0.59, 0.91, 0.0047, 13.0, 10.3, 18, 34, 25): PubMed abstract PMID 31590988, FINDINGS: \"Durvalumab plus platinum-etoposide was associated with a significant improvement in overall survival, with a hazard ratio of 0·73 (95% CI 0·59-0·91; p=0·0047]); median overall survival was 13·0 months (95% CI 11·5-14·8) in the durvalumab plus platinum-etoposide group versus 10·3 months (9·3-11·2) in the platinum-etoposide group, with 34% (26·9-41·0) versus 25% (18·4-31·6) of patients alive at 18 months.\"",
      "safety (3, 4, 62, 163, 265, 166, 266, 5, 13, 6, 15): PubMed abstract PMID 31590988, FINDINGS: \"Any-cause adverse events of grade 3 or 4 occurred in 163 (62%) of 265 treated patients in the durvalumab plus platinum-etoposide group and 166 (62%) of 266 in the platinum-etoposide group; adverse events leading to death occurred in 13 (5%) and 15 (6%) patients.\"",
      "takeaway (13.0, 10.3, 0.73, 3, 4, 62): PubMed abstract PMID 31590988, FINDINGS: \"Durvalumab plus platinum-etoposide was associated with a significant improvement in overall survival, with a hazard ratio of 0·73 (95% CI 0·59-0·91; p=0·0047]); median overall survival was 13·0 months (95% CI 11·5-14·8) in the durvalumab plus platinum-etoposide group versus 10·3 months (9·3-11·2) in the platinum-etoposide group, with 34% (26·9-41·0) versus 25% (18·4-31·6) of patients alive at 18 months.\"; FINDINGS: \"Any-cause adverse events of grade 3 or 4 occurred in 163 (62%) of 265 treated patients in the durvalumab plus platinum-etoposide group and 166 (62%) of 266 in the platinum-etoposide group; adverse events leading to death occurred in 13 (5%) and 15 (6%) patients.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "katherine",
    "placeholder": false,
    "acronym": "KATHERINE",
    "year": 2019,
    "yearLabel": "2019",
    "topic": "breast",
    "status": "published",
    "title": "Trastuzumab Emtansine for Residual Invasive HER2-Positive Breast Cancer",
    "citation": "von Minckwitz G, Huang CS, Mano MS, and others. Trastuzumab Emtansine for Residual Invasive HER2-Positive Breast Cancer. New England Journal of Medicine. 2019;380(7):617-628.",
    "pmid": "30516102",
    "doi": "10.1056/NEJMoa1814017",
    "design": "Phase 3, open-label randomized trial of adjuvant therapy for 14 cycles. The primary end point was invasive disease-free survival. Results are from the interim analysis.",
    "population": "1486 patients with HER2-positive early breast cancer who had residual invasive disease in the breast or axilla at surgery after neoadjuvant therapy containing a taxane (with or without anthracycline) and trastuzumab.",
    "intervention": "Adjuvant trastuzumab emtansine (T-DM1) for 14 cycles (743 patients).",
    "comparator": "Adjuvant trastuzumab for 14 cycles (743 patients).",
    "primaryResult": "Invasive disease or death occurred in 12.2% with T-DM1 and 22.2% with trastuzumab. Three-year invasive disease-free survival was 88.3% versus 77.0% (hazard ratio for invasive disease or death 0.50; 95% CI 0.39 to 0.64; P<0.001).",
    "secondaryResults": "Distant recurrence as the first invasive-disease event occurred in 10.5% with T-DM1 and 15.9% with trastuzumab.",
    "safety": "Adverse events were more frequent with T-DM1 than with trastuzumab alone, consistent with the known safety profile of T-DM1.",
    "takeaway": "For HER2-positive early breast cancer with residual invasive disease after neoadjuvant taxane and trastuzumab, adjuvant T-DM1 improved three-year invasive disease-free survival over trastuzumab (88.3% versus 77.0%; hazard ratio 0.50).",
    "limitations": "Open-label design and an interim analysis. The abstract does not quantify specific adverse events.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "30516102",
        "doi": "10.1056/NEJMoa1814017",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 14): PubMed abstract PMID 30516102, METHODS: \"We conducted a phase 3, open-label trial involving patients with HER2-positive early breast cancer who were found to have residual invasive disease in the breast or axilla at surgery after receiving neoadjuvant therapy containing a taxane (with or without anthracycline) and trastuzumab.\"; METHODS: \"Patients were randomly assigned to receive adjuvant T-DM1 or trastuzumab for 14 cycles.\"",
      "population (1486): PubMed abstract PMID 30516102, RESULTS: \"At the interim analysis, among 1486 randomly assigned patients (743 in the T-DM1 group and 743 in the trastuzumab group), invasive disease or death had occurred in 91 patients in the T-DM1 group (12.2%) and 165 patients in the trastuzumab group (22.2%).\"",
      "intervention (14, 743): PubMed abstract PMID 30516102, METHODS: \"Patients were randomly assigned to receive adjuvant T-DM1 or trastuzumab for 14 cycles.\"; RESULTS: \"At the interim analysis, among 1486 randomly assigned patients (743 in the T-DM1 group and 743 in the trastuzumab group), invasive disease or death had occurred in 91 patients in the T-DM1 group (12.2%) and 165 patients in the trastuzumab group (22.2%).\"",
      "comparator (14, 743): PubMed abstract PMID 30516102, METHODS: \"Patients were randomly assigned to receive adjuvant T-DM1 or trastuzumab for 14 cycles.\"; RESULTS: \"At the interim analysis, among 1486 randomly assigned patients (743 in the T-DM1 group and 743 in the trastuzumab group), invasive disease or death had occurred in 91 patients in the T-DM1 group (12.2%) and 165 patients in the trastuzumab group (22.2%).\"",
      "primaryResult (12.2, 22.2, 88.3, 77.0, 0.50, 95, 0.39, 0.64, 0.001): PubMed abstract PMID 30516102, RESULTS: \"At the interim analysis, among 1486 randomly assigned patients (743 in the T-DM1 group and 743 in the trastuzumab group), invasive disease or death had occurred in 91 patients in the T-DM1 group (12.2%) and 165 patients in the trastuzumab group (22.2%).\"; RESULTS: \"The estimated percentage of patients who were free of invasive disease at 3 years was 88.3% in the T-DM1 group and 77.0% in the trastuzumab group.\"; RESULTS: \"Invasive disease-free survival was significantly higher in the T-DM1 group than in the trastuzumab group (hazard ratio for invasive disease or death, 0.50; 95% confidence interval, 0.39 to 0.64;\"; RESULTS: \"P<0.001).\"",
      "secondaryResults (10.5, 15.9): PubMed abstract PMID 30516102, RESULTS: \"Distant recurrence as the first invasive-disease event occurred in 10.5% of patients in the T-DM1 group and 15.9% of those in the trastuzumab group.\"",
      "takeaway (88.3, 77.0, 0.50): PubMed abstract PMID 30516102, RESULTS: \"The estimated percentage of patients who were free of invasive disease at 3 years was 88.3% in the T-DM1 group and 77.0% in the trastuzumab group.\"; RESULTS: \"Invasive disease-free survival was significantly higher in the T-DM1 group than in the trastuzumab group (hazard ratio for invasive disease or death, 0.50; 95% confidence interval, 0.39 to 0.64;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "adaura",
    "placeholder": false,
    "acronym": "ADAURA",
    "year": 2020,
    "yearLabel": "2020",
    "topic": "lung",
    "status": "published",
    "title": "Osimertinib in Resected EGFR-Mutated Non-Small-Cell Lung Cancer",
    "citation": "Wu YL, Tsuboi M, He J, and others. Osimertinib in Resected EGFR-Mutated Non-Small-Cell Lung Cancer. New England Journal of Medicine. 2020;383(18):1711-1723.",
    "pmid": "32955177",
    "doi": "10.1056/NEJMoa2027071",
    "design": "Double-blind, phase 3 randomized trial (1:1) of adjuvant therapy for 3 years. The primary end point was investigator-assessed disease-free survival in stage II to IIIA disease.",
    "population": "682 patients with completely resected EGFR mutation-positive NSCLC, stage IB to IIIA.",
    "intervention": "Osimertinib 80 mg once daily for 3 years (339 patients).",
    "comparator": "Placebo for 3 years (343 patients).",
    "primaryResult": "In stage II to IIIA disease, 90% with osimertinib and 44% with placebo were alive and disease-free at 24 months (hazard ratio for recurrence or death 0.17; 99.06% CI 0.11 to 0.26; P<0.001).",
    "secondaryResults": "In the overall stage IB to IIIA population, 24-month disease-free survival was 89% versus 52% (hazard ratio 0.20; 99.12% CI 0.14 to 0.30; P<0.001). At 24 months, 98% versus 85% were alive without central nervous system disease (hazard ratio 0.18; 95% CI 0.10 to 0.33). Overall survival was immature: 29 deaths (9 with osimertinib, 20 with placebo).",
    "safety": "No new safety concerns were noted.",
    "takeaway": "After complete resection of EGFR-mutated stage IB to IIIA NSCLC, adjuvant osimertinib improved 24-month disease-free survival (stage II to IIIA: 90% versus 44%; hazard ratio 0.17).",
    "limitations": "Overall survival data were immature. The abstract gives no adverse event rates.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "32955177",
        "doi": "10.1056/NEJMoa2027071",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 1): PubMed abstract PMID 32955177, METHODS: \"In this double-blind, phase 3 trial, we randomly assigned patients with completely resected EGFR mutation-positive NSCLC in a 1:1 ratio to receive either osimertinib (80 mg once daily) or placebo for 3 years.\"",
      "population (682): PubMed abstract PMID 32955177, RESULTS: \"A total of 682 patients underwent randomization (339 to the osimertinib group and 343 to the placebo group).\"",
      "intervention (80, 3, 339): PubMed abstract PMID 32955177, METHODS: \"In this double-blind, phase 3 trial, we randomly assigned patients with completely resected EGFR mutation-positive NSCLC in a 1:1 ratio to receive either osimertinib (80 mg once daily) or placebo for 3 years.\"; RESULTS: \"A total of 682 patients underwent randomization (339 to the osimertinib group and 343 to the placebo group).\"",
      "comparator (3, 343): PubMed abstract PMID 32955177, METHODS: \"In this double-blind, phase 3 trial, we randomly assigned patients with completely resected EGFR mutation-positive NSCLC in a 1:1 ratio to receive either osimertinib (80 mg once daily) or placebo for 3 years.\"; RESULTS: \"A total of 682 patients underwent randomization (339 to the osimertinib group and 343 to the placebo group).\"",
      "primaryResult (90, 44, 24, 0.17, 99.06, 0.11, 0.26, 0.001): PubMed abstract PMID 32955177, RESULTS: \"At 24 months, 90% of the patients with stage II to IIIA disease in the osimertinib group (95% confidence interval [CI], 84 to 93) and 44% of those in the placebo group (95% CI, 37 to 51) were alive and disease-free (overall hazard ratio for disease recurrence or death, 0.17; 99.06% CI, 0.11 to 0.26;\"; RESULTS: \"P<0.001).\"",
      "secondaryResults (24, 89, 52, 0.20, 99.12, 0.14, 0.30, 0.001, 98, 85, 0.18, 95, 0.10, 0.33, 29, 9, 20): PubMed abstract PMID 32955177, RESULTS: \"In the overall population, 89% of the patients in the osimertinib group (95% CI, 85 to 92) and 52% of those in the placebo group (95% CI, 46 to 58) were alive and disease-free at 24 months (overall hazard ratio for disease recurrence or death, 0.20; 99.12% CI, 0.14 to 0.30;\"; RESULTS: \"P<0.001).\"; RESULTS: \"At 24 months, 98% of the patients in the osimertinib group (95% CI, 95 to 99) and 85% of those in the placebo group (95% CI, 80 to 89) were alive and did not have central nervous system disease (overall hazard ratio for disease recurrence or death, 0.18; 95% CI, 0.10 to 0.33).\"; RESULTS: \"Overall survival data were immature; 29 patients died (9 in the osimertinib group and 20 in the placebo group).\"",
      "takeaway (24, 90, 44, 0.17): PubMed abstract PMID 32955177, RESULTS: \"At 24 months, 90% of the patients with stage II to IIIA disease in the osimertinib group (95% confidence interval [CI], 84 to 93) and 44% of those in the placebo group (95% CI, 37 to 51) were alive and disease-free (overall hazard ratio for disease recurrence or death, 0.17; 99.06% CI, 0.11 to 0.26;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "keynote-177",
    "placeholder": false,
    "acronym": "KEYNOTE-177",
    "year": 2020,
    "yearLabel": "2020",
    "topic": "colorectal",
    "status": "published",
    "title": "Pembrolizumab in Microsatellite-Instability-High Advanced Colorectal Cancer",
    "citation": "André T, Shiu KK, Kim TW, and others. Pembrolizumab in Microsatellite-Instability-High Advanced Colorectal Cancer. New England Journal of Medicine. 2020;383(23):2207-2218.",
    "pmid": "33264544",
    "doi": "10.1056/NEJMoa2017699",
    "design": "Phase 3, open-label randomized trial (1:1). Patients assigned to chemotherapy could cross over to pembrolizumab after disease progression. The two primary end points were progression-free survival and overall survival. Results are from the second interim analysis.",
    "population": "307 patients with metastatic microsatellite-instability-high, mismatch-repair-deficient colorectal cancer who had not previously received treatment.",
    "intervention": "Pembrolizumab 200 mg every 3 weeks.",
    "comparator": "Chemotherapy (fluorouracil-based therapy with or without bevacizumab or cetuximab) every 2 weeks.",
    "primaryResult": "After a median follow-up of 32.4 months, median progression-free survival was 16.5 months with pembrolizumab versus 8.2 months with chemotherapy (hazard ratio 0.60; 95% CI 0.45 to 0.80; P = 0.0002).",
    "secondaryResults": "The estimated restricted mean survival after 24 months of follow-up was 13.7 months versus 10.8 months. As of the data cutoff, 56 patients in the pembrolizumab group and 69 in the chemotherapy group had died. Overall survival data were still evolving (66% of required events) and remained blinded until the final analysis. An overall response occurred in 43.8% versus 33.1%; among patients with a response, 83% versus 35% had an ongoing response at 24 months.",
    "safety": "Treatment-related adverse events of grade 3 or higher occurred in 22% with pembrolizumab and 66% with chemotherapy, including one death in the chemotherapy group.",
    "takeaway": "As first-line therapy for microsatellite-instability-high, mismatch-repair-deficient metastatic colorectal cancer, pembrolizumab prolonged median progression-free survival over chemotherapy (16.5 versus 8.2 months; hazard ratio 0.60), with fewer grade 3 or higher treatment-related adverse events (22% versus 66%).",
    "limitations": "Open-label second interim analysis. Patients in the chemotherapy group could cross over to pembrolizumab after progression. Overall survival remained blinded; the 13.7 versus 10.8 month figures are restricted mean survival after 24 months, not median overall survival.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "33264544",
        "doi": "10.1056/NEJMoa2017699",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 1): PubMed abstract PMID 33264544, METHODS: \"In this phase 3, open-label trial, 307 patients with metastatic MSI-H-dMMR colorectal cancer who had not previously received treatment were randomly assigned, in a 1:1 ratio, to receive pembrolizumab at a dose of 200 mg every 3 weeks or chemotherapy (5-fluorouracil-based therapy with or without bevacizumab or cetuximab) every 2 weeks.\"",
      "population (307): PubMed abstract PMID 33264544, METHODS: \"In this phase 3, open-label trial, 307 patients with metastatic MSI-H-dMMR colorectal cancer who had not previously received treatment were randomly assigned, in a 1:1 ratio, to receive pembrolizumab at a dose of 200 mg every 3 weeks or chemotherapy (5-fluorouracil-based therapy with or without bevacizumab or cetuximab) every 2 weeks.\"",
      "intervention (200, 3): PubMed abstract PMID 33264544, METHODS: \"In this phase 3, open-label trial, 307 patients with metastatic MSI-H-dMMR colorectal cancer who had not previously received treatment were randomly assigned, in a 1:1 ratio, to receive pembrolizumab at a dose of 200 mg every 3 weeks or chemotherapy (5-fluorouracil-based therapy with or without bevacizumab or cetuximab) every 2 weeks.\"",
      "comparator (2): PubMed abstract PMID 33264544, METHODS: \"In this phase 3, open-label trial, 307 patients with metastatic MSI-H-dMMR colorectal cancer who had not previously received treatment were randomly assigned, in a 1:1 ratio, to receive pembrolizumab at a dose of 200 mg every 3 weeks or chemotherapy (5-fluorouracil-based therapy with or without bevacizumab or cetuximab) every 2 weeks.\"",
      "primaryResult (32.4, 16.5, 8.2, 0.60, 95, 0.45, 0.80, 0.0002): PubMed abstract PMID 33264544, RESULTS: \"At the second interim analysis, after a median follow-up (from randomization to data cutoff) of 32.4 months (range, 24.0 to 48.3), pembrolizumab was superior to chemotherapy with respect to progression-free survival (median, 16.5 vs. 8.2 months; hazard ratio, 0.60; 95% confidence interval [CI], 0.45 to 0.80;\"; RESULTS: \"P = 0.0002).\"",
      "secondaryResults (24, 13.7, 10.8, 56, 69, 66, 43.8, 33.1, 83, 35): PubMed abstract PMID 33264544, RESULTS: \"The estimated restricted mean survival after 24 months of follow-up was 13.7 months (range, 12.0 to 15.4) as compared with 10.8 months (range, 9.4 to 12.2).\"; RESULTS: \"As of the data cutoff date, 56 patients in the pembrolizumab group and 69 in the chemotherapy group had died.\"; RESULTS: \"Data on overall survival were still evolving (66% of required events had occurred) and remain blinded until the final analysis.\"; RESULTS: \"An overall response (complete or partial response), as evaluated with Response Evaluation Criteria in Solid Tumors (RECIST), version 1.1, was observed in 43.8% of the patients in the pembrolizumab group and 33.1% in the chemotherapy group.\"; RESULTS: \"Among patients with an overall response, 83% in the pembrolizumab group, as compared with 35% of patients in the chemotherapy group, had ongoing responses at 24 months.\"",
      "safety (3, 22, 66): PubMed abstract PMID 33264544, RESULTS: \"Treatment-related adverse events of grade 3 or higher occurred in 22% of the patients in the pembrolizumab group, as compared with 66% (including one patient who died) in the chemotherapy group.\"",
      "takeaway (16.5, 8.2, 0.60, 3, 22, 66): PubMed abstract PMID 33264544, RESULTS: \"At the second interim analysis, after a median follow-up (from randomization to data cutoff) of 32.4 months (range, 24.0 to 48.3), pembrolizumab was superior to chemotherapy with respect to progression-free survival (median, 16.5 vs. 8.2 months; hazard ratio, 0.60; 95% confidence interval [CI], 0.45 to 0.80;\"; RESULTS: \"Treatment-related adverse events of grade 3 or higher occurred in 22% of the patients in the pembrolizumab group, as compared with 66% (including one patient who died) in the chemotherapy group.\"",
      "limitations (13.7, 10.8, 24): PubMed abstract PMID 33264544, RESULTS: \"The estimated restricted mean survival after 24 months of follow-up was 13.7 months (range, 12.0 to 15.4) as compared with 10.8 months (range, 9.4 to 12.2).\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "keynote-522",
    "placeholder": false,
    "acronym": "KEYNOTE-522",
    "year": 2020,
    "yearLabel": "2020",
    "topic": "breast",
    "status": "published",
    "title": "Pembrolizumab for Early Triple-Negative Breast Cancer",
    "citation": "Schmid P, Cortes J, Pusztai L, and others. Pembrolizumab for Early Triple-Negative Breast Cancer. New England Journal of Medicine. 2020;382(9):810-821.",
    "pmid": "32101663",
    "doi": "10.1056/NEJMoa1910549",
    "design": "Phase 3 randomized trial (2:1). Neoadjuvant therapy was four cycles of pembrolizumab 200 mg or placebo every 3 weeks plus paclitaxel and carboplatin, then an additional four cycles of pembrolizumab or placebo with doxorubicin-cyclophosphamide or epirubicin-cyclophosphamide. After definitive surgery, adjuvant pembrolizumab or placebo was given every 3 weeks for up to nine cycles. The primary end points were pathological complete response at definitive surgery and event-free survival in the intention-to-treat population. Results are from the first interim analysis.",
    "population": "Patients with previously untreated stage II or stage III triple-negative breast cancer. The pathological complete response analysis used the first 602 patients who underwent randomization. Event-free survival was reported in 784 patients assigned to pembrolizumab-chemotherapy and 390 assigned to placebo-chemotherapy.",
    "intervention": "Pembrolizumab plus paclitaxel and carboplatin, then pembrolizumab plus an anthracycline-cyclophosphamide regimen, followed by adjuvant pembrolizumab (784 patients).",
    "comparator": "Placebo plus the same chemotherapy and adjuvant placebo (390 patients).",
    "primaryResult": "Among the first 602 patients, pathological complete response was 64.8% with pembrolizumab-chemotherapy versus 51.2% with placebo-chemotherapy (estimated difference 13.6 percentage points; 95% CI 5.4 to 21.8; P<0.001). After a median follow-up of 15.5 months, an event-free survival event (disease progression that precluded definitive surgery, local or distant recurrence or a second primary tumor, or death from any cause) occurred in 7.4% (58 of 784) with pembrolizumab-chemotherapy and 11.8% (46 of 390) with placebo-chemotherapy (hazard ratio 0.63; 95% CI 0.43 to 0.93). The abstract does not report a P value for event-free survival.",
    "safety": "Across all treatment phases, treatment-related adverse events of grade 3 or higher occurred in 78.0% with pembrolizumab-chemotherapy and 73.0% with placebo-chemotherapy, including death in 0.4% (3 patients) and 0.3% (1 patient), respectively.",
    "takeaway": "In previously untreated stage II or III triple-negative breast cancer, adding pembrolizumab to neoadjuvant chemotherapy, with adjuvant pembrolizumab after surgery, increased pathological complete response (64.8% versus 51.2% in the first 602 patients).",
    "limitations": "First interim analysis. Pathological complete response was reported in the first 602 patients, while event-free survival used the full assigned groups and had no P value in the abstract.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "32101663",
        "doi": "10.1056/NEJMoa1910549",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 2, 1, 200): PubMed abstract PMID 32101663, METHODS: \"In this phase 3 trial, we randomly assigned (in a 2:1 ratio) patients with previously untreated stage II or stage III triple-negative breast cancer to receive neoadjuvant therapy with four cycles of pembrolizumab (at a dose of 200 mg) every 3 weeks plus paclitaxel and carboplatin (784 patients; the pembrolizumab-chemotherapy group) or placebo every 3 weeks plus paclitaxel and carboplatin (390 patients; the placebo-chemotherapy group); the two groups then received an additional four cycles of pembrolizumab or placebo, and both groups received doxorubicin-cyclophosphamide or epirubicin-cyclophosphamide.\"",
      "population (602, 784, 390): PubMed abstract PMID 32101663, RESULTS: \"At the first interim analysis, among the first 602 patients who underwent randomization, the percentage of patients with a pathological complete response was 64.8% (95% confidence interval [CI], 59.9 to 69.5) in the pembrolizumab-chemotherapy group and 51.2% (95% CI, 44.1 to 58.3) in the placebo-chemotherapy group (estimated treatment difference, 13.6 percentage points; 95% CI, 5.4 to 21.8;\"; METHODS: \"In this phase 3 trial, we randomly assigned (in a 2:1 ratio) patients with previously untreated stage II or stage III triple-negative breast cancer to receive neoadjuvant therapy with four cycles of pembrolizumab (at a dose of 200 mg) every 3 weeks plus paclitaxel and carboplatin (784 patients; the pembrolizumab-chemotherapy group) or placebo every 3 weeks plus paclitaxel and carboplatin (390 patients; the placebo-chemotherapy group); the two groups then received an additional four cycles of pembrolizumab or placebo, and both groups received doxorubicin-cyclophosphamide or epirubicin-cyclophosphamide.\"",
      "intervention (784): PubMed abstract PMID 32101663, METHODS: \"In this phase 3 trial, we randomly assigned (in a 2:1 ratio) patients with previously untreated stage II or stage III triple-negative breast cancer to receive neoadjuvant therapy with four cycles of pembrolizumab (at a dose of 200 mg) every 3 weeks plus paclitaxel and carboplatin (784 patients; the pembrolizumab-chemotherapy group) or placebo every 3 weeks plus paclitaxel and carboplatin (390 patients; the placebo-chemotherapy group); the two groups then received an additional four cycles of pembrolizumab or placebo, and both groups received doxorubicin-cyclophosphamide or epirubicin-cyclophosphamide.\"",
      "comparator (390): PubMed abstract PMID 32101663, METHODS: \"In this phase 3 trial, we randomly assigned (in a 2:1 ratio) patients with previously untreated stage II or stage III triple-negative breast cancer to receive neoadjuvant therapy with four cycles of pembrolizumab (at a dose of 200 mg) every 3 weeks plus paclitaxel and carboplatin (784 patients; the pembrolizumab-chemotherapy group) or placebo every 3 weeks plus paclitaxel and carboplatin (390 patients; the placebo-chemotherapy group); the two groups then received an additional four cycles of pembrolizumab or placebo, and both groups received doxorubicin-cyclophosphamide or epirubicin-cyclophosphamide.\"",
      "primaryResult (602, 64.8, 51.2, 13.6, 95, 5.4, 21.8, 0.001, 15.5, 7.4, 58, 784, 11.8, 46, 390, 0.63, 0.43, 0.93): PubMed abstract PMID 32101663, RESULTS: \"At the first interim analysis, among the first 602 patients who underwent randomization, the percentage of patients with a pathological complete response was 64.8% (95% confidence interval [CI], 59.9 to 69.5) in the pembrolizumab-chemotherapy group and 51.2% (95% CI, 44.1 to 58.3) in the placebo-chemotherapy group (estimated treatment difference, 13.6 percentage points; 95% CI, 5.4 to 21.8;\"; RESULTS: \"After a median follow-up of 15.5 months (range, 2.7 to 25.0), 58 of 784 patients (7.4%) in the pembrolizumab-chemotherapy group and 46 of 390 patients (11.8%) in the placebo-chemotherapy group had disease progression that precluded definitive surgery, had local or distant recurrence or a second primary tumor, or died from any cause (hazard ratio, 0.63; 95% CI, 0.43 to 0.93).\"; RESULTS: \"P<0.001).\"",
      "safety (3, 78.0, 73.0, 0.4, 0.3, 1): PubMed abstract PMID 32101663, RESULTS: \"Across all treatment phases, the incidence of treatment-related adverse events of grade 3 or higher was 78.0% in the pembrolizumab-chemotherapy group and 73.0% in the placebo-chemotherapy group, including death in 0.4% (3 patients) and 0.3% (1 patient), respectively.\"",
      "takeaway (64.8, 51.2, 602): PubMed abstract PMID 32101663, RESULTS: \"At the first interim analysis, among the first 602 patients who underwent randomization, the percentage of patients with a pathological complete response was 64.8% (95% confidence interval [CI], 59.9 to 69.5) in the pembrolizumab-chemotherapy group and 51.2% (95% CI, 44.1 to 58.3) in the placebo-chemotherapy group (estimated treatment difference, 13.6 percentage points; 95% CI, 5.4 to 21.8;\"",
      "limitations (602): PubMed abstract PMID 32101663, RESULTS: \"At the first interim analysis, among the first 602 patients who underwent randomization, the percentage of patients with a pathological complete response was 64.8% (95% confidence interval [CI], 59.9 to 69.5) in the pembrolizumab-chemotherapy group and 51.2% (95% CI, 44.1 to 58.3) in the placebo-chemotherapy group (estimated treatment difference, 13.6 percentage points; 95% CI, 5.4 to 21.8;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "monarche",
    "placeholder": false,
    "acronym": "monarchE",
    "year": 2020,
    "yearLabel": "2020",
    "topic": "breast",
    "status": "published",
    "title": "Abemaciclib Combined With Endocrine Therapy for the Adjuvant Treatment of HR+, HER2-, Node-Positive, High-Risk, Early Breast Cancer (monarchE)",
    "citation": "Johnston SRD, Harbeck N, Hegg R, and others. Abemaciclib Combined With Endocrine Therapy for the Adjuvant Treatment of HR+, HER2-, Node-Positive, High-Risk, Early Breast Cancer (monarchE). Journal of Clinical Oncology. 2020;38(34):3987-3998.",
    "pmid": "32954927",
    "doi": "10.1200/JCO.20.02514",
    "design": "Open-label, phase 3 randomized trial (1:1). The primary end point was invasive disease-free survival. Results are from a preplanned efficacy interim analysis with 323 invasive disease-free survival events.",
    "population": "5,637 patients with hormone receptor-positive, HER2-negative, high-risk early breast cancer after surgery and, as indicated, radiotherapy and adjuvant or neoadjuvant chemotherapy. Eligibility required four or more positive nodes, or one to three nodes with tumor size of 5 cm or more, histologic grade 3, or central Ki-67 of 20% or more.",
    "intervention": "Standard adjuvant endocrine therapy plus abemaciclib (150 mg twice daily for 2 years).",
    "comparator": "Standard adjuvant endocrine therapy alone.",
    "primaryResult": "Abemaciclib plus endocrine therapy improved invasive disease-free survival (hazard ratio 0.75; 95% CI 0.60 to 0.93; P = .01). Two-year invasive disease-free survival was 92.2% versus 88.7%.",
    "safety": "Safety data were consistent with the known safety profile of abemaciclib.",
    "takeaway": "In high-risk, node-positive, hormone receptor-positive, HER2-negative early breast cancer, adding two years of abemaciclib to endocrine therapy improved invasive disease-free survival (two-year rates 92.2% versus 88.7%; hazard ratio 0.75).",
    "limitations": "Open-label interim analysis. The abstract gives no follow-up duration, no specific adverse event rates, and no overall survival data.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "32954927",
        "doi": "10.1200/JCO.20.02514",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 1, 323): PubMed abstract PMID 32954927, METHODS: \"Patients with four or more positive nodes, or one to three nodes and either tumor size ≥ 5 cm, histologic grade 3, or central Ki-67 ≥ 20%, were eligible and randomly assigned (1:1) to standard-of-care adjuvant endocrine therapy (ET) with or without abemaciclib (150 mg twice daily for 2 years).\"; RESULTS: \"At a preplanned efficacy interim analysis, among 5,637 randomly assigned patients, 323 IDFS events were observed in the intent-to-treat population.\"",
      "population (5637, 5, 3, 67, 20): PubMed abstract PMID 32954927, RESULTS: \"At a preplanned efficacy interim analysis, among 5,637 randomly assigned patients, 323 IDFS events were observed in the intent-to-treat population.\"; METHODS: \"Patients with four or more positive nodes, or one to three nodes and either tumor size ≥ 5 cm, histologic grade 3, or central Ki-67 ≥ 20%, were eligible and randomly assigned (1:1) to standard-of-care adjuvant endocrine therapy (ET) with or without abemaciclib (150 mg twice daily for 2 years).\"",
      "intervention (150, 2): PubMed abstract PMID 32954927, METHODS: \"Patients with four or more positive nodes, or one to three nodes and either tumor size ≥ 5 cm, histologic grade 3, or central Ki-67 ≥ 20%, were eligible and randomly assigned (1:1) to standard-of-care adjuvant endocrine therapy (ET) with or without abemaciclib (150 mg twice daily for 2 years).\"",
      "primaryResult (0.75, 95, 0.60, 0.93, .01, 92.2, 88.7): PubMed abstract PMID 32954927, RESULTS: \"Abemaciclib plus ET demonstrated superior IDFS versus ET alone (P = .01; hazard ratio, 0.75; 95% CI, 0.60 to 0.93), with 2-year IDFS rates of 92.2% versus 88.7%, respectively.\"",
      "takeaway (92.2, 88.7, 0.75): PubMed abstract PMID 32954927, RESULTS: \"Abemaciclib plus ET demonstrated superior IDFS versus ET alone (P = .01; hazard ratio, 0.75; 95% CI, 0.60 to 0.93), with 2-year IDFS rates of 92.2% versus 88.7%, respectively.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "profound",
    "placeholder": false,
    "acronym": "PROfound",
    "year": 2020,
    "yearLabel": "2020",
    "topic": "prostate",
    "status": "published",
    "title": "Olaparib for Metastatic Castration-Resistant Prostate Cancer",
    "citation": "de Bono J, Mateo J, Fizazi K, and others. Olaparib for Metastatic Castration-Resistant Prostate Cancer. New England Journal of Medicine. 2020;382(22):2091-2102.",
    "pmid": "32343890",
    "doi": "10.1056/NEJMoa1911440",
    "design": "Randomized, open-label, phase 3 trial (2:1). The primary end point was imaging-based progression-free survival in cohort A by blinded independent central review.",
    "population": "Men with metastatic castration-resistant prostate cancer that progressed on a new hormonal agent (for example enzalutamide or abiraterone), all with a qualifying homologous recombination repair gene alteration: cohort A (245 patients) had BRCA1, BRCA2, or ATM alterations; cohort B (142 patients) had alterations in any of 12 other prespecified genes.",
    "intervention": "Olaparib.",
    "comparator": "Physician's choice of enzalutamide or abiraterone.",
    "primaryResult": "In cohort A, median imaging-based progression-free survival was 7.4 months with olaparib versus 3.6 months with control (hazard ratio 0.34; 95% CI 0.25 to 0.47; P<0.001).",
    "secondaryResults": "Cohort A also showed significant benefit for confirmed objective response and time to pain progression. Median overall survival in cohort A was 18.5 versus 15.1 months; 81% of control patients with progression crossed over to olaparib. Imaging-based progression-free survival also favored olaparib in cohorts A and B combined.",
    "safety": "Anemia and nausea were the main toxic effects with olaparib.",
    "takeaway": "In metastatic castration-resistant prostate cancer with BRCA1, BRCA2, or ATM alterations after a new hormonal agent, olaparib prolonged median imaging-based progression-free survival over switching hormonal agents (7.4 versus 3.6 months; hazard ratio 0.34).",
    "limitations": "Open-label design. Crossover (81%) limits overall survival interpretation, and the abstract gives no overall survival hazard ratio or adverse event rates.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "32343890",
        "doi": "10.1056/NEJMoa1911440",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 2, 1): PubMed abstract PMID 32343890, METHODS: \"We conducted a randomized, open-label, phase 3 trial evaluating the PARP inhibitor olaparib in men with metastatic castration-resistant prostate cancer who had disease progression while receiving a new hormonal agent (e.g., enzalutamide or abiraterone).\"; METHODS: \"Cohort A (245 patients) had at least one alteration in BRCA1, BRCA2, or ATM; cohort B (142 patients) had alterations in any of 12 other prespecified genes, prospectively and centrally determined from tumor tissue.\"",
      "population (245, 142, 12): PubMed abstract PMID 32343890, METHODS: \"Cohort A (245 patients) had at least one alteration in BRCA1, BRCA2, or ATM; cohort B (142 patients) had alterations in any of 12 other prespecified genes, prospectively and centrally determined from tumor tissue.\"",
      "primaryResult (7.4, 3.6, 0.34, 95, 0.25, 0.47, 0.001): PubMed abstract PMID 32343890, RESULTS: \"In cohort A, imaging-based progression-free survival was significantly longer in the olaparib group than in the control group (median, 7.4 months vs. 3.6 months; hazard ratio for progression or death, 0.34; 95% confidence interval, 0.25 to 0.47;\"; RESULTS: \"P<0.001); a significant benefit was also observed with respect to the confirmed objective response rate and the time to pain progression.\"",
      "secondaryResults (18.5, 15.1, 81): PubMed abstract PMID 32343890, RESULTS: \"The median overall survival in cohort A was 18.5 months in the olaparib group and 15.1 months in the control group; 81% of the patients in the control group who had progression crossed over to receive olaparib.\"",
      "takeaway (7.4, 3.6, 0.34): PubMed abstract PMID 32343890, RESULTS: \"In cohort A, imaging-based progression-free survival was significantly longer in the olaparib group than in the control group (median, 7.4 months vs. 3.6 months; hazard ratio for progression or death, 0.34; 95% confidence interval, 0.25 to 0.47;\"",
      "limitations (81): PubMed abstract PMID 32343890, RESULTS: \"The median overall survival in cohort A was 18.5 months in the olaparib group and 15.1 months in the control group; 81% of the patients in the control group who had progression crossed over to receive olaparib.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "ascent",
    "placeholder": false,
    "acronym": "ASCENT",
    "year": 2021,
    "yearLabel": "2021",
    "topic": "breast",
    "status": "published",
    "title": "Sacituzumab Govitecan in Metastatic Triple-Negative Breast Cancer",
    "citation": "Bardia A, Hurvitz SA, Tolaney SM, and others. Sacituzumab Govitecan in Metastatic Triple-Negative Breast Cancer. New England Journal of Medicine. 2021;384(16):1529-1541.",
    "pmid": "33882206",
    "doi": "10.1056/NEJMoa2028485",
    "design": "Randomized, phase 3 trial. The primary end point was progression-free survival by blinded independent central review among patients without brain metastases.",
    "population": "468 patients without brain metastases who had relapsed or refractory metastatic triple-negative breast cancer; median age 54 years, and all had previous taxane use.",
    "intervention": "Sacituzumab govitecan (235 patients).",
    "comparator": "Single-agent chemotherapy of the physician's choice: eribulin, vinorelbine, capecitabine, or gemcitabine (233 patients).",
    "primaryResult": "Median progression-free survival was 5.6 months with sacituzumab govitecan versus 1.7 months with chemotherapy (hazard ratio for progression or death 0.41; 95% CI 0.32 to 0.52; P<0.001).",
    "secondaryResults": "Median overall survival was 12.1 versus 6.7 months (hazard ratio for death 0.48; 95% CI 0.38 to 0.59; P<0.001). Objective response occurred in 35% versus 5%.",
    "safety": "Treatment-related grade 3 or higher adverse events with sacituzumab govitecan versus chemotherapy included neutropenia (51% versus 33%), leukopenia (10% versus 5%), diarrhea (10% versus less than 1%), anemia (8% versus 5%), and febrile neutropenia (6% versus 2%). There were three deaths from adverse events in each group; none were considered related to sacituzumab govitecan.",
    "takeaway": "In relapsed or refractory metastatic triple-negative breast cancer, sacituzumab govitecan improved progression-free survival (5.6 versus 1.7 months) and overall survival (12.1 versus 6.7 months) over single-agent chemotherapy, with more neutropenia and diarrhea.",
    "limitations": "The primary analysis excluded patients with brain metastases. The comparator was single-agent chemotherapy of the physician's choice.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "33882206",
        "doi": "10.1056/NEJMoa2028485",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3): PubMed abstract PMID 33882206, METHODS: \"In this randomized, phase 3 trial, we evaluated sacituzumab govitecan as compared with single-agent chemotherapy of the physician's choice (eribulin, vinorelbine, capecitabine, or gemcitabine) in patients with relapsed or refractory metastatic triple-negative breast cancer.\"",
      "population (468, 54): PubMed abstract PMID 33882206, RESULTS: \"A total of 468 patients without brain metastases were randomly assigned to receive sacituzumab govitecan (235 patients) or chemotherapy (233 patients).\"; RESULTS: \"The median age was 54 years; all the patients had previous use of taxanes.\"",
      "intervention (235): PubMed abstract PMID 33882206, RESULTS: \"A total of 468 patients without brain metastases were randomly assigned to receive sacituzumab govitecan (235 patients) or chemotherapy (233 patients).\"",
      "comparator (233): PubMed abstract PMID 33882206, RESULTS: \"A total of 468 patients without brain metastases were randomly assigned to receive sacituzumab govitecan (235 patients) or chemotherapy (233 patients).\"",
      "primaryResult (5.6, 1.7, 0.41, 95, 0.32, 0.52, 0.001): PubMed abstract PMID 33882206, RESULTS: \"The median progression-free survival was 5.6 months (95% confidence interval [CI], 4.3 to 6.3; 166 events) with sacituzumab govitecan and 1.7 months (95% CI, 1.5 to 2.6; 150 events) with chemotherapy (hazard ratio for disease progression or death, 0.41; 95% CI, 0.32 to 0.52;\"; RESULTS: \"P<0.001).\"",
      "secondaryResults (12.1, 6.7, 0.48, 95, 0.38, 0.59, 0.001, 35, 5): PubMed abstract PMID 33882206, RESULTS: \"The median overall survival was 12.1 months (95% CI, 10.7 to 14.0) with sacituzumab govitecan and 6.7 months (95% CI, 5.8 to 7.7) with chemotherapy (hazard ratio for death, 0.48; 95% CI, 0.38 to 0.59;\"; RESULTS: \"P<0.001).\"; RESULTS: \"The percentage of patients with an objective response was 35% with sacituzumab govitecan and 5% with chemotherapy.\"",
      "safety (3, 51, 33, 10, 5, 1, 8, 6, 2): PubMed abstract PMID 33882206, RESULTS: \"The incidences of key treatment-related adverse events of grade 3 or higher were neutropenia (51% with sacituzumab govitecan and 33% with chemotherapy), leukopenia (10% and 5%), diarrhea (10% and <1%), anemia (8% and 5%), and febrile neutropenia (6% and 2%).\"",
      "takeaway (5.6, 1.7, 12.1, 6.7): PubMed abstract PMID 33882206, RESULTS: \"The median progression-free survival was 5.6 months (95% confidence interval [CI], 4.3 to 6.3; 166 events) with sacituzumab govitecan and 1.7 months (95% CI, 1.5 to 2.6; 150 events) with chemotherapy (hazard ratio for disease progression or death, 0.41; 95% CI, 0.32 to 0.52;\"; RESULTS: \"The median overall survival was 12.1 months (95% CI, 10.7 to 14.0) with sacituzumab govitecan and 6.7 months (95% CI, 5.8 to 7.7) with chemotherapy (hazard ratio for death, 0.48; 95% CI, 0.38 to 0.59;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "olympia",
    "placeholder": false,
    "acronym": "OlympiA",
    "year": 2021,
    "yearLabel": "2021",
    "topic": "breast",
    "status": "published",
    "title": "Adjuvant Olaparib for Patients with BRCA1- or BRCA2-Mutated Breast Cancer",
    "citation": "Tutt ANJ, Garber JE, Kaufman B, and others. Adjuvant Olaparib for Patients with BRCA1- or BRCA2-Mutated Breast Cancer. New England Journal of Medicine. 2021;384(25):2394-2405.",
    "pmid": "34081848",
    "doi": "10.1056/NEJMoa2105215",
    "design": "Phase 3, double-blind randomized trial (1:1). The primary end point was invasive disease-free survival. Results are from a prespecified event-driven interim analysis with a median follow-up of 2.5 years.",
    "population": "1836 patients with HER2-negative early breast cancer, germline BRCA1 or BRCA2 pathogenic or likely pathogenic variants, and high-risk clinicopathological factors, after local treatment and neoadjuvant or adjuvant chemotherapy.",
    "intervention": "Oral olaparib for 1 year.",
    "comparator": "Placebo for 1 year.",
    "primaryResult": "Three-year invasive disease-free survival was 85.9% with olaparib and 77.1% with placebo (difference 8.8 percentage points; 95% CI 4.5 to 13.0; hazard ratio 0.58; 99.5% CI 0.41 to 0.82; P<0.001).",
    "secondaryResults": "Three-year distant disease-free survival was 87.5% versus 80.4% (hazard ratio 0.57; 99.5% CI 0.39 to 0.83; P<0.001). There were 59 deaths with olaparib and 86 with placebo (hazard ratio 0.68; 99% CI 0.44 to 1.05; P = 0.02), not significant at the interim boundary of P<0.01.",
    "safety": "Safety data were consistent with known side effects of olaparib, with no excess serious adverse events or adverse events of special interest. Olaparib had limited effects on global patient-reported quality of life.",
    "takeaway": "In high-risk HER2-negative early breast cancer with germline BRCA1 or BRCA2 variants, one year of adjuvant olaparib improved three-year invasive disease-free survival (85.9% versus 77.1%; hazard ratio 0.58).",
    "limitations": "Interim analysis; the overall survival difference did not cross its interim significance boundary. Applies only to patients with germline BRCA1 or BRCA2 variants.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "34081848",
        "doi": "10.1056/NEJMoa2105215",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 1, 2.5): PubMed abstract PMID 34081848, METHODS: \"We conducted a phase 3, double-blind, randomized trial involving patients with human epidermal growth factor receptor 2 (HER2)-negative early breast cancer with BRCA1 or BRCA2 germline pathogenic or likely pathogenic variants and high-risk clinicopathological factors who had received local treatment and neoadjuvant or adjuvant chemotherapy.\"; RESULTS: \"At a prespecified event-driven interim analysis with a median follow-up of 2.5 years, the 3-year invasive disease-free survival was 85.9% in the olaparib group and 77.1% in the placebo group (difference, 8.8 percentage points; 95% confidence interval [CI], 4.5 to 13.0; hazard ratio for invasive disease or death, 0.58; 99.5% CI, 0.41 to 0.82;\"",
      "population (1836): PubMed abstract PMID 34081848, RESULTS: \"A total of 1836 patients underwent randomization.\"",
      "intervention (1): PubMed abstract PMID 34081848, TITLE: \"Adjuvant Olaparib for Patients with BRCA1- or BRCA2-Mutated Breast Cancer.\"",
      "comparator (1): PubMed abstract PMID 34081848, TITLE: \"Adjuvant Olaparib for Patients with BRCA1- or BRCA2-Mutated Breast Cancer.\"",
      "primaryResult (85.9, 77.1, 8.8, 95, 4.5, 13.0, 0.58, 99.5, 0.41, 0.82, 0.001): PubMed abstract PMID 34081848, RESULTS: \"At a prespecified event-driven interim analysis with a median follow-up of 2.5 years, the 3-year invasive disease-free survival was 85.9% in the olaparib group and 77.1% in the placebo group (difference, 8.8 percentage points; 95% confidence interval [CI], 4.5 to 13.0; hazard ratio for invasive disease or death, 0.58; 99.5% CI, 0.41 to 0.82;\"; RESULTS: \"P<0.001).\"",
      "secondaryResults (87.5, 80.4, 0.57, 99.5, 0.39, 0.83, 0.001, 59, 86, 0.68, 99, 0.44, 1.05, 0.02, 0.01): PubMed abstract PMID 34081848, RESULTS: \"The 3-year distant disease-free survival was 87.5% in the olaparib group and 80.4% in the placebo group (difference, 7.1 percentage points; 95% CI, 3.0 to 11.1; hazard ratio for distant disease or death, 0.57; 99.5% CI, 0.39 to 0.83;\"; RESULTS: \"P<0.001).\"; RESULTS: \"Olaparib was associated with fewer deaths than placebo (59 and 86, respectively) (hazard ratio, 0.68; 99% CI, 0.44 to 1.05;\"; RESULTS: \"P = 0.02); however, the between-group difference was not significant at an interim-analysis boundary of a P value of less than 0.01.\"",
      "takeaway (85.9, 77.1, 0.58): PubMed abstract PMID 34081848, RESULTS: \"At a prespecified event-driven interim analysis with a median follow-up of 2.5 years, the 3-year invasive disease-free survival was 85.9% in the olaparib group and 77.1% in the placebo group (difference, 8.8 percentage points; 95% confidence interval [CI], 4.5 to 13.0; hazard ratio for invasive disease or death, 0.58; 99.5% CI, 0.41 to 0.82;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "vision",
    "placeholder": false,
    "acronym": "VISION",
    "year": 2021,
    "yearLabel": "2021",
    "topic": "prostate",
    "status": "published",
    "title": "Lutetium-177-PSMA-617 for Metastatic Castration-Resistant Prostate Cancer",
    "citation": "Sartor O, de Bono J, Chi KN, and others. Lutetium-177-PSMA-617 for Metastatic Castration-Resistant Prostate Cancer. New England Journal of Medicine. 2021;385(12):1091-1103.",
    "pmid": "34161051",
    "doi": "10.1056/NEJMoa2107322",
    "design": "International, open-label, phase 3 randomized trial (2:1), June 2018 to mid-October 2019. Alternate primary end points were imaging-based progression-free survival and overall survival. Protocol-permitted standard care excluded chemotherapy, immunotherapy, radium-223, and investigational drugs. Median follow-up was 20.9 months.",
    "population": "831 patients (of 1179 screened) with metastatic castration-resistant prostate cancer previously treated with at least one androgen-receptor-pathway inhibitor and one or two taxane regimens, with PSMA-positive gallium-68 PSMA-11 PET-CT scans.",
    "intervention": "177Lu-PSMA-617 (7.4 GBq every 6 weeks for four to six cycles) plus protocol-permitted standard care.",
    "comparator": "Protocol-permitted standard care alone.",
    "primaryResult": "Median imaging-based progression-free survival was 8.7 versus 3.4 months (hazard ratio 0.40; 99.2% CI 0.29 to 0.57; P<0.001). Median overall survival was 15.3 versus 11.3 months (hazard ratio for death 0.62; 95% CI 0.52 to 0.74; P<0.001).",
    "secondaryResults": "All key secondary end points (objective response, disease control, and time to symptomatic skeletal events) significantly favored 177Lu-PSMA-617.",
    "safety": "Grade 3 or higher adverse events were more frequent with 177Lu-PSMA-617 (52.7% versus 38.0%), but quality of life was not adversely affected.",
    "takeaway": "In PSMA-positive metastatic castration-resistant prostate cancer after androgen-receptor-pathway inhibition and taxanes, adding 177Lu-PSMA-617 to standard care improved median overall survival (15.3 versus 11.3 months; hazard ratio 0.62) and imaging-based progression-free survival.",
    "limitations": "Open-label design. Standard care excluded chemotherapy and radium-223, and eligibility required a PSMA-positive PET scan.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "34161051",
        "doi": "10.1056/NEJMoa2107322",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 2, 1, 2018, 2019, 223, 20.9): PubMed abstract PMID 34161051, METHODS: \"We conducted an international, open-label, phase 3 trial evaluating 177Lu-PSMA-617 in patients who had metastatic castration-resistant prostate cancer previously treated with at least one androgen-receptor-pathway inhibitor and one or two taxane regimens and who had PSMA-positive gallium-68 (68Ga)-labeled PSMA-11 positron-emission tomographic-computed tomographic scans.\"; METHODS: \"Patients were randomly assigned in a 2:1 ratio to receive either 177Lu-PSMA-617 (7.4 GBq every 6 weeks for four to six cycles) plus protocol-permitted standard care or standard care alone.\"; RESULTS: \"From June 2018 to mid-October 2019, a total of 831 of 1179 screened patients underwent randomization.\"; METHODS: \"Protocol-permitted standard care excluded chemotherapy, immunotherapy, radium-223 (223Ra), and investigational drugs.\"; RESULTS: \"The median follow-up was 20.9 months. 177Lu-PSMA-617 plus standard care significantly prolonged, as compared with standard care, both imaging-based progression-free survival (median, 8.7 vs. 3.4 months; hazard ratio for progression or death, 0.40; 99.2% confidence interval [CI], 0.29 to 0.57;\"",
      "population (831, 1179, 68, 11): PubMed abstract PMID 34161051, RESULTS: \"From June 2018 to mid-October 2019, a total of 831 of 1179 screened patients underwent randomization.\"; METHODS: \"We conducted an international, open-label, phase 3 trial evaluating 177Lu-PSMA-617 in patients who had metastatic castration-resistant prostate cancer previously treated with at least one androgen-receptor-pathway inhibitor and one or two taxane regimens and who had PSMA-positive gallium-68 (68Ga)-labeled PSMA-11 positron-emission tomographic-computed tomographic scans.\"",
      "intervention (617, 7.4, 6): PubMed abstract PMID 34161051, METHODS: \"Patients were randomly assigned in a 2:1 ratio to receive either 177Lu-PSMA-617 (7.4 GBq every 6 weeks for four to six cycles) plus protocol-permitted standard care or standard care alone.\"",
      "primaryResult (8.7, 3.4, 0.40, 99.2, 0.29, 0.57, 0.001, 15.3, 11.3, 0.62, 95, 0.52, 0.74): PubMed abstract PMID 34161051, RESULTS: \"The median follow-up was 20.9 months. 177Lu-PSMA-617 plus standard care significantly prolonged, as compared with standard care, both imaging-based progression-free survival (median, 8.7 vs. 3.4 months; hazard ratio for progression or death, 0.40; 99.2% confidence interval [CI], 0.29 to 0.57;\"; RESULTS: \"P<0.001) and overall survival (median, 15.3 vs. 11.3 months; hazard ratio for death, 0.62; 95% CI, 0.52 to 0.74;\"",
      "secondaryResults (617): PubMed abstract PMID 34161051, TITLE: \"Lutetium-177-PSMA-617 for Metastatic Castration-Resistant Prostate Cancer.\"",
      "safety (3, 617, 52.7, 38.0): PubMed abstract PMID 34161051, RESULTS: \"The incidence of adverse events of grade 3 or above was higher with 177Lu-PSMA-617 than without (52.7% vs. 38.0%), but quality of life was not adversely affected.\"",
      "takeaway (617, 15.3, 11.3, 0.62): PubMed abstract PMID 34161051, TITLE: \"Lutetium-177-PSMA-617 for Metastatic Castration-Resistant Prostate Cancer.\"; RESULTS: \"P<0.001) and overall survival (median, 15.3 vs. 11.3 months; hazard ratio for death, 0.62; 95% CI, 0.52 to 0.74;\"",
      "limitations (223): PubMed abstract PMID 34161051, METHODS: \"Protocol-permitted standard care excluded chemotherapy, immunotherapy, radium-223 (223Ra), and investigational drugs.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "arasens",
    "placeholder": false,
    "acronym": "ARASENS",
    "year": 2022,
    "yearLabel": "2022",
    "topic": "prostate",
    "status": "published",
    "title": "Darolutamide and Survival in Metastatic, Hormone-Sensitive Prostate Cancer",
    "citation": "Smith MR, Hussain M, Saad F, and others. Darolutamide and Survival in Metastatic, Hormone-Sensitive Prostate Cancer. New England Journal of Medicine. 2022;386(12):1132-1142.",
    "pmid": "35179323",
    "doi": "10.1056/NEJMoa2119115",
    "design": "International, phase 3 randomized trial (1:1), placebo-controlled. The primary end point was overall survival; primary analysis data cutoff October 25, 2021.",
    "population": "1306 patients with metastatic, hormone-sensitive prostate cancer; 86.1% had metastatic disease at initial diagnosis.",
    "intervention": "Darolutamide 600 mg twice daily plus androgen-deprivation therapy and docetaxel (651 patients).",
    "comparator": "Placebo plus androgen-deprivation therapy and docetaxel (655 patients).",
    "primaryResult": "The risk of death was 32.5% lower with darolutamide (hazard ratio 0.68; 95% CI 0.57 to 0.80; P<0.001).",
    "secondaryResults": "Darolutamide showed consistent benefits across secondary end points and prespecified subgroups.",
    "safety": "Adverse events were similar between groups and most common during the overlapping docetaxel period. Grade 3 or 4 adverse events occurred in 66.1% with darolutamide and 63.5% with placebo; neutropenia was the most common (33.7% and 34.2%).",
    "takeaway": "In metastatic hormone-sensitive prostate cancer, adding darolutamide to androgen-deprivation therapy plus docetaxel lowered the risk of death (hazard ratio 0.68) with similar adverse event frequency (grade 3 or 4: 66.1% versus 63.5%).",
    "limitations": "The abstract does not give median overall survival. Every patient received docetaxel, so the result applies to triplet therapy.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "35179323",
        "doi": "10.1056/NEJMoa2119115",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 1, 25, 2021): PubMed abstract PMID 35179323, METHODS: \"In this international, phase 3 trial, we randomly assigned patients with metastatic, hormone-sensitive prostate cancer in a 1:1 ratio to receive darolutamide (at a dose of 600 mg [two 300-mg tablets] twice daily) or matching placebo, both in combination with androgen-deprivation therapy and docetaxel.\"; RESULTS: \"At the data cutoff date for the primary analysis (October 25, 2021), the risk of death was significantly lower, by 32.5%, in the darolutamide group than in the placebo group (hazard ratio 0.68; 95% confidence interval, 0.57 to 0.80;\"",
      "population (1306, 86.1): PubMed abstract PMID 35179323, RESULTS: \"The primary analysis involved 1306 patients (651 in the darolutamide group and 655 in the placebo group); 86.1% of the patients had disease that was metastatic at the time of the initial diagnosis.\"",
      "intervention (600, 651): PubMed abstract PMID 35179323, METHODS: \"In this international, phase 3 trial, we randomly assigned patients with metastatic, hormone-sensitive prostate cancer in a 1:1 ratio to receive darolutamide (at a dose of 600 mg [two 300-mg tablets] twice daily) or matching placebo, both in combination with androgen-deprivation therapy and docetaxel.\"; RESULTS: \"The primary analysis involved 1306 patients (651 in the darolutamide group and 655 in the placebo group); 86.1% of the patients had disease that was metastatic at the time of the initial diagnosis.\"",
      "comparator (655): PubMed abstract PMID 35179323, RESULTS: \"The primary analysis involved 1306 patients (651 in the darolutamide group and 655 in the placebo group); 86.1% of the patients had disease that was metastatic at the time of the initial diagnosis.\"",
      "primaryResult (32.5, 0.68, 95, 0.57, 0.80, 0.001): PubMed abstract PMID 35179323, RESULTS: \"At the data cutoff date for the primary analysis (October 25, 2021), the risk of death was significantly lower, by 32.5%, in the darolutamide group than in the placebo group (hazard ratio 0.68; 95% confidence interval, 0.57 to 0.80;\"; RESULTS: \"P<0.001).\"",
      "safety (3, 4, 66.1, 63.5, 33.7, 34.2): PubMed abstract PMID 35179323, RESULTS: \"The frequency of grade 3 or 4 adverse events was 66.1% in the darolutamide group and 63.5% in the placebo group; neutropenia was the most common grade 3 or 4 adverse event (in 33.7% and 34.2%, respectively).\"",
      "takeaway (0.68, 3, 4, 66.1, 63.5): PubMed abstract PMID 35179323, RESULTS: \"At the data cutoff date for the primary analysis (October 25, 2021), the risk of death was significantly lower, by 32.5%, in the darolutamide group than in the placebo group (hazard ratio 0.68; 95% confidence interval, 0.57 to 0.80;\"; RESULTS: \"The frequency of grade 3 or 4 adverse events was 66.1% in the darolutamide group and 63.5% in the placebo group; neutropenia was the most common grade 3 or 4 adverse event (in 33.7% and 34.2%, respectively).\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "destiny-breast03",
    "placeholder": false,
    "acronym": "DESTINY-Breast03",
    "year": 2022,
    "yearLabel": "2022",
    "topic": "breast",
    "status": "published",
    "title": "Trastuzumab Deruxtecan versus Trastuzumab Emtansine for Breast Cancer",
    "citation": "Cortés J, Kim SB, Chung WP, and others. Trastuzumab Deruxtecan versus Trastuzumab Emtansine for Breast Cancer. New England Journal of Medicine. 2022;386(12):1143-1154.",
    "pmid": "35320644",
    "doi": "10.1056/NEJMoa2115022",
    "design": "Phase 3, multicenter, open-label randomized trial. The primary end point was progression-free survival by blinded independent central review.",
    "population": "524 patients with HER2-positive metastatic breast cancer previously treated with trastuzumab and a taxane.",
    "intervention": "Trastuzumab deruxtecan.",
    "comparator": "Trastuzumab emtansine.",
    "primaryResult": "At 12 months, 75.8% with trastuzumab deruxtecan and 34.1% with trastuzumab emtansine were alive without disease progression (hazard ratio for progression or death 0.28; 95% CI 0.22 to 0.37; P<0.001).",
    "secondaryResults": "Twelve-month survival was 94.1% versus 85.9% (hazard ratio for death 0.55; 95% CI 0.36 to 0.86; prespecified significance boundary not reached). Overall response occurred in 79.7% versus 34.2%.",
    "safety": "Drug-related adverse events of grade 3 or 4 occurred in 45.1% with trastuzumab deruxtecan and 39.8% with trastuzumab emtansine. Adjudicated drug-related interstitial lung disease or pneumonitis occurred in 10.5% versus 1.9%; none were grade 4 or 5.",
    "takeaway": "In HER2-positive metastatic breast cancer after trastuzumab and a taxane, trastuzumab deruxtecan lowered the hazard of progression or death compared with trastuzumab emtansine (hazard ratio 0.28), with interstitial lung disease or pneumonitis in 10.5%.",
    "limitations": "Open-label design. Overall survival had not crossed its prespecified significance boundary at this analysis.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "35320644",
        "doi": "10.1056/NEJMoa2115022",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3): PubMed abstract PMID 35320644, METHODS: \"We conducted a phase 3, multicenter, open-label, randomized trial to compare the efficacy and safety of trastuzumab deruxtecan (a HER2 antibody-drug conjugate) with those of trastuzumab emtansine in patients with HER2-positive metastatic breast cancer previously treated with trastuzumab and a taxane.\"",
      "population (524): PubMed abstract PMID 35320644, RESULTS: \"Among 524 randomly assigned patients, the percentage of those who were alive without disease progression at 12 months was 75.8% (95% confidence interval [CI], 69.8 to 80.7) with trastuzumab deruxtecan and 34.1% (95% CI, 27.7 to 40.5) with trastuzumab emtansine (hazard ratio for progression or death from any cause, 0.28; 95% CI, 0.22 to 0.37;\"",
      "primaryResult (12, 75.8, 34.1, 0.28, 95, 0.22, 0.37, 0.001): PubMed abstract PMID 35320644, RESULTS: \"Among 524 randomly assigned patients, the percentage of those who were alive without disease progression at 12 months was 75.8% (95% confidence interval [CI], 69.8 to 80.7) with trastuzumab deruxtecan and 34.1% (95% CI, 27.7 to 40.5) with trastuzumab emtansine (hazard ratio for progression or death from any cause, 0.28; 95% CI, 0.22 to 0.37;\"; RESULTS: \"P<0.001).\"",
      "secondaryResults (94.1, 85.9, 0.55, 95, 0.36, 0.86, 79.7, 34.2): PubMed abstract PMID 35320644, RESULTS: \"The percentage of patients who were alive at 12 months was 94.1% (95% CI, 90.3 to 96.4) with trastuzumab deruxtecan and 85.9% (95% CI, 80.9 to 89.7) with trastuzumab emtansine (hazard ratio for death, 0.55; 95% CI, 0.36 to 0.86; prespecified significance boundary not reached).\"; RESULTS: \"An overall response (a complete or partial response) occurred in 79.7% (95% CI, 74.3 to 84.4) of the patients who received trastuzumab deruxtecan and in 34.2% (95% CI, 28.5 to 40.3) of those who received trastuzumab emtansine.\"",
      "safety (3, 4, 45.1, 39.8, 10.5, 1.9, 5): PubMed abstract PMID 35320644, RESULTS: \"The incidence of drug-related adverse events of any grade was 98.1% with trastuzumab deruxtecan and 86.6% with trastuzumab emtansine, and the incidence of drug-related adverse events of grade 3 or 4 was 45.1% and 39.8%, respectively.\"; RESULTS: \"Adjudicated drug-related interstitial lung disease or pneumonitis occurred in 10.5% of the patients in the trastuzumab deruxtecan group and in 1.9% of those in the trastuzumab emtansine group; none of these events were of grade 4 or 5.\"",
      "takeaway (0.28, 10.5): PubMed abstract PMID 35320644, RESULTS: \"Among 524 randomly assigned patients, the percentage of those who were alive without disease progression at 12 months was 75.8% (95% confidence interval [CI], 69.8 to 80.7) with trastuzumab deruxtecan and 34.1% (95% CI, 27.7 to 40.5) with trastuzumab emtansine (hazard ratio for progression or death from any cause, 0.28; 95% CI, 0.22 to 0.37;\"; RESULTS: \"Adjudicated drug-related interstitial lung disease or pneumonitis occurred in 10.5% of the patients in the trastuzumab deruxtecan group and in 1.9% of those in the trastuzumab emtansine group; none of these events were of grade 4 or 5.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "destiny-breast04",
    "placeholder": false,
    "acronym": "DESTINY-Breast04",
    "year": 2022,
    "yearLabel": "2022",
    "topic": "breast",
    "status": "published",
    "title": "Trastuzumab Deruxtecan in Previously Treated HER2-Low Advanced Breast Cancer",
    "citation": "Modi S, Jacot W, Yamashita T, and others. Trastuzumab Deruxtecan in Previously Treated HER2-Low Advanced Breast Cancer. New England Journal of Medicine. 2022;387(1):9-20.",
    "pmid": "35665782",
    "doi": "10.1056/NEJMoa2203690",
    "design": "Phase 3 randomized trial (2:1). The primary end point was progression-free survival in the hormone receptor-positive cohort. HER2-low was defined as IHC 1+, or IHC 2+ with negative in situ hybridization.",
    "population": "557 patients with HER2-low metastatic breast cancer after one or two previous lines of chemotherapy; 494 (88.7%) had hormone receptor-positive disease and 63 (11.3%) had hormone receptor-negative disease.",
    "intervention": "Trastuzumab deruxtecan.",
    "comparator": "Physician's choice of chemotherapy.",
    "primaryResult": "In the hormone receptor-positive cohort, median progression-free survival was 10.1 months with trastuzumab deruxtecan versus 5.4 months with physician's choice (hazard ratio 0.51; P<0.001).",
    "secondaryResults": "Overall survival in the hormone receptor-positive cohort was 23.9 versus 17.5 months (hazard ratio for death 0.64; P = 0.003). Among all patients, progression-free survival was 9.9 versus 5.1 months (hazard ratio 0.50; P<0.001) and overall survival 23.4 versus 16.8 months (hazard ratio 0.64; P = 0.001).",
    "safety": "Grade 3 or higher adverse events occurred in 52.6% with trastuzumab deruxtecan and 67.4% with physician's choice. Adjudicated drug-related interstitial lung disease or pneumonitis occurred in 12.1% with trastuzumab deruxtecan; 0.8% had grade 5 events.",
    "takeaway": "In previously treated HER2-low metastatic breast cancer, trastuzumab deruxtecan improved progression-free and overall survival over chemotherapy of the physician's choice (hormone receptor-positive cohort: 10.1 versus 5.4 months and 23.9 versus 17.5 months), with interstitial lung disease or pneumonitis in 12.1%.",
    "limitations": "The hormone receptor-negative group was small (63 patients). The abstract gives no confidence intervals for the hazard ratios.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "35665782",
        "doi": "10.1056/NEJMoa2203690",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 2, 1): PubMed abstract PMID 35665782, METHODS: \"We conducted a phase 3 trial involving patients with HER2-low metastatic breast cancer who had received one or two previous lines of chemotherapy.\"; METHODS: \"(Low expression of HER2 was defined as a score of 1+ on immunohistochemical [IHC] analysis or as an IHC score of 2+ and negative results on in situ hybridization.) Patients were randomly assigned in a 2:1 ratio to receive trastuzumab deruxtecan or the physician's choice of chemotherapy.\"",
      "population (557, 494, 88.7, 63, 11.3): PubMed abstract PMID 35665782, RESULTS: \"Of 557 patients who underwent randomization, 494 (88.7%) had hormone receptor-positive disease and 63 (11.3%) had hormone receptor-negative disease.\"",
      "primaryResult (10.1, 5.4, 0.51, 0.001): PubMed abstract PMID 35665782, RESULTS: \"In the hormone receptor-positive cohort, the median progression-free survival was 10.1 months in the trastuzumab deruxtecan group and 5.4 months in the physician's choice group (hazard ratio for disease progression or death, 0.51;\"; RESULTS: \"P<0.001), and overall survival was 23.9 months and 17.5 months, respectively (hazard ratio for death, 0.64;\"",
      "secondaryResults (23.9, 17.5, 0.64, 0.003, 9.9, 5.1, 0.50, 0.001, 23.4, 16.8): PubMed abstract PMID 35665782, RESULTS: \"P<0.001), and overall survival was 23.9 months and 17.5 months, respectively (hazard ratio for death, 0.64;\"; RESULTS: \"P = 0.003).\"; RESULTS: \"Among all patients, the median progression-free survival was 9.9 months in the trastuzumab deruxtecan group and 5.1 months in the physician's choice group (hazard ratio for disease progression or death, 0.50;\"; RESULTS: \"P<0.001), and overall survival was 23.4 months and 16.8 months, respectively (hazard ratio for death, 0.64;\"",
      "safety (3, 52.6, 67.4, 12.1, 0.8, 5): PubMed abstract PMID 35665782, RESULTS: \"Adverse events of grade 3 or higher occurred in 52.6% of the patients who received trastuzumab deruxtecan and 67.4% of those who received the physician's choice of chemotherapy.\"; RESULTS: \"Adjudicated, drug-related interstitial lung disease or pneumonitis occurred in 12.1% of the patients who received trastuzumab deruxtecan; 0.8% had grade 5 events.\"",
      "takeaway (10.1, 5.4, 23.9, 17.5, 12.1): PubMed abstract PMID 35665782, RESULTS: \"In the hormone receptor-positive cohort, the median progression-free survival was 10.1 months in the trastuzumab deruxtecan group and 5.4 months in the physician's choice group (hazard ratio for disease progression or death, 0.51;\"; RESULTS: \"P<0.001), and overall survival was 23.9 months and 17.5 months, respectively (hazard ratio for death, 0.64;\"; RESULTS: \"Adjudicated, drug-related interstitial lung disease or pneumonitis occurred in 12.1% of the patients who received trastuzumab deruxtecan; 0.8% had grade 5 events.\"",
      "limitations (63): PubMed abstract PMID 35665782, RESULTS: \"Of 557 patients who underwent randomization, 494 (88.7%) had hormone receptor-positive disease and 63 (11.3%) had hormone receptor-negative disease.\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "sunlight",
    "placeholder": false,
    "acronym": "SUNLIGHT",
    "year": 2023,
    "yearLabel": "2023",
    "topic": "colorectal",
    "status": "published",
    "title": "Trifluridine-Tipiracil and Bevacizumab in Refractory Metastatic Colorectal Cancer",
    "citation": "Prager GW, Taieb J, Fakih M, and others. Trifluridine-Tipiracil and Bevacizumab in Refractory Metastatic Colorectal Cancer. New England Journal of Medicine. 2023;388(18):1657-1667.",
    "pmid": "37133585",
    "doi": "10.1056/NEJMoa2214963",
    "design": "Randomized trial (1:1). The primary end point was overall survival; secondary end points were progression-free survival and safety, including time to worsening ECOG performance status.",
    "population": "Adults with refractory metastatic colorectal cancer who had received no more than two previous chemotherapy regimens for advanced disease (246 per group).",
    "intervention": "Trifluridine-tipiracil (FTD-TPI) plus bevacizumab.",
    "comparator": "FTD-TPI alone.",
    "primaryResult": "Median overall survival was 10.8 months with FTD-TPI plus bevacizumab versus 7.5 months with FTD-TPI alone (hazard ratio for death 0.61; 95% CI 0.49 to 0.77; P<0.001).",
    "secondaryResults": "Median progression-free survival was 5.6 versus 2.4 months (hazard ratio 0.44; 95% CI 0.36 to 0.54; P<0.001). Median time to worsening ECOG performance status was 9.3 versus 6.3 months (hazard ratio 0.54; 95% CI 0.43 to 0.67).",
    "safety": "The most common adverse events in both groups were neutropenia, nausea, and anemia. No treatment-related deaths were reported.",
    "takeaway": "In refractory metastatic colorectal cancer, adding bevacizumab to trifluridine-tipiracil improved median overall survival (10.8 versus 7.5 months; hazard ratio 0.61).",
    "limitations": "The comparator was FTD-TPI alone, not another active later-line regimen. Adverse event rates are not given in the abstract.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "37133585",
        "doi": "10.1056/NEJMoa2214963",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (1): PubMed abstract PMID 37133585, METHODS: \"We randomly assigned, in a 1:1 ratio, adult patients who had received no more than two previous chemotherapy regimens for the treatment of advanced colorectal cancer to receive FTD-TPI plus bevacizumab (combination group) or FTD-TPI alone (FTD-TPI group).\"",
      "population (246): PubMed abstract PMID 37133585, RESULTS: \"A total of 246 patients were assigned to each group.\"",
      "primaryResult (10.8, 7.5, 0.61, 95, 0.49, 0.77, 0.001): PubMed abstract PMID 37133585, RESULTS: \"The median overall survival was 10.8 months in the combination group and 7.5 months in the FTD-TPI group (hazard ratio for death, 0.61; 95% confidence interval [CI], 0.49 to 0.77;\"; RESULTS: \"P<0.001).\"",
      "secondaryResults (5.6, 2.4, 0.44, 95, 0.36, 0.54, 0.001, 9.3, 6.3, 0.43, 0.67): PubMed abstract PMID 37133585, RESULTS: \"The median progression-free survival was 5.6 months in the combination group and 2.4 months in the FTD-TPI group (hazard ratio for disease progression or death, 0.44; 95% CI, 0.36 to 0.54;\"; RESULTS: \"P<0.001).\"; RESULTS: \"The median time to worsening of the ECOG performance-status score from 0 or 1 to 2 or more was 9.3 months in the combination group and 6.3 months in the FTD-TPI group (hazard ratio, 0.54; 95% CI, 0.43 to 0.67).\"",
      "takeaway (10.8, 7.5, 0.61): PubMed abstract PMID 37133585, RESULTS: \"The median overall survival was 10.8 months in the combination group and 7.5 months in the FTD-TPI group (hazard ratio for death, 0.61; 95% confidence interval [CI], 0.49 to 0.77;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "adriatic",
    "placeholder": false,
    "acronym": "ADRIATIC",
    "year": 2024,
    "yearLabel": "2024",
    "topic": "lung",
    "status": "published",
    "title": "Durvalumab after Chemoradiotherapy in Limited-Stage Small-Cell Lung Cancer",
    "citation": "Cheng Y, Spigel DR, Cho BC, and others. Durvalumab after Chemoradiotherapy in Limited-Stage Small-Cell Lung Cancer. New England Journal of Medicine. 2024;391(14):1313-1327.",
    "pmid": "39268857",
    "doi": "10.1056/NEJMoa2404873",
    "design": "Phase 3, double-blind, randomized, placebo-controlled trial. Assignment was to durvalumab 1500 mg, durvalumab 1500 mg plus tremelimumab 75 mg (four doses only), or placebo, every 4 weeks for up to 24 months, stratified by disease stage (I or II versus III) and receipt of prophylactic cranial irradiation. This report is the first planned interim analysis of the two primary end points, overall survival and progression-free survival by blinded independent central review, for durvalumab versus placebo (data cutoff January 15, 2024). Results in the durvalumab-tremelimumab group remain blinded.",
    "population": "Patients with limited-stage small-cell lung cancer who did not have disease progression after standard concurrent platinum-based chemoradiotherapy: 264 assigned to durvalumab, 200 to durvalumab plus tremelimumab, and 266 to placebo.",
    "intervention": "Durvalumab 1500 mg every 4 weeks for up to 24 months.",
    "comparator": "Placebo every 4 weeks for up to 24 months.",
    "primaryResult": "Median overall survival was 55.9 months with durvalumab versus 33.4 months with placebo (hazard ratio for death 0.73; 98.321% CI 0.54 to 0.98; P = 0.01). Median progression-free survival was 16.6 versus 9.2 months (hazard ratio for progression or death 0.76; 97.195% CI 0.59 to 0.98; P = 0.02).",
    "safety": "Adverse events with a maximum grade of 3 or 4 occurred in 24.4% with durvalumab and 24.2% with placebo. Adverse events led to discontinuation in 16.4% versus 10.6% and to death in 2.7% versus 1.9%. Grade 3 or 4 pneumonitis or radiation pneumonitis occurred in 3.1% versus 2.6%.",
    "takeaway": "After concurrent platinum-based chemoradiotherapy without disease progression in limited-stage SCLC, durvalumab prolonged median overall survival (55.9 versus 33.4 months; hazard ratio 0.73) and progression-free survival (16.6 versus 9.2 months) compared with placebo.",
    "limitations": "First planned interim analysis. The durvalumab-tremelimumab group remains blinded. Overall survival and progression-free survival confidence intervals are 98.321% and 97.195%, respectively, not 95%.",
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed abstract",
        "pmid": "39268857",
        "doi": "10.1056/NEJMoa2404873",
        "note": "Structured abstract read from PubMed (efetch) on 2026-11-24."
      }
    ],
    "sourceNotes": [
      "design (3, 1500, 75, 4, 24, 15, 2024): PubMed abstract PMID 39268857, METHODS: \"In a phase 3, double-blind, randomized, placebo-controlled trial, we assigned patients to receive durvalumab at a dose of 1500 mg, durvalumab (1500 mg) plus tremelimumab at a dose of 75 mg (four doses only), or placebo every 4 weeks for up to 24 months.\"; METHODS: \"Results of the first planned interim analysis of the two primary end points of overall survival and progression-free survival (assessed on the basis of blinded independent central review according to the Response Evaluation Criteria in Solid Tumors, version 1.1) with durvalumab as compared with placebo (data cutoff date, January 15, 2024) are reported; results in the durvalumab-tremelimumab group remain blinded.\"",
      "population (264, 200, 266): PubMed abstract PMID 39268857, RESULTS: \"A total of 264 patients were assigned to the durvalumab group, 200 to the durvalumab-tremelimumab group, and 266 to the placebo group.\"",
      "intervention (1500, 4, 24): PubMed abstract PMID 39268857, METHODS: \"In a phase 3, double-blind, randomized, placebo-controlled trial, we assigned patients to receive durvalumab at a dose of 1500 mg, durvalumab (1500 mg) plus tremelimumab at a dose of 75 mg (four doses only), or placebo every 4 weeks for up to 24 months.\"",
      "comparator (4, 24): PubMed abstract PMID 39268857, METHODS: \"In a phase 3, double-blind, randomized, placebo-controlled trial, we assigned patients to receive durvalumab at a dose of 1500 mg, durvalumab (1500 mg) plus tremelimumab at a dose of 75 mg (four doses only), or placebo every 4 weeks for up to 24 months.\"",
      "primaryResult (55.9, 33.4, 0.73, 98.321, 0.54, 0.98, 0.01, 16.6, 9.2, 0.76, 97.195, 0.59, 0.02): PubMed abstract PMID 39268857, RESULTS: \"Durvalumab therapy led to significantly longer overall survival than placebo (median, 55.9 months [95% confidence interval {CI}, 37.3 to not reached] vs. 33.4 months [95% CI, 25.5 to 39.9]; hazard ratio for death, 0.73; 98.321% CI, 0.54 to 0.98;\"; RESULTS: \"P = 0.01), as well as to significantly longer progression-free survival (median 16.6 months [95% CI, 10.2 to 28.2] vs. 9.2 months [95% CI, 7.4 to 12.9]; hazard ratio for progression or death, 0.76; 97.195% CI, 0.59 to 0.98;\"; RESULTS: \"P = 0.02).\"",
      "safety (3, 4, 24.4, 24.2, 16.4, 10.6, 2.7, 1.9, 3.1, 2.6): PubMed abstract PMID 39268857, RESULTS: \"The incidence of adverse events with a maximum grade of 3 or 4 was 24.4% among patients receiving durvalumab and 24.2% among patients receiving placebo; adverse events led to discontinuation in 16.4% and 10.6% of the patients, respectively, and led to death in 2.7% and 1.9%.\"; RESULTS: \"Pneumonitis or radiation pneumonitis with a maximum grade of 3 or 4 occurred in 3.1% of the patients in the durvalumab group and in 2.6% of those in the placebo group.\"",
      "takeaway (55.9, 33.4, 0.73, 16.6, 9.2): PubMed abstract PMID 39268857, RESULTS: \"Durvalumab therapy led to significantly longer overall survival than placebo (median, 55.9 months [95% confidence interval {CI}, 37.3 to not reached] vs. 33.4 months [95% CI, 25.5 to 39.9]; hazard ratio for death, 0.73; 98.321% CI, 0.54 to 0.98;\"; RESULTS: \"P = 0.01), as well as to significantly longer progression-free survival (median 16.6 months [95% CI, 10.2 to 28.2] vs. 9.2 months [95% CI, 7.4 to 12.9]; hazard ratio for progression or death, 0.76; 97.195% CI, 0.59 to 0.98;\"",
      "limitations (98.321, 97.195, 95): PubMed abstract PMID 39268857, RESULTS: \"Durvalumab therapy led to significantly longer overall survival than placebo (median, 55.9 months [95% confidence interval {CI}, 37.3 to not reached] vs. 33.4 months [95% CI, 25.5 to 39.9]; hazard ratio for death, 0.73; 98.321% CI, 0.54 to 0.98;\"; RESULTS: \"P = 0.01), as well as to significantly longer progression-free survival (median 16.6 months [95% CI, 10.2 to 28.2] vs. 9.2 months [95% CI, 7.4 to 12.9]; hazard ratio for progression or death, 0.76; 97.195% CI, 0.59 to 0.98;\""
    ],
    "reviewedBy": ""
  },
  {
    "id": "clot",
    "placeholder": false,
    "acronym": "CLOT",
    "year": 2003,
    "yearLabel": "2003",
    "topic": "cancer-thrombosis",
    "status": "link-only",
    "title": "Low-molecular-weight heparin versus a coumarin for the prevention of recurrent venous thromboembolism in patients with cancer",
    "citation": "Lee AY, Levine MN, Baker RI, and others. Low-molecular-weight heparin versus a coumarin for the prevention of recurrent venous thromboembolism in patients with cancer. New England Journal of Medicine. 2003;349(2):146-153.",
    "pmid": "12853587",
    "doi": "10.1056/NEJMoa025313",
    "crossSite": {
      "site": "anticoag-timeline",
      "label": "Full trial card on the anticoagulation timeline",
      "id": "clot",
      "url": "https://rockyman10.github.io/anticoag-timeline/#/trial/clot"
    },
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed record (citation only)",
        "pmid": "12853587",
        "doi": "10.1056/NEJMoa025313",
        "note": "Citation, DOI and PMID verified in PubMed; no abstract numbers used."
      }
    ],
    "reviewedBy": ""
  },
  {
    "id": "catch",
    "placeholder": false,
    "acronym": "CATCH",
    "year": 2015,
    "yearLabel": "2015",
    "topic": "cancer-thrombosis",
    "status": "link-only",
    "title": "Tinzaparin vs Warfarin for Treatment of Acute Venous Thromboembolism in Patients With Active Cancer: A Randomized Clinical Trial",
    "citation": "Lee AYY, Kamphuisen PW, Meyer G, and others. Tinzaparin vs Warfarin for Treatment of Acute Venous Thromboembolism in Patients With Active Cancer: A Randomized Clinical Trial. JAMA. 2015;314(7):677-686.",
    "pmid": "26284719",
    "doi": "10.1001/jama.2015.9243",
    "crossSite": {
      "site": "anticoag-timeline",
      "label": "Full trial card on the anticoagulation timeline",
      "id": "catch",
      "url": "https://rockyman10.github.io/anticoag-timeline/#/trial/catch"
    },
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed record (citation only)",
        "pmid": "26284719",
        "doi": "10.1001/jama.2015.9243",
        "note": "Citation, DOI and PMID verified in PubMed; no abstract numbers used."
      }
    ],
    "reviewedBy": ""
  },
  {
    "id": "hokusai-vte-cancer",
    "placeholder": false,
    "acronym": "Hokusai VTE Cancer",
    "year": 2018,
    "yearLabel": "2018",
    "topic": "cancer-thrombosis",
    "status": "link-only",
    "title": "Edoxaban for the Treatment of Cancer-Associated Venous Thromboembolism",
    "citation": "Raskob GE, van Es N, Verhamme P, and others. Edoxaban for the Treatment of Cancer-Associated Venous Thromboembolism. New England Journal of Medicine. 2018;378(7):615-624.",
    "pmid": "29231094",
    "doi": "10.1056/NEJMoa1711948",
    "crossSite": {
      "site": "anticoag-timeline",
      "label": "Full trial card on the anticoagulation timeline",
      "id": "hokusai-vte-cancer",
      "url": "https://rockyman10.github.io/anticoag-timeline/#/trial/hokusai-vte-cancer"
    },
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed record (citation only)",
        "pmid": "29231094",
        "doi": "10.1056/NEJMoa1711948",
        "note": "Citation, DOI and PMID verified in PubMed; no abstract numbers used."
      }
    ],
    "reviewedBy": ""
  },
  {
    "id": "select-d",
    "placeholder": false,
    "acronym": "SELECT-D",
    "year": 2018,
    "yearLabel": "2018",
    "topic": "cancer-thrombosis",
    "status": "link-only",
    "title": "Comparison of an Oral Factor Xa Inhibitor With Low Molecular Weight Heparin in Patients With Cancer With Venous Thromboembolism: Results of a Randomized Trial (SELECT-D)",
    "citation": "Young AM, Marshall A, Thirlwall J, and others. Comparison of an Oral Factor Xa Inhibitor With Low Molecular Weight Heparin in Patients With Cancer With Venous Thromboembolism: Results of a Randomized Trial (SELECT-D). Journal of Clinical Oncology. 2018;36(20):2017-2023.",
    "pmid": "29746227",
    "doi": "10.1200/JCO.2018.78.8034",
    "crossSite": {
      "site": "anticoag-timeline",
      "label": "Full trial card on the anticoagulation timeline",
      "id": "select-d",
      "url": "https://rockyman10.github.io/anticoag-timeline/#/trial/select-d"
    },
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed record (citation only)",
        "pmid": "29746227",
        "doi": "10.1200/JCO.2018.78.8034",
        "note": "Citation, DOI and PMID verified in PubMed; no abstract numbers used."
      }
    ],
    "reviewedBy": ""
  },
  {
    "id": "avert",
    "placeholder": false,
    "acronym": "AVERT",
    "year": 2019,
    "yearLabel": "2019",
    "topic": "cancer-thrombosis",
    "status": "link-only",
    "title": "Apixaban to Prevent Venous Thromboembolism in Patients with Cancer",
    "citation": "Carrier M, Abou-Nassar K, Mallick R, and others. Apixaban to Prevent Venous Thromboembolism in Patients with Cancer. New England Journal of Medicine. 2019;380(8):711-719.",
    "pmid": "30511879",
    "doi": "10.1056/NEJMoa1814468",
    "crossSite": {
      "site": "anticoag-timeline",
      "label": "Full trial card on the anticoagulation timeline",
      "id": "avert",
      "url": "https://rockyman10.github.io/anticoag-timeline/#/trial/avert"
    },
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed record (citation only)",
        "pmid": "30511879",
        "doi": "10.1056/NEJMoa1814468",
        "note": "Citation, DOI and PMID verified in PubMed; no abstract numbers used."
      }
    ],
    "reviewedBy": ""
  },
  {
    "id": "cassini",
    "placeholder": false,
    "acronym": "CASSINI",
    "year": 2019,
    "yearLabel": "2019",
    "topic": "cancer-thrombosis",
    "status": "link-only",
    "title": "Rivaroxaban for Thromboprophylaxis in High-Risk Ambulatory Patients with Cancer",
    "citation": "Khorana AA, Soff GA, Kakkar AK, and others. Rivaroxaban for Thromboprophylaxis in High-Risk Ambulatory Patients with Cancer. New England Journal of Medicine. 2019;380(8):720-728.",
    "pmid": "30786186",
    "doi": "10.1056/NEJMoa1814630",
    "crossSite": {
      "site": "anticoag-timeline",
      "label": "Full trial card on the anticoagulation timeline",
      "id": "cassini",
      "url": "https://rockyman10.github.io/anticoag-timeline/#/trial/cassini"
    },
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed record (citation only)",
        "pmid": "30786186",
        "doi": "10.1056/NEJMoa1814630",
        "note": "Citation, DOI and PMID verified in PubMed; no abstract numbers used."
      }
    ],
    "reviewedBy": ""
  },
  {
    "id": "adam-vte",
    "placeholder": false,
    "acronym": "ADAM-VTE",
    "year": 2020,
    "yearLabel": "2020",
    "topic": "cancer-thrombosis",
    "status": "link-only",
    "title": "Apixaban and dalteparin in active malignancy-associated venous thromboembolism: The ADAM VTE trial",
    "citation": "McBane RD, Wysokinski WE, Le-Rademacher JG, and others. Apixaban and dalteparin in active malignancy-associated venous thromboembolism: The ADAM VTE trial. Journal of Thrombosis and Haemostasis. 2020;18(2):411-421.",
    "pmid": "31630479",
    "doi": "10.1111/jth.14662",
    "crossSite": {
      "site": "anticoag-timeline",
      "label": "Full trial card on the anticoagulation timeline",
      "id": "adam-vte",
      "url": "https://rockyman10.github.io/anticoag-timeline/#/trial/adam-vte"
    },
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed record (citation only)",
        "pmid": "31630479",
        "doi": "10.1111/jth.14662",
        "note": "Citation, DOI and PMID verified in PubMed; no abstract numbers used."
      }
    ],
    "reviewedBy": ""
  },
  {
    "id": "caravaggio",
    "placeholder": false,
    "acronym": "Caravaggio",
    "year": 2020,
    "yearLabel": "2020",
    "topic": "cancer-thrombosis",
    "status": "link-only",
    "title": "Apixaban for the Treatment of Venous Thromboembolism Associated with Cancer",
    "citation": "Agnelli G, Becattini C, Meyer G, and others. Apixaban for the Treatment of Venous Thromboembolism Associated with Cancer. New England Journal of Medicine. 2020;382(17):1599-1607.",
    "pmid": "32223112",
    "doi": "10.1056/NEJMoa1915103",
    "crossSite": {
      "site": "anticoag-timeline",
      "label": "Full trial card on the anticoagulation timeline",
      "id": "caravaggio",
      "url": "https://rockyman10.github.io/anticoag-timeline/#/trial/caravaggio"
    },
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed record (citation only)",
        "pmid": "32223112",
        "doi": "10.1056/NEJMoa1915103",
        "note": "Citation, DOI and PMID verified in PubMed; no abstract numbers used."
      }
    ],
    "reviewedBy": ""
  },
  {
    "id": "canvas",
    "placeholder": false,
    "acronym": "CANVAS",
    "year": 2023,
    "yearLabel": "2023",
    "topic": "cancer-thrombosis",
    "status": "link-only",
    "title": "Direct Oral Anticoagulants vs Low-Molecular-Weight Heparin and Recurrent VTE in Patients With Cancer: A Randomized Clinical Trial",
    "citation": "Schrag D, Uno H, Rosovsky R, and others. Direct Oral Anticoagulants vs Low-Molecular-Weight Heparin and Recurrent VTE in Patients With Cancer: A Randomized Clinical Trial. JAMA. 2023;329(22):1924-1933.",
    "pmid": "37266947",
    "doi": "10.1001/jama.2023.7843",
    "crossSite": {
      "site": "anticoag-timeline",
      "label": "Full trial card on the anticoagulation timeline",
      "id": "canvas",
      "url": "https://rockyman10.github.io/anticoag-timeline/#/trial/canvas"
    },
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed record (citation only)",
        "pmid": "37266947",
        "doi": "10.1001/jama.2023.7843",
        "note": "Citation, DOI and PMID verified in PubMed; no abstract numbers used."
      }
    ],
    "reviewedBy": ""
  },
  {
    "id": "api-cat",
    "placeholder": false,
    "acronym": "API-CAT",
    "year": 2025,
    "yearLabel": "2025",
    "topic": "cancer-thrombosis",
    "status": "link-only",
    "title": "Extended Reduced-Dose Apixaban for Cancer-Associated Venous Thromboembolism",
    "citation": "Mahé I, Carrier M, Mayeur D, and others. Extended Reduced-Dose Apixaban for Cancer-Associated Venous Thromboembolism. New England Journal of Medicine. 2025;392(14):1363-1373.",
    "pmid": "40162636",
    "doi": "10.1056/NEJMoa2416112",
    "crossSite": {
      "site": "anticoag-timeline",
      "label": "Full trial card on the anticoagulation timeline",
      "id": "api-cat",
      "url": "https://rockyman10.github.io/anticoag-timeline/#/trial/api-cat"
    },
    "guidelines": [],
    "sources": [
      {
        "label": "PubMed record (citation only)",
        "pmid": "40162636",
        "doi": "10.1056/NEJMoa2416112",
        "note": "Citation, DOI and PMID verified in PubMed; no abstract numbers used."
      }
    ],
    "reviewedBy": ""
  }
];
