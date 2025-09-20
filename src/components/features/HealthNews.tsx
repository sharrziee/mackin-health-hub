import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Filter,
  Clock,
  User,
  Eye,
  Heart,
  Share2,
  BookOpen,
  TrendingUp,
  Calendar,
  Star,
  MessageCircle
} from "lucide-react";

const HealthNews = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    { id: "general", name: "Kesehatan Umum", icon: "🏥", color: "bg-blue-100 text-blue-800" },
    { id: "nutrition", name: "Nutrisi", icon: "🥗", color: "bg-green-100 text-green-800" },
    { id: "exercise", name: "Olahraga", icon: "🏃", color: "bg-orange-100 text-orange-800" },
    { id: "mental", name: "Kesehatan Mental", icon: "🧠", color: "bg-purple-100 text-purple-800" },
    { id: "women", name: "Kesehatan Wanita", icon: "👩", color: "bg-pink-100 text-pink-800" },
    { id: "children", name: "Kesehatan Anak", icon: "👶", color: "bg-yellow-100 text-yellow-800" },
    { id: "elderly", name: "Lansia", icon: "👴", color: "bg-gray-100 text-gray-800" },
    { id: "prevention", name: "Pencegahan", icon: "🛡️", color: "bg-emerald-100 text-emerald-800" }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Update Terkini Dunia Kesehatan: Terobosan Baru dalam Pengobatan Kanker",
      slug: "terobosan-pengobatan-kanker-2024",
      summary: "Penelitian terbaru menunjukkan metode imunoterapi baru yang dapat meningkatkan tingkat kesembuhan pasien kanker hingga 70%.",
      content: `
        <div class="space-y-4">
          <p>Dunia kedokteran kembali mencatat terobosan penting dalam pengobatan kanker. Tim peneliti internasional telah mengembangkan metode imunoterapi revolusioner yang menunjukkan hasil menggembirakan dalam uji klinis fase III.</p>
          
          <h3 class="text-lg font-semibold">Bagaimana Cara Kerjanya?</h3>
          <p>Terapi ini bekerja dengan cara:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li>Mengaktifkan sistem imun tubuh secara spesifik</li>
            <li>Menargetkan sel kanker tanpa merusak sel sehat</li>
            <li>Meningkatkan kemampuan tubuh mengenali dan melawan kanker</li>
          </ul>
          
          <h3 class="text-lg font-semibold">Hasil Penelitian</h3>
          <p>Studi yang melibatkan 1,200 pasien dari berbagai negara menunjukkan:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li>Tingkat kesembuhan meningkat dari 45% menjadi 70%</li>
            <li>Efek samping minimal dibanding kemoterapi konvensional</li>
            <li>Kualitas hidup pasien tetap baik selama pengobatan</li>
          </ul>
          
          <h3 class="text-lg font-semibold">Kapan Tersedia?</h3>
          <p>Diperkirakan terapi ini akan tersedia untuk publik dalam 2-3 tahun ke depan setelah melewati semua tahap persetujuan regulatori.</p>
        </div>
      `,
      category: "general",
      author: {
        name: "Dr. Sarah Wijaya, Sp.PD-KHOM",
        role: "Oncologist",
        avatar: "/api/placeholder/50/50"
      },
      publishDate: "2024-12-20",
      readTime: "8 menit",
      views: 15420,
      likes: 892,
      comments: 156,
      image: "/api/placeholder/600/300",
      featured: true,
      tags: ["kanker", "imunoterapi", "penelitian", "terobosan"]
    },
    {
      id: 2,
      title: "Tips Menjaga Kesehatan di Musim Hujan: Panduan Lengkap untuk Keluarga",
      slug: "tips-kesehatan-musim-hujan",
      summary: "Musim hujan telah tiba! Simak tips lengkap untuk menjaga kesehatan keluarga dan mencegah penyakit yang sering muncul di musim ini.",
      content: `
        <div class="space-y-4">
          <p>Musim hujan membawa tantangan tersendiri bagi kesehatan. Kelembaban tinggi dan perubahan cuaca dapat meningkatkan risiko berbagai penyakit. Berikut panduan lengkap untuk menjaga kesehatan di musim hujan.</p>
          
          <h3 class="text-lg font-semibold">Penyakit yang Sering Muncul</h3>
          <ul class="list-disc pl-6 space-y-1">
            <li>Demam berdarah dengue (DBD)</li>
            <li>Diare dan gangguan pencernaan</li>
            <li>Influenza dan batuk pilek</li>
            <li>Infeksi kulit akibat jamur</li>
          </ul>
          
          <h3 class="text-lg font-semibold">Tips Pencegahan</h3>
          <ol class="list-decimal pl-6 space-y-2">
            <li><strong>Jaga Kebersihan Lingkungan</strong>
              <ul class="list-disc pl-6 mt-1">
                <li>Bersihkan genangan air secara rutin</li>
                <li>Pastikan drainase lancar</li>
                <li>Tutup wadah penampung air</li>
              </ul>
            </li>
            <li><strong>Konsumsi Makanan Bergizi</strong>
              <ul class="list-disc pl-6 mt-1">
                <li>Perbanyak buah dan sayuran</li>
                <li>Minum air putih yang cukup</li>
                <li>Hindari makanan yang tidak terjamin kebersihannya</li>
              </ul>
            </li>
          </ol>
        </div>
      `,
      category: "prevention",
      author: {
        name: "Dr. Ahmad Rizki, Sp.U",
        role: "Public Health Specialist",
        avatar: "/api/placeholder/50/50"
      },
      publishDate: "2024-12-19",
      readTime: "6 menit",
      views: 8920,
      likes: 445,
      comments: 78,
      image: "/api/placeholder/600/300",
      featured: false,
      tags: ["musim hujan", "pencegahan", "kesehatan keluarga", "tips"]
    },
    {
      id: 3,
      title: "Pentingnya Vaksinasi untuk Anak: Jadwal dan Manfaatnya",
      slug: "pentingnya-vaksinasi-anak",
      summary: "Vaksinasi adalah salah satu cara terbaik melindungi anak dari penyakit berbahaya. Pelajari jadwal vaksinasi dan manfaatnya.",
      content: `
        <div class="space-y-4">
          <p>Vaksinasi merupakan salah satu pencapaian terbesar dalam bidang kesehatan masyarakat. Program vaksinasi telah berhasil menyelamatkan jutaan nyawa di seluruh dunia.</p>
          
          <h3 class="text-lg font-semibold">Mengapa Vaksinasi Penting?</h3>
          <ul class="list-disc pl-6 space-y-1">
            <li>Melindungi anak dari penyakit berbahaya</li>
            <li>Mencegah penyebaran penyakit ke orang lain</li>
            <li>Menciptakan kekebalan komunitas (herd immunity)</li>
            <li>Menghemat biaya pengobatan di masa depan</li>
          </ul>
          
          <h3 class="text-lg font-semibold">Jadwal Vaksinasi Dasar</h3>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-medium mb-2">Usia 0-2 bulan:</h4>
            <ul class="list-disc pl-6 space-y-1">
              <li>Hepatitis B (HB0) - saat lahir</li>
              <li>BCG dan Polio 1 - usia 1 bulan</li>
              <li>DPT-HB-Hib 1 dan Polio 2 - usia 2 bulan</li>
            </ul>
          </div>
        </div>
      `,
      category: "children",
      author: {
        name: "Dr. Lisa Andriani, Sp.A",
        role: "Pediatrician",
        avatar: "/api/placeholder/50/50"
      },
      publishDate: "2024-12-18",
      readTime: "10 menit",
      views: 12300,
      likes: 678,
      comments: 94,
      image: "/api/placeholder/600/300",
      featured: true,
      tags: ["vaksinasi", "anak", "imunisasi", "pencegahan"]
    },
    {
      id: 4,
      title: "Cara Mengatasi Stress di Tempat Kerja: Strategi Praktis untuk Kesehatan Mental",
      slug: "mengatasi-stress-kerja",
      summary: "Stress di tempat kerja dapat berdampak serius pada kesehatan mental dan fisik. Pelajari strategi efektif untuk mengatasinya.",
      content: `
        <div class="space-y-4">
          <p>Stress di tempat kerja telah menjadi masalah yang semakin umum di era modern. WHO bahkan memasukkan burnout sebagai fenomena okupasional dalam klasifikasi penyakit internasional.</p>
          
          <h3 class="text-lg font-semibold">Tanda-tanda Stress Kerja</h3>
          <ul class="list-disc pl-6 space-y-1">
            <li>Kelelahan fisik dan mental</li>
            <li>Sulit berkonsentrasi</li>
            <li>Perubahan pola tidur</li>
            <li>Mudah marah atau irritable</li>
            <li>Menurunnya produktivitas</li>
          </ul>
          
          <h3 class="text-lg font-semibold">Strategi Mengatasi Stress</h3>
          <ol class="list-decimal pl-6 space-y-2">
            <li><strong>Manajemen Waktu yang Efektif</strong>
              <ul class="list-disc pl-6 mt-1">
                <li>Buat daftar prioritas harian</li>
                <li>Hindari multitasking berlebihan</li>
                <li>Sisihkan waktu untuk istirahat</li>
              </ul>
            </li>
            <li><strong>Teknik Relaksasi</strong>
              <ul class="list-disc pl-6 mt-1">
                <li>Latihan pernapasan dalam</li>
                <li>Meditasi mindfulness</li>
                <li>Progressive muscle relaxation</li>
              </ul>
            </li>
          </ol>
        </div>
      `,
      category: "mental",
      author: {
        name: "Dr. Maya Sari, Sp.KJ",
        role: "Psychiatrist",
        avatar: "/api/placeholder/50/50"
      },
      publishDate: "2024-12-17",
      readTime: "7 menit",
      views: 9850,
      likes: 523,
      comments: 112,
      image: "/api/placeholder/600/300",
      featured: false,
      tags: ["stress", "kesehatan mental", "tempat kerja", "wellness"]
    }
  ];

  const trendingTopics = [
    "Vaksin COVID-19 Booster",
    "Diet Mediterania",
    "Olahraga untuk Diabetes",
    "Kesehatan Mental Remaja",
    "Pencegahan Kanker Serviks"
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "" || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const ArticleDetail = ({ article }: { article: any }) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="healthcare" size="sm" className="w-full">
            <BookOpen className="h-4 w-4 mr-2" />
            Baca Selengkapnya
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-left">{article.title}</DialogTitle>
            <DialogDescription className="text-left">
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={article.author.avatar} alt={article.author.name} />
                    <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{article.author.name}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {article.publishDate}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
            
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            <div className="flex items-center justify-between pt-6 border-t">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  {article.likes}
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {article.comments}
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Bagikan
                </Button>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Eye className="h-4 w-4" />
                {article.views.toLocaleString()} views
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Berita Kesehatan</h1>
        <p className="text-muted-foreground">Informasi terkini seputar dunia kesehatan dan medical breakthrough</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari artikel kesehatan..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="sm:w-48">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Semua Kategori</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.icon} {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Featured Article */}
          {filteredArticles.some(article => article.featured) && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Artikel Unggulan</h2>
              {filteredArticles
                .filter(article => article.featured)
                .slice(0, 1)
                .map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className={categories.find(c => c.id === article.category)?.color}>
                            {categories.find(c => c.id === article.category)?.icon} {categories.find(c => c.id === article.category)?.name}
                          </Badge>
                          <Badge variant="outline">Featured</Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 line-clamp-2">{article.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">{article.summary}</p>
                        
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={article.author.avatar} alt={article.author.name} />
                              <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{article.author.name}</p>
                              <p className="text-xs text-muted-foreground">{article.author.role}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {article.views.toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="h-4 w-4" />
                              {article.likes}
                            </span>
                          </div>
                          <ArticleDetail article={article} />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          )}

          {/* Articles Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Semua Artikel</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    {article.featured && (
                      <Badge className="absolute top-2 left-2 bg-healthcare-primary">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={categories.find(c => c.id === article.category)?.color}>
                        {categories.find(c => c.id === article.category)?.icon} {categories.find(c => c.id === article.category)?.name}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{article.summary}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-2 mb-3">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={article.author.avatar} alt={article.author.name} />
                        <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-xs font-medium">{article.author.name}</p>
                        <p className="text-xs text-muted-foreground">{article.publishDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {article.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {article.likes}
                        </span>
                      </div>
                      <ArticleDetail article={article} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Categories */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Kategori</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "healthcare" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(selectedCategory === category.id ? "" : category.id)}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </div>
          </Card>

          {/* Trending Topics */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Trending Topics
            </h3>
            <div className="space-y-2">
              {trendingTopics.map((topic, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left"
                >
                  #{topic}
                </Button>
              ))}
            </div>
          </Card>

          {/* Newsletter */}
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Dapatkan artikel kesehatan terbaru langsung di email Anda
            </p>
            <div className="space-y-2">
              <Input placeholder="Email Anda" type="email" />
              <Button variant="healthcare" className="w-full">
                Berlangganan
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HealthNews;