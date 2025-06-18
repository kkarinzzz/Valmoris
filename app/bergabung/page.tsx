"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Copy, Crown, ArrowLeft, Check, Download, Users, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function BergabungPage() {
  const [copied, setCopied] = useState(false)

  const copyServerInfo = () => {
    navigator.clipboard.writeText("IP: Valmoris.my.id | Port: 19105")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
              <Link href="/bergabung" className="text-yellow-400 font-semibold">
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
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
            <Badge className="mb-6 bg-red-900 text-red-100 hover:bg-red-800 border-red-700">🚀 Cara Bergabung</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6">
              Bergabung ke
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600">
                Valmoris Dominion
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ikuti langkah-langkah mudah ini untuk memulai petualangan epikmu di server RPG medieval terbaik!
            </p>
          </div>

          {/* Server Info Card */}
          <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-gray-100 text-2xl flex items-center justify-center gap-2">
                <Users className="h-6 w-6" />
                Informasi Server
              </CardTitle>
              <CardDescription className="text-gray-400">Salin informasi server ini untuk bergabung</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-2">IP Server</p>
                  <div className="flex items-center justify-center gap-2 p-4 bg-slate-700 rounded-lg border border-slate-600 max-w-md mx-auto">
                    <code className="text-xl font-mono text-yellow-400">Valmoris.my.id</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        navigator.clipboard.writeText("Valmoris.my.id")
                        setCopied(true)
                        setTimeout(() => setCopied(false), 2000)
                      }}
                      className="h-8 w-8 p-0 hover:bg-slate-600 text-gray-300"
                    >
                      {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Port</p>
                  <div className="flex items-center justify-center gap-2 p-4 bg-slate-700 rounded-lg border border-slate-600 max-w-md mx-auto">
                    <code className="text-xl font-mono text-yellow-400">19105</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        navigator.clipboard.writeText("19105")
                        setCopied(true)
                        setTimeout(() => setCopied(false), 2000)
                      }}
                      className="h-8 w-8 p-0 hover:bg-slate-600 text-gray-300"
                    >
                      {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                {copied && <p className="text-green-400 text-sm">✅ Berhasil disalin!</p>}
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
                <div className="p-3 bg-slate-700/50 rounded-lg">
                  <p className="text-gray-400">Versi</p>
                  <p className="text-yellow-400 font-semibold">Bedrock 1.20+</p>
                </div>
                <div className="p-3 bg-slate-700/50 rounded-lg">
                  <p className="text-gray-400">Status</p>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-green-400 font-semibold">Online</p>
                  </div>
                </div>
                <div className="p-3 bg-slate-700/50 rounded-lg">
                  <p className="text-gray-400">Pemain</p>
                  <p className="text-blue-400 font-semibold">47/100</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step by Step Guide */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-100 text-center mb-8">Langkah-Langkah Bergabung</h2>

            {/* Step 1 */}
            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    1
                  </div>
                  <div>
                    <CardTitle className="text-gray-100">Download Minecraft Bedrock Edition</CardTitle>
                    <CardDescription className="text-gray-400">
                      Pastikan kamu punya Minecraft Bedrock versi 1.20+
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-16">
                <p className="text-gray-300 mb-4">
                  Server Valmoris Dominion membutuhkan Minecraft Bedrock Edition versi 1.20+. Tersedia di Android, iOS,
                  Windows 10/11, Xbox, PlayStation, dan Nintendo Switch.
                </p>
                <a href="https://minecraft.net/get-minecraft" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-600 hover:bg-green-500 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Download Minecraft Bedrock
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    2
                  </div>
                  <div>
                    <CardTitle className="text-gray-100">Buka Minecraft & Pilih Multiplayer</CardTitle>
                    <CardDescription className="text-gray-400">Masuk ke menu multiplayer di Minecraft</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-16">
                <div className="space-y-3 text-gray-300">
                  <p>• Buka Minecraft Java Edition</p>
                  <p>• Klik tombol "Multiplayer"</p>
                  <p>• Klik "Add Server" atau "Direct Connect"</p>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    3
                  </div>
                  <div>
                    <CardTitle className="text-gray-100">Masukkan IP Server</CardTitle>
                    <CardDescription className="text-gray-400">Copy paste IP server Valmoris Dominion</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-16">
                <div className="space-y-4">
                  <p className="text-gray-300">Masukkan informasi server berikut:</p>
                  <div className="bg-slate-700 p-4 rounded-lg space-y-3">
                    <div>
                      <p className="text-gray-400 text-sm">Server Name (opsional):</p>
                      <p className="text-white font-mono">Valmoris Dominion</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Server Address:</p>
                      <div className="flex items-center gap-2">
                        <p className="text-yellow-400 font-mono text-lg">Valmoris.my.id</p>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            navigator.clipboard.writeText("Valmoris.my.id")
                            setCopied(true)
                            setTimeout(() => setCopied(false), 2000)
                          }}
                          className="h-6 w-6 p-0 hover:bg-slate-600 text-gray-300"
                        >
                          {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Port:</p>
                      <div className="flex items-center gap-2">
                        <p className="text-yellow-400 font-mono text-lg">19105</p>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            navigator.clipboard.writeText("19105")
                            setCopied(true)
                            setTimeout(() => setCopied(false), 2000)
                          }}
                          className="h-6 w-6 p-0 hover:bg-slate-600 text-gray-300"
                        >
                          {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    4
                  </div>
                  <div>
                    <CardTitle className="text-gray-100">Join Server & Mulai Bermain!</CardTitle>
                    <CardDescription className="text-gray-400">Selamat datang di Valmoris Dominion!</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-16">
                <div className="space-y-3 text-gray-300">
                  <p>• Klik "Done" untuk menyimpan server</p>
                  <p>• Double-click server Valmoris Dominion untuk join</p>
                  <p>• Tunggu loading dan mulai petualanganmu!</p>
                  <p className="text-yellow-400 font-semibold">🎉 Selamat datang di kerajaan Valmoris!</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Discord Section */}
          <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm mt-12">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <MessageSquare className="h-12 w-12 text-indigo-400" />
              </div>
              <CardTitle className="text-gray-100 text-2xl">Join Discord Community</CardTitle>
              <CardDescription className="text-gray-400">
                Bergabung dengan komunitas Discord untuk mendapatkan bantuan, update, dan berinteraksi dengan pemain
                lain
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <p className="text-gray-300">
                  Discord server kami memiliki 16+ member aktif yang siap membantu pemain baru!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://discord.gg/VvgeYUxXHp" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2">
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
                      Join Discord
                    </Button>
                  </a>
                  <Link href="/rules">
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-slate-800 px-6 py-2">
                      Baca Rules
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips Section */}
          <Card className="border-slate-600 bg-slate-800/80 backdrop-blur-sm mt-8">
            <CardHeader>
              <CardTitle className="text-gray-100 text-xl">💡 Tips untuk Pemain Baru</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div className="space-y-2">
                  <p>• Baca rules server sebelum bermain</p>
                  <p>• Join Discord untuk mendapat bantuan</p>
                  <p>• Mulai dengan quest tutorial</p>
                </div>
                <div className="space-y-2">
                  <p>• Jangan lupa backup item penting</p>
                  <p>• Bergabung dengan guild untuk bantuan</p>
                  <p>• Ikuti event untuk reward gratis</p>
                </div>
              </div>
            </CardContent>
          </Card>
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
