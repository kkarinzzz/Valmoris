import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Crown, ArrowLeft, Shield, AlertTriangle, MessageSquare, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-black">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Crown className="h-8 w-8 text-yellow-400" />
              <h1 className="text-2xl font-bold text-gray-100">Valmoris Dominion</h1>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/fitur" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Fitur
              </Link>
              <Link href="/galeri" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Galeri
              </Link>
              <Link href="/bergabung" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Bergabung
              </Link>
              <Link href="/rules" className="text-yellow-400 font-semibold">
                Rules
              </Link>
              <a
                href="https://discord.gg/VvgeYUxXHp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Discord
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
            <Badge className="mb-6 bg-red-900 text-red-100 hover:bg-red-800 border-red-700">
              🎮 Valmoris Dominion Rules Bedrock
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6">
              Aturan
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600">
                Server
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Baca dan pahami aturan server untuk pengalaman bermain yang menyenangkan bagi semua pemain
            </p>
          </div>

          {/* Global Rules */}
          <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-gray-100 text-2xl">🌐 GLOBAL RULES</CardTitle>
                  <CardDescription className="text-gray-400">
                    Aturan dasar yang berlaku untuk semua pemain
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Hormati semua pemain, no toxic atau bullying.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Dilarang cheat, hack, atau gunakan mod ilegal.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Dilarang griefing, stealing, dan trolling yang merugikan.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Jangan spam chat atau kirim konten tidak pantas.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Gunakan channel dan fitur sesuai fungsinya.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Jangan promosi server lain tanpa izin.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Server Policy */}
          <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-gray-100 text-2xl">📜 SERVER POLICY</CardTitle>
                  <CardDescription className="text-gray-400">Kebijakan dan panduan server</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <div className="flex items-start gap-3 p-3 bg-green-900/20 rounded-lg border border-green-700/30">
                  <div className="text-green-400 mt-1">✅</div>
                  <p className="text-gray-300">Main dengan fair dan sportif.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-900/20 rounded-lg border border-green-700/30">
                  <div className="text-green-400 mt-1">✅</div>
                  <p className="text-gray-300">Hormati keputusan staff dan admin.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
                  <div className="text-yellow-400 mt-1">⚠️</div>
                  <p className="text-gray-300">Pelanggaran berat bisa berujung ban permanen.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-900/20 rounded-lg border border-red-700/30">
                  <div className="text-red-400 mt-1">❗</div>
                  <p className="text-gray-300">
                    Server tidak bertanggung jawab atas kehilangan item akibat kesalahan pemain sendiri.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Punishment System */}
          <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-gray-100 text-2xl">📕 PUNISHMENT SYSTEM</CardTitle>
                  <CardDescription className="text-gray-400">Sistem hukuman untuk pelanggaran</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <div className="flex items-start gap-3 p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
                  <div className="text-yellow-400 mt-1">⚠️</div>
                  <p className="text-gray-300">Peringatan tertulis untuk pelanggaran ringan.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-orange-900/20 rounded-lg border border-orange-700/30">
                  <div className="text-orange-400 mt-1">⏰</div>
                  <p className="text-gray-300">Timeout 1–3 hari untuk pelanggaran menengah.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-900/20 rounded-lg border border-red-700/30">
                  <div className="text-red-400 mt-1">🔨</div>
                  <p className="text-gray-300">Ban sementara/permanen untuk pelanggaran berat (cheat, grief, dsb).</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-purple-900/20 rounded-lg border border-purple-700/30">
                  <div className="text-purple-400 mt-1">📌</div>
                  <p className="text-gray-300">Setiap keputusan tergantung penilaian staff/admin.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Report System */}
          <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-gray-100 text-2xl">🛠️ CARA MELAPORKAN PELANGGARAN</CardTitle>
                  <CardDescription className="text-gray-400">Langkah-langkah melaporkan pelanggaran</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-300">Kirim bukti (screenshot/video) via DM ke staff.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-300">Sertakan nama pelaku, waktu kejadian, dan deskripsi singkat.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-300">Hindari membalas dengan tindakan pribadi — laporkan saja.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-gray-100 text-2xl">❓ FAQ (PERTANYAAN UMUM)</CardTitle>
                  <CardDescription className="text-gray-400">Pertanyaan yang sering ditanyakan</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Q: Boleh pakai mod?</h4>
                  <p className="text-gray-300">
                    A: Boleh, selama tidak memberi keunggulan unfair (contoh: minimap = boleh, x-ray = tidak).
                  </p>
                </div>
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Q: Boleh bikin toko atau warp pribadi?</h4>
                  <p className="text-gray-300">A: Boleh, selama tidak mengganggu area publik/server.</p>
                </div>
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">
                    Q: Kalau item hilang karena bug, bisa dikembalikan?
                  </h4>
                  <p className="text-gray-300">A: Bisa, tapi hanya jika ada bukti kuat (screenshot atau log).</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-100 mb-6">Sudah Paham Aturannya?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan komunitas Valmoris Dominion dan nikmati pengalaman RPG medieval terbaik!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/bergabung">
                <Button size="lg" className="bg-red-700 hover:bg-red-600 text-white px-8 py-3">
                  Bergabung Sekarang
                </Button>
              </Link>
              <a href="https://discord.gg/VvgeYUxXHp" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-slate-800 px-8 py-3"
                >
                  Join Discord
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 px-4 mt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Crown className="h-6 w-6 text-yellow-400" />
                <h3 className="text-xl font-bold text-gray-100">Valmoris Dominion</h3>
              </div>
              <p className="text-gray-500">Pengalaman server Minecraft RPG medieval terbaik.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-100 mb-4">Link Cepat</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/rules" className="hover:text-yellow-400 transition-colors">
                    Aturan Server
                  </Link>
                </li>
                <li>
                  <a
                    href="https://discord.gg/VvgeYUxXHp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <Link href="/fitur" className="hover:text-yellow-400 transition-colors">
                    Fitur
                  </Link>
                </li>
                <li>
                  <Link href="/bergabung" className="hover:text-yellow-400 transition-colors">
                    Bantuan
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-100 mb-4">Info Server</h4>
              <div className="space-y-2 text-sm">
                <p>IP: Valmoris.my.id:19105</p>
                <p>Versi: 1.20.x</p>
                <p>Tipe: Medieval RPG</p>
                <p>Maks Pemain: 100</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="text-center text-gray-500">
            <p>&copy; 2024 Valmoris Dominion. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
