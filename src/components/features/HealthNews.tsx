import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Search, 
  Calendar, 
  Eye, 
  Share2, 
  BookOpen, 
  Heart, 
  Activity,
  Users,
  Clock,
  Tag,
  TrendingUp,
  Shield,
  Zap,
  Droplets
} from "lucide-react";

const HealthNews = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    { id: "update", name: "Update Terkini", icon: TrendingUp },
    { id: "tips", name: "Tips Kesehatan", icon: Heart },
    { id: "vaksinasi", name: "Vaksinasi", icon: Shield },
    { id: "stress", name: "Kesehatan Mental", icon: Activity }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "Update Terkini Dunia Kesehatan",
      excerpt: "Perkembangan terbaru dalam teknologi medis dan penelitian kesehatan global tahun 2024",
      category: "update",
      image: "/api/placeholder/600/300",
      author: "Dr. Sarah Wijaya",
      date: "2024-01-15",
      readTime: "5 menit",
      views: 15420,
      content: "Teknologi AI dalam diagnosis medis mencapai akurasi 95%..."
    },
    {
      id: 2,
      title: "Tips Menjaga Kesehatan di Musim Hujan",
      excerpt: "Panduan lengkap untuk menjaga daya tahan tubuh dan mencegah penyakit selama musim penghujan",
      category: "tips",
      image: "/api/placeholder/600/300",
      author: "Dr. Ahmad Sudrajat",
      date: "2024-01-10",
      readTime: "7 menit",
      views: 12350,
      content: "Musim hujan membawa tantangan tersendiri bagi kesehatan..."
    }
  ];

  const filteredArticles = featuredArticles.filter(article => 
    (searchQuery === "" || article.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedCategory === "" || article.category === selectedCategory)
  );

  const ArticleDetail = ({ article }: { article: any }) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">
            Baca Selengkapnya
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{article.title}</DialogTitle>
            <DialogDescription className="flex items-center gap-4 text-sm">
              <span>Oleh {article.author}</span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(article.date).toLocaleDateString('id-ID')}
              </span>
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-lg" />
            <div className="prose prose-slate max-w-none">
              <p>{article.content}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Health News & Tips</h1>
        <p className="text-muted-foreground">Update terkini dunia kesehatan dan tips menjaga kesehatan</p>
      </div>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Cari artikel kesehatan..." className="pl-10" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <Tag className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Pilih Kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Semua Kategori</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        {filteredArticles.map((article) => (
          <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-80 h-48 md:h-auto">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center"><Users className="h-4 w-4 mr-1" />{article.author}</span>
                  <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />{article.readTime}</span>
                  <span className="flex items-center"><Eye className="h-4 w-4 mr-1" />{article.views.toLocaleString()}</span>
                </div>
                <ArticleDetail article={article} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HealthNews;