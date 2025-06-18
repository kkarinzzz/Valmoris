import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Crown, ArrowLeft, ImageIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GaleriPage() {
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
              <Link href="/galeri" className="text-yellow-400 font-semibold">
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
              🖼️ Galeri Server Bedrock
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6">
              Galeri
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600">
                Valmoris
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Saksikan keindahan dan kemegahan dunia Valmoris Dominion melalui koleksi screenshot terbaik
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <div className="aspect-video relative">
                <Image
                  src="/images/cathedral.png?height=400&width=600"
                  alt="Cathedral Valmoris"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">🏰 Cathedral Valmoris</h3>
                <p className="text-gray-400">
                  Pusat awal mula dimulai petualangan
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <div className="aspect-video relative">
                <Image
                  src="/images/lobby.png?height=400&width=600"
                  alt="Lobby server"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">⚔️ Lobby server</h3>
                <p className="text-gray-400">
                  Lobby server Valmoris Dominion
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <div className="aspect-video relative">
                <Image
                  src="/images/village/png?height=400&width=600"
                  alt="Mountain Village"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">🗡️ Village</h3>
                <p className="text-gray-400">
                  Masih terjangkau untuk awal mula
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <div className="aspect-video relative">
                <Image
                  src="/images/boss.png?height=400&width=600"
                  alt="Boss server"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">🏘️ Boss</h3>
                <p className="text-gray-400">
                  Boss server, ada banyak ygy
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <div className="aspect-video relative">
                <Image
                  src="/images/player.png?height=400&width=600"
                  alt="Player"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">🐉 Player</h3>
                <p className="text-gray-400">
                  Member
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <div className="aspect-video relative">
                <Image
                  src="https://i.pinimg.com/736x/29/d6/22/29d622c104fb4aacd8e06692398a9758.jpg?height=400&width=600"
                  alt="EasterEgg"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">👑 Hehe</h3>
                <p className="text-gray-400">
                  EasterEgg
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-20 text-center">
            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <ImageIcon className="h-12 w-12 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Ingin Lihat Lebih Banyak?</h3>
                <p className="text-gray-400 mb-6">
                  Bergabunglah dengan Discord kami untuk melihat lebih banyak screenshot, video gameplay, dan update
                  terbaru dari server!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://discord.gg/VvgeYUxXHp" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2">Join Discord</Button>
                  </a>
                  <Link href="/bergabung">
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-slate-800 px-6 py-2">
                      Cara Bergabung
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold text-gray-100 mb-6">Siap Menjadi Bagian dari Legenda?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pemain lain dan ciptakan cerita epikmu sendiri di Valmoris Dominion!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/bergabung">
                <Button size="lg" className="bg-red-700 hover:bg-red-600 text-white px-8 py-3">
                  Bergabung Sekarang
                </Button>
              </Link>
              <Link href="/fitur">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-slate-800 px-8 py-3"
                >
                  Lihat Fitur
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
                <p>IP: valmoris.my.id:19105</p>
                <p>Versi: 1.21.x</p>
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
