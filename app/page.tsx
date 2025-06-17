"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Copy, Sword, Shield, Crown, Zap, Users, MapPin, Clock, Check } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Component() {
  const [copied, setCopied] = useState(false)

  const copyServerInfo = () => {
    navigator.clipboard.writeText("valmoris.my.id:19105")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-black">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown className="h-8 w-8 text-yellow-400" />
              <h1 className="text-2xl font-bold text-gray-100">Valmoris Dominion</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Fitur
              </a>
              <a href="#gallery" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Galeri
              </a>
              <a href="#join" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Bergabung
              </a>
              <a
                href="https://discord.gg/VvgeYUxXHp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                </svg>
                Discord
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-red-900 text-red-100 hover:bg-red-800 border-red-700">
              🏰 Server RPG Medieval
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-6 leading-tight">
              Selamat Datang di
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600">
                Valmoris Dominion
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Mulailah petualangan epik medieval di server RPG kustom kami. Jelajahi dungeon, lawan boss legendaris, dan
              tempa takdirmu di kerajaan Valmoris!
            </p>

            {/* Server Info Card */}
            <Card className="max-w-md mx-auto mb-8 border-slate-600 bg-slate-800/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-gray-100 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Informasi Server
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-1">IP Server</p>
                  <div className="flex items-center justify-center gap-2 p-3 bg-slate-700 rounded-lg border border-slate-600">
                    <code className="text-lg font-mono text-yellow-400">valmoris.my.id:19105</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={copyServerInfo}
                      className="h-8 w-8 p-0 hover:bg-slate-600 text-gray-300"
                    >
                      {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Online
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    Unlimited Pemain
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button size="lg" className="bg-red-700 hover:bg-red-600 text-white px-8 py-3 text-lg">
              Bergabung Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">Fitur Epik Menanti</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Temukan apa yang membuat Valmoris Dominion menjadi pengalaman Minecraft medieval terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mb-4">
                  <Sword className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-100">Dungeon Epik</CardTitle>
                <CardDescription className="text-gray-400">
                  Jelajahi dungeon buatan tangan yang dipenuhi harta karun, jebakan, dan jarahan legendaris yang
                  menunggu untuk ditemukan.
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
                  Hadapi boss kuat dengan mekanik unik, drop langka, dan pengalaman pertempuran yang epik.
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
                  Buat dan temukan set armor serta senjata unik dengan kemampuan khusus dan enchantment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-100">Sistem RPG</CardTitle>
                <CardDescription className="text-gray-400">
                  Tingkatkan karaktermu dengan skill kustom, kemampuan, dan sistem progres yang dirancang untuk roleplay
                  medieval.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-100">Guild & Kerajaan</CardTitle>
                <CardDescription className="text-gray-400">
                  Bentuk aliansi, bangun kerajaan, dan terlibat dalam perang guild epik dengan pemain lain di seluruh
                  realm.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-100">Event Harian</CardTitle>
                <CardDescription className="text-gray-400">
                  Ikuti quest harian, event musiman, dan turnamen khusus dengan reward eksklusif.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">Galeri</h2>
            <p className="text-xl text-gray-300">Saksikan keindahan dan kemegahan Valmoris Dominion</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden border-slate-600 bg-slate-800/80 backdrop-blur-sm">
              <div className="aspect-video relative">
                <Image
                  src="/images/boss.jpg?height=400&width=600"
                  alt="Kastil medieval dan overview kerajaan"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">Kastil Agung</h3>
                <p className="text-gray-400">
                  Kastil pusat Valmoris yang megah, tempat para pemain berkumpul untuk event dan trading.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-slate-600 bg-slate-800/80 backdrop-blur-sm">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Interior dungeon epik dengan harta karun"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">Kedalaman Dungeon</h3>
                <p className="text-gray-400">
                  Jelajahi dungeon misterius yang dipenuhi harta karun kuno dan makhluk berbahaya.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-900 text-gray-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-yellow-400">Unlimited</div>
              <div className="text-gray-400">Pemain Terdaftar</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-red-400">10+</div>
              <div className="text-gray-400">Dungeon Kustom</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-purple-400">5+</div>
              <div className="text-gray-400">Boss Epik</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-green-400">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 px-4 bg-gradient-to-r from-red-900 via-purple-900 to-slate-900">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Petualangan Medievalmu Menanti</h2>
            <p className="text-xl text-gray-200 mb-8">
              Bergabunglah dengan ribuan pemain dalam pengalaman Minecraft medieval yang paling imersif. Tempa legendamu
              di Valmoris Dominion hari ini!
            </p>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-md mx-auto border border-slate-700">
              <p className="text-gray-200 mb-2">Salin ini untuk bergabung:</p>
              <div className="flex items-center justify-center gap-2 p-3 bg-black/40 rounded-lg border border-slate-600">
                <code className="text-lg font-mono text-yellow-400">valmoris.my.id:19105</code>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={copyServerInfo}
                  className="h-8 w-8 p-0 hover:bg-white/20 text-white"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-700 hover:bg-red-600 text-white px-8 py-3">
                Bergabung Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-white hover:bg-white/10 px-8 py-3"
                onClick={() => window.open("https://discord.gg/VvgeYUxXHp", "_blank")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-5 w-5"
                >
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                </svg>
                Gabung Discord
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 px-4">
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
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Aturan Server
                  </a>
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
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Bantuan
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-100 mb-4">Info Server</h4>
              <div className="space-y-2 text-sm">
                <p>IP: valmoris.my.id:19105</p>
                <p>Versi: 1.21.x</p>
                <p>Tipe: Medieval RPG</p>
                <p>Maks Pemain: Unlimited</p>
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
