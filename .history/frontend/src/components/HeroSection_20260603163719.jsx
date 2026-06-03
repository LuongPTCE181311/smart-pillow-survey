<section className="container mx-auto px-6 py-12 lg:py-24">

  <div className="grid lg:grid-cols-2 gap-10 items-center">

    {/* LEFT */}

    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left"
    >
      <span
        className="
          inline-block
          bg-cyan-500/10
          border border-cyan-400/20
          text-cyan-300
          px-4 py-2
          rounded-full
          text-sm
        "
      >
        AI Healthcare Innovation
      </span>

      <h1
        className="
        mt-6
        font-bold
        leading-tight

        text-4xl
        sm:text-5xl
        lg:text-7xl
      "
      >
        Smart Pillow
        <br />
        For Elderly Care
      </h1>

      <p
        className="
        mt-6
        text-slate-300
        max-w-xl
        mx-auto
        lg:mx-0

        text-base
        sm:text-lg
      "
      >
        Theo dõi giấc ngủ, nhịp tim và phát hiện
        dấu hiệu bất thường của người cao tuổi
        theo thời gian thực.
      </p>

      <div
        className="
        mt-8
        flex
        flex-col
        sm:flex-row
        gap-4
        justify-center
        lg:justify-start
      "
      >
        <button
          className="
          px-8 py-4
          rounded-2xl
          bg-blue-600
          hover:bg-blue-500
          transition
        "
        >
          Bắt đầu khảo sát
        </button>

        <button
          className="
          px-8 py-4
          rounded-2xl
          border
          border-white/10
          bg-white/5
        "
        >
          Xem video
        </button>
      </div>
    </motion.div>

    {/* RIGHT */}

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className="
        relative
        rounded-3xl
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        p-8
      "
      >
        <img
          src={logo}
          alt="Smart Pillow"
          className="
          w-full
          max-w-md
          mx-auto
        "
        />
      </div>
    </motion.div>

  </div>

</section>