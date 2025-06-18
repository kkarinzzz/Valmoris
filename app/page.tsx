"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Copy, Sword, Crown, Users, MapPin, Check } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function Component() {
  const [copied, setCopied] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const copyServerInfo = () => {
    navigator.clipboard.writeText("IP: valmoris.my.id | Port: 19105")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-black">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Crown className="h-6 w-6 md:h-8 md:w-8 text-yellow-400" />
              <h1 className="text-lg md:text-2xl font-bold text-gray-100">Valmoris Dominion</h1>
            </Link>

            {/* Desktop Navigation */}
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
              <Link href="/rules" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Rules
              </Link>
              <a
                href="https://discord.gg/VvgeYUxXHp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                </svg>
                Discord
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-yellow-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/fitur"
                  className="text-gray-300 hover:text-yellow-400 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Fitur
                </Link>
                <Link
                  href="/galeri"
                  className="text-gray-300 hover:text-yellow-400 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Galeri
                </Link>
                <Link
                  href="/bergabung"
                  className="text-gray-300 hover:text-yellow-400 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bergabung
                </Link>
                <Link
                  href="/rules"
                  className="text-gray-300 hover:text-yellow-400 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Rules
                </Link>
                <a
                  href="https://discord.gg/VvgeYUxXHp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                  </svg>
                  Discord
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 md:mb-6 bg-red-900 text-red-100 hover:bg-red-800 border-red-700 text-xs md:text-sm">
              🏰 Server RPG Medieval Bedrock
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-100 mb-4 md:mb-6 leading-tight">
              Selamat Datang di
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600">
                Valmoris Dominion
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Mulailah petualangan epik medieval di server RPG kustom kami. Jelajahi dungeon, lawan boss legendaris, dan
              tempa takdirmu di kerajaan Valmoris!
            </p>

            {/* Server Info Card */}
            <Card className="max-w-sm md:max-w-md mx-auto mb-6 md:mb-8 border-slate-600 bg-slate-800/80 backdrop-blur-sm">
              <CardHeader className="pb-2 md:pb-3">
                <CardTitle className="text-gray-100 flex items-center justify-center gap-2 text-lg md:text-xl">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                  Informasi Server
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center space-y-3">
                  <div>
                    <p className="text-xs md:text-sm text-gray-400 mb-1">IP Server</p>
                    <div className="flex items-center justify-center gap-2 p-2 md:p-3 bg-slate-700 rounded-lg border border-slate-600">
                      <code className="text-sm md:text-lg font-mono text-yellow-400">valmoris.my.id</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          navigator.clipboard.writeText("valmoris.my.id")
                          setCopied(true)
                          setTimeout(() => setCopied(false), 2000)
                        }}
                        className="h-6 w-6 md:h-8 md:w-8 p-0 hover:bg-slate-600 text-gray-300"
                      >
                        {copied ? (
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-green-400" />
                        ) : (
                          <Copy className="h-3 w-3 md:h-4 md:w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400 mb-1">Port</p>
                    <div className="flex items-center justify-center gap-2 p-2 md:p-3 bg-slate-700 rounded-lg border border-slate-600">
                      <code className="text-sm md:text-lg font-mono text-yellow-400">19105</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          navigator.clipboard.writeText("19105")
                          setCopied(true)
                          setTimeout(() => setCopied(false), 2000)
                        }}
                        className="h-6 w-6 md:h-8 md:w-8 p-0 hover:bg-slate-600 text-gray-300"
                      >
                        {copied ? (
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-green-400" />
                        ) : (
                          <Copy className="h-3 w-3 md:h-4 md:w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-xs md:text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Online
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3 md:h-4 md:w-4" />
                    47/100 Pemain
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Link href="/bergabung">
                <Button
                  size="lg"
                  className="bg-red-700 hover:bg-red-600 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg w-full sm:w-auto"
                >
                  Bergabung Sekarang
                </Button>
              </Link>
              <Link href="/fitur">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-slate-800 px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg w-full sm:w-auto"
                >
                  Lihat Fitur
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features Preview */}
      <section className="py-12 md:py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-100 mb-3 md:mb-4">Mengapa Valmoris Dominion?</h2>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Server medieval terbaik dengan fitur RPG yang lengkap dan komunitas yang solid
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8 max-w-4xl mx-auto">
            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Sword className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <CardTitle className="text-gray-100 text-lg md:text-xl">RPG System</CardTitle>
                <CardDescription className="text-gray-400 text-sm md:text-base">
                  Sistem RPG lengkap dengan level, skill, dan progression yang mendalam
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Crown className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <CardTitle className="text-gray-100 text-lg md:text-xl">Medieval World</CardTitle>
                <CardDescription className="text-gray-400 text-sm md:text-base">
                  Dunia medieval yang immersive dengan kastil, kerajaan, dan guild system
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <CardTitle className="text-gray-100 text-lg md:text-xl">Active Community</CardTitle>
                <CardDescription className="text-gray-400 text-sm md:text-base">
                  Komunitas aktif dengan event rutin dan staff yang responsif
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link href="/fitur">
              <Button className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold px-6 md:px-8 py-2 md:py-3 text-sm md:text-base">
                Lihat Semua Fitur
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 px-4 bg-slate-900 text-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-yellow-400">Unlimited</div>
              <div className="text-gray-400 text-xs md:text-base">Pemain Terdaftar</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-red-400">5+</div>
              <div className="text-gray-400 text-xs md:text-base">Dungeon Kustom</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-purple-400">10+</div>
              <div className="text-gray-400 text-xs md:text-base">Boss Epik</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-green-400">99.9%</div>
              <div className="text-gray-400 text-xs md:text-base">Uptime</div>
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
