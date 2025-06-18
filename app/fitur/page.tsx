import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sword, Shield, Crown, Zap, Users, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FiturPage() {
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
              <Link href="/fitur" className="text-yellow-400 font-semibold">
                Fitur
              </Link>
              <Link href="/galeri" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Galeri
              </Link>
              <Link href="/bergabung" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Bergabung
              </Link>
              <Link href="/rules" className="text-gray-300 hover:text-yellow-400 transition-colors">
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
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
            <Badge className="mb-6 bg-red-900 text-red-100 hover:bg-red-800 border-red-700">
              🎮 Fitur Server Bedrock
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6">
              Fitur Epik
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600">
                Valmoris Dominion
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Temukan semua fitur amazing yang membuat Valmoris Dominion menjadi server Minecraft medieval RPG terbaik
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mb-4">
                  <Sword className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-100">Dungeon Epik</CardTitle>
                <CardDescription className="text-gray-400">
                  Jelajahi 5+ dungeon buatan tangan yang dipenuhi harta karun, jebakan mematikan, dan jarahan
                  legendaris. Setiap dungeon memiliki tema dan tingkat kesulitan yang berbeda.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-100">Boss Legendaris</CardTitle>
                <CardDescription className="text-gray-400">
                  Hadapi 10+ boss epik dengan mekanik unik, AI cerdas, dan drop rate langka. Dari Dragon Lord hingga
                  Lich King, setiap boss memberikan tantangan berbeda.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-100">Armor & Senjata Kustom</CardTitle>
                <CardDescription className="text-gray-400">
                  Temukan banyak item kustom dengan stats unik, enchantment khusus, dan visual yang menakjubkan. Dari
                  pedang legendaris hingga armor set mythical.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-100">Sistem RPG Lengkap</CardTitle>
                <CardDescription className="text-gray-400">
                  SOON!!
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-100">Guild & Kingdom System</CardTitle>
                <CardDescription className="text-gray-400">
                  SOON!!
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-100">Event & Quest System</CardTitle>
                <CardDescription className="text-gray-400">
                  SOON!!
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Additional Features */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-100 text-center mb-12">Fitur Tambahan</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-gray-100">🏰 World Building</CardTitle>
                  <CardDescription className="text-gray-400">
                    • Custom terrain generation dengan biome medieval
                    <br />• Struktur kota, kastil, dan village yang detail
                    <br />• NPC dengan AI dan quest system
                    <br />• Economy system dengan currency dan trading
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-gray-100">⚔️ Combat System</CardTitle>
                  <CardDescription className="text-gray-400">
                    • SOON!!
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-gray-100">🎨 Customization</CardTitle>
                  <CardDescription className="text-gray-400">
                    • SOON!!
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-gray-100">🌐 Community</CardTitle>
                  <CardDescription className="text-gray-400">
                    • 24/7 Support staff dan admin
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold text-gray-100 mb-6">Siap Memulai Petualangan?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pemain lain dan rasakan pengalaman RPG medieval terbaik di Minecraft!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/bergabung">
                <Button size="lg" className="bg-red-700 hover:bg-red-600 text-white px-8 py-3">
                  Bergabung Sekarang
                </Button>
              </Link>
              <Link href="/galeri">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-slate-800 px-8 py-3"
                >
                  Lihat Galeri
                </Button>
              </Link>
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
              <h4 className="font-bold text-gray-100 mb-4">Link</h4>
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
            <p>&copy; 2025 Valmoris Dominion. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
