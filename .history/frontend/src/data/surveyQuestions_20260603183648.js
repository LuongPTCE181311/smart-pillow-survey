const surveyQuestions = {
  A: [
    {
      id: "gender",
      type: "radio",
      question: "Giới tính của bạn?",
      options: ["Nam", "Nữ", "Khác"],
    },
    {
      id: "age",
      type: "radio",
      question: "Độ tuổi của bạn?",
      options: [
        "Dưới 18",
        "18–25",
        "26–35",
        "36–50",
        "Trên 50",
      ],
    },
    {
      id: "job",
      type: "radio",
      question: "Nghề nghiệp hiện tại của bạn?",
      options: [
        "Học sinh / Sinh viên",
        "Nhân viên văn phòng",
        "Kinh doanh",
        "Nội trợ",
        "Nghỉ hưu",
        "Khác",
      ],
    },
    {
      id: "living",
      type: "radio",
      question: "Bạn hiện đang:",
      options: [
        "Sống cùng người lớn tuổi",
        "Có người thân lớn tuổi ở xa",
        "Chăm sóc người lớn tuổi",
        "Không liên quan",
      ],
    },
    {
      id: "elderly",
      type: "radio",
      question: "Trong gia đình bạn có người trên 60 tuổi không?",
      options: ["Có", "Không"],
    },
  ],
  