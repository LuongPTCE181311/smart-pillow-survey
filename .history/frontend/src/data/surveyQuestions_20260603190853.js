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
    {
      id: "monitor_method",
      type: "radio",
      question:
        "Gia đình bạn hiện đang theo dõi sức khỏe người lớn tuổi bằng cách nào?",
      options: [
        "Theo dõi trực tiếp",
        "Smartwatch",
        "Camera",
        "Thiết bị y tế",
        "Chưa có giải pháp",
      ],
    },
    {
      id: "difficulty",
      type: "radio",
      question:
        "Theo bạn, khó khăn lớn nhất khi chăm sóc người lớn tuổi là gì?",
      options: [
        "Không thể theo dõi 24/7",
        "Thiếu kiến thức y tế",
        "Người lớn tuổi khó dùng công nghệ",
        "Chi phí cao",
        "Khác",
      ],
    },
    {
      id: "emergency",
      type: "radio",
      question:
        "Bạn có từng gặp trường hợp khẩn cấp về sức khỏe vào ban đêm chưa?",
      options: ["Có", "Chưa"],
    },
    {
      id: "importance",
      type: "radio",
      question:
        "Theo bạn, việc phát hiện sớm dấu hiệu bất thường khi ngủ có quan trọng không?",
      options: [
        "Rất quan trọng",
        "Quan trọng",
        "Bình thường",
        "Không quan trọng",
      ],
    },
    {
      id: "night_check",
      type: "radio",
      question:
        "Bạn có thường xuyên kiểm tra tình trạng sức khỏe người thân vào ban đêm không?",
      options: ["Có", "Thỉnh thoảng", "Hiếm khi", "Không"],
    },
  ],

  C: [
    {
      id: "idea",
      type: "radio",
      question:
        "Bạn thấy ý tưởng 'gối thông minh theo dõi sức khỏe' như thế nào?",
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
    {
      id: "better_than_watch",
      type: "radio",
      question:
        "Theo bạn, việc không cần đeo thiết bị có tiện lợi hơn smartwatch không?",
      options: ["Có", "Không", "Không chắc"],
    },
    {
      id: "easy_to_use",
      type: "radio",
      question: "Bạn có nghĩ người lớn tuổi sẽ dễ sử dụng sản phẩm này không?",
      options: ["Rất dễ", "Dễ", "Khó", "Rất khó"],
    },
    {
      id: "most_important_feature",
      type: "radio",
      question: "Bạn thấy chức năng nào quan trọng nhất?",
      options: [
        "Theo dõi nhịp tim",
        "Phát hiện khó thở",
        "Cảnh báo khẩn cấp",
        "Theo dõi giấc ngủ",
        "Báo thức rung",
      ],
    },
    {
      id: "phone_alert",
      type: "radio",
      question:
        "Bạn có muốn nhận cảnh báo qua điện thoại khi có bất thường không?",
      options: ["Có", "Không"],
    },
    {
      id: "alert_channel",
      type: "radio",
      question: "Theo bạn, cảnh báo nên gửi qua đâu?",
      options: ["Telegram", "Ứng dụng điện thoại", "SMS", "Cuộc gọi tự động"],
    },
    {
      id: "sleep_report",
      type: "radio",
      question: "Bạn có muốn xem thống kê giấc ngủ hàng ngày không?",
      options: ["Có", "Không"],
    },
    {
      id: "stroke_ai",
      type: "radio",
      question:
        "Bạn có quan tâm đến tính năng AI dự đoán nguy cơ đột quỵ không?",
      options: ["Rất quan tâm", "Có quan tâm", "Bình thường", "Không quan tâm"],
    },
    {
      id: "smart_home",
      type: "radio",
      question: "Bạn có muốn sản phẩm kết nối với nhà thông minh không?",
      options: ["Có", "Không"],
    },
  ],

  D: [
    {
      id: "budget",
      type: "radio",
      question: "Bạn sẵn sàng chi bao nhiêu cho sản phẩm này?",
      options: ["Dưới 3 triệu", "3–4 triệu", "4–6 triệu", "Trên 6 triệu"],
    },
    {
      id: "reasonable_price",
      type: "radio",
      question: "Theo bạn, mức giá nào là hợp lý nhất?",
      options: ["3 triệu", "3–5 triệu", "5–6 triệu", "Trên 6 triệu"],
    },
    {
      id: "buy_future",
      type: "radio",
      question: "Bạn có sẵn sàng mua sản phẩm này trong tương lai không?",
      options: ["Có", "Có thể", "Không"],
    },
    {
      id: "best_market",
      type: "radio",
      question: "Bạn nghĩ sản phẩm này phù hợp nhất ở đâu?",
      options: [
        "Gia đình",
        "Bệnh viện",
        "Trung tâm dưỡng lão",
        "Chăm sóc tại nhà",
      ],
    },
    {
      id: "recommend",
      type: "radio",
      question: "Bạn có sẵn sàng giới thiệu sản phẩm cho người khác không?",
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
      id: "additional_feature",
      type: "textarea",
      question: "Bạn mong muốn thêm tính năng nào khác?",
    },
    {
      id: "project_feedback",
      type: "textarea",
      question: "Bạn có góp ý gì cho dự án Respyn?",
    },
  ],
};

export default surveyQuestions;
