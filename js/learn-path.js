/* Orientation path. Teaches the page shell. It does not state medication results. */
window.ONCOLOGY_LEARN_PATH = {
  meta: {
    id: "orientation",
    title: "Learn path",
    subtitle: "How this timeline is organized"
  },
  steps: [
    {
      id: "lanes",
      title: "Lanes and years",
      body: "Each lane is one tumor type: breast, lung, colorectal, and prostate cancer. A fifth lane links to cancer-associated thrombosis trials on the anticoagulation timeline. Years run along the top of the timeline, starting in 1999. A marker opens the trial card for that year."
    },
    {
      id: "snapshot",
      title: "Trial snapshot",
      body: "A marker opens one Trial snapshot. More details keeps the same fields, then adds limitations, any guideline that cites the trial, the locus for that citation, sources, and where the numbers were read.",
      action: { kind: "trial", id: "hera", label: "Open the HERA snapshot" }
    },
    {
      id: "links",
      title: "Links to the anticoagulation timeline",
      body: "Cancer-associated thrombosis trials are covered on the anticoagulation timeline. Their markers here open a short card with the citation and a link to the full card there.",
      action: { kind: "trial", id: "caravaggio", label: "Open the Caravaggio link card" }
    },
    {
      id: "practice",
      title: "Practice questions",
      body: "A few unofficial BCOP-style example questions are included. Study mode shows an explanation after an answer. Exam mode is timed and holds explanations until the sitting is submitted.",
      action: { kind: "practice", label: "Open a practice question" }
    }
  ]
};
