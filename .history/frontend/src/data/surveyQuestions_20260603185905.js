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
      options: ["Dưới 18", "18–25", "26–35", "36–50", "Trên 50"],
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
  B: [
    {
      id: "sleep_problem",
      type: "radio",
      question:
        "Người lớn tuổi trong gia đình bạn có gặp vấn đề về giấc ngủ không?",
      options: ["Thường xuyên", "Thỉnh thoảng", "Hiếm khi", "Không"],
    },

    {
      id: "sleep_issue",
      type: "checkbox",
      question: "Các vấn đề thường gặp là gì?",
      options: [
        "Khó ngủ",
        "Mất ngủ",
        "Thức giấc giữa đêm",
        "Ngáy lớn",
        "Khó thở khi ngủ",
        "Khác",
      ],
    },

    {
      id: "worry",
      type: "radio",
      question:
        "Bạn có từng lo lắng về sức khỏe người lớn tuổi vào ban đêm không?",
      options: ["Rất lo lắng", "Có lo lắng", "Bình thường", "Không"],
    },

    {
      id: "sleep_apnea",
      type: "radio",
      question: "Bạn có từng nghe về hội chứng ngưng thở khi ngủ chưa?",
      options: ["Có", "Chưa"],
    },

    {
      id: "danger",
      type: "radio",
      question: "Theo bạn, ngưng thở khi ngủ có nguy hiểm không?",
      options: ["Rất nguy hiểm", "Có nguy hiểm", "Bình thường", "Không biết"],
    },
  ],
  C: [
    {
      id: "idea",
      type: "radio",
      question:
        "Bạn thấy ý tưởng gối thông minh theo dõi sức khỏe như thế nào?",
      options: ["Rất sáng tạo", "Hữu ích", "Bình thường", "Không cần thiết"],
    },

    {
      id: "favorite_feature",
      type: "radio",
      question: "Bạn thích điểm nào nhất của sản phẩm?",
      options: [
        "Không cần đeo thiết bị",
        "Theo dõi nhịp tim",
        "Phát hiện ngưng thở",
        "Gửi cảnh báo",
        "Theo dõi giấc ngủ",
      ],
    },
  ],
  D: [
    {
      id: "price",
      type: "radio",
      question: "Bạn sẵn sàng chi bao nhiêu cho sản phẩm này?",
      options: ["Dưới 3 triệu", "3-4 triệu", "4-6 triệu", "Trên 6 triệu"],
    },

    {
      id: "buy",
      type: "radio",
      question: "Bạn có sẵn sàng mua sản phẩm này trong tương lai không?",
      options: ["Có", "Có thể", "Không"],
    },
  ],
  E: [
    {
      id: "improve",
      type: "textarea",
      question: "Theo bạn, sản phẩm cần cải thiện điều gì?",
    },

    {
      id: "feature",
      type: "textarea",
      question: "Bạn mong muốn thêm tính năng nào khác?",
    },

    {
      id: "feedback",
      type: "textarea",
      question: "Bạn có góp ý gì cho dự án Respyn?",
    },
  ],
};
export default surveyQuestions;
