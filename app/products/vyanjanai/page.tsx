import Link from "next/link";

export default function VyanjanAIPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      <div className="absolute inset-0">

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[140px]" />

      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">

        <div className="max-w-4xl text-center">

          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-sm text-orange-400 mb-8">
            ✨ AI Powered Indian Cooking Assistant by Anup Thorat
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">

            VyanjanAI

          </h1>

          <p className="text-zinc-400 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">

            Create unique Indian recipes instantly using AI.
            Get creative cooking ideas, ingredient-based dishes,
            and smart recipe generation tailored for Indian kitchens.

          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">

            <Link
              href="/products/vyanjanai/signup"
              className="
                bg-orange-500
                hover:bg-orange-400
                transition-colors
                text-black
                px-8
                py-4
                rounded-2xl
                font-medium
                text-lg
              "
            >
              Create Account
            </Link>

            <Link
              href="/products/vyanjanai/login"
              className="
                bg-zinc-900
                border
                border-zinc-800
                hover:border-orange-500
                transition-all
                px-8
                py-4
                rounded-2xl
                font-medium
                text-lg
              "
            >
              Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}