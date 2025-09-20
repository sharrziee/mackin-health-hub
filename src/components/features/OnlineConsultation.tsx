import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  MessageSquare,
  Video,
  Calendar,
  Star,
  Clock,
  User,
  Heart,
  Brain,
  Baby,
  Bone,
  Eye,
  Stethoscope,
  Filter,
  Search
} from "lucide-react";

const OnlineConsultation = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const specialties = [
    { id: "kardiologi", name: "Kardiologi", icon: Heart, color: "text-red-500" },
    { id: "neurologi", name: "Neurologi", icon: Brain, color: "text-purple-500" },
    { id: "anak", name: "Anak", icon: Baby, color: "text-pink-500" },
    { id: "ortopedi", name: "Ortopedi", icon: Bone, color: "text-blue-500" },
    { id: "mata", name: "Mata", icon: Eye, color: "text-green-500" },
    { id: "penyakit-dalam", name: "Penyakit Dalam", icon: Stethoscope, color: "text-indigo-500" }
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Wijaya, Sp.JP",
      specialty: "Kardiologi",
      hospital: "RS Brawijaya Malang",
      experience: "15 tahun",
      rating: 4.9,
      reviews: 1250,
      price: 200000,
      available: true,
      nextSlot: "14:30",
      education: "S3 Kardiologi Universitas Indonesia",
      languages: ["Indonesia", "English"],
      photo: "/api/placeholder/150/150"
    },
    {
      id: 2,
      name: "Dr. Ahmad Rizki, Sp.S",
      specialty: "Neurologi",
      hospital: "RSSA Malang",
      experience: "12 tahun",
      rating: 4.8,
      reviews: 980,
      price: 250000,
      available: true,
      nextSlot: "15:00",
      education: "S3 Neurologi Universitas Gadjah Mada",
      languages: ["Indonesia"],
      photo: "/api/placeholder/150/150"
    },
    {
      id: 3,
      name: "Dr. Lisa Andriani, Sp.A",
      specialty: "Anak",
      hospital: "RS Panti Waluya",
      experience: "10 tahun",
      rating: 4.9,
      reviews: 1450,
      price: 180000,
      available: false,
      nextSlot: "16:30",
      education: "S2 Pediatri Universitas Airlangga",
      languages: ["Indonesia", "English"],
      photo: "/api/placeholder/150/150"
    }
  ];

  const filteredDoctors = doctors.filter(doctor => 
    (selectedSpecialty === "" || doctor.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase())) &&
    (searchQuery === "" || doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const ConsultationBooking = ({ doctor }: { doctor: any }) => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [complaint, setComplaint] = useState("");
    const [consultationType, setConsultationType] = useState("chat");

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="healthcare" className="w-full">
            <MessageSquare className="h-4 w-4 mr-2" />
            Konsultasi Sekarang
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Booking Konsultasi</DialogTitle>
            <DialogDescription>
              Konsultasi dengan {doctor.name}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="consultation-type">Jenis Konsultasi</Label>
              <Select value={consultationType} onValueChange={setConsultationType}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih jenis konsultasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chat">Chat (Rp {doctor.price.toLocaleString()})</SelectItem>
                  <SelectItem value="video">Video Call (Rp {(doctor.price * 1.5).toLocaleString()})</SelectItem>
                  <SelectItem value="voice">Voice Call (Rp {(doctor.price * 1.2).toLocaleString()})</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="date">Tanggal Konsultasi</Label>
              <Input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <Label htmlFor="time">Waktu Konsultasi</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih waktu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">09:00</SelectItem>
                  <SelectItem value="10:00">10:00</SelectItem>
                  <SelectItem value="11:00">11:00</SelectItem>
                  <SelectItem value="14:00">14:00</SelectItem>
                  <SelectItem value="15:00">15:00</SelectItem>
                  <SelectItem value="16:00">16:00</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="complaint">Keluhan Utama</Label>
              <Textarea
                id="complaint"
                placeholder="Jelaskan keluhan Anda..."
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
                rows={3}
              />
            </div>
            <Button className="w-full" variant="healthcare">
              Konfirmasi Booking - Rp {(consultationType === "video" ? doctor.price * 1.5 : consultationType === "voice" ? doctor.price * 1.2 : doctor.price).toLocaleString()}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Konsultasi Online</h1>
        <p className="text-muted-foreground">Konsultasi dengan dokter spesialis terpercaya</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari dokter atau spesialis..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
          <SelectTrigger className="sm:w-48">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter Spesialis" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Semua Spesialis</SelectItem>
            {specialties.map((specialty) => (
              <SelectItem key={specialty.id} value={specialty.id}>
                {specialty.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Specialties */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Pilih Spesialis</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {specialties.map((specialty) => (
            <Card 
              key={specialty.id} 
              className={`p-4 cursor-pointer hover:shadow-md transition-all duration-300 ${
                selectedSpecialty === specialty.id ? 'ring-2 ring-healthcare-primary' : ''
              }`}
              onClick={() => setSelectedSpecialty(selectedSpecialty === specialty.id ? "" : specialty.id)}
            >
              <div className="text-center">
                <specialty.icon className={`h-8 w-8 mx-auto mb-2 ${specialty.color}`} />
                <p className="text-sm font-medium">{specialty.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Available Doctors */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Dokter Tersedia</h2>
          <Badge variant="secondary">
            {filteredDoctors.length} dokter ditemukan
          </Badge>
        </div>
        
        <div className="grid gap-6">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={doctor.photo} alt={doctor.name} />
                    <AvatarFallback className="bg-healthcare-primary text-white text-lg">
                      {doctor.name.split(' ')[1]?.charAt(0)}{doctor.name.split(' ')[2]?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{doctor.name}</h3>
                        {doctor.available ? (
                          <Badge className="bg-green-100 text-green-800">Online</Badge>
                        ) : (
                          <Badge variant="secondary">Offline</Badge>
                        )}
                      </div>
                      
                      <p className="text-healthcare-primary font-medium mb-1">{doctor.specialty}</p>
                      <p className="text-muted-foreground text-sm mb-2">{doctor.hospital}</p>
                      <p className="text-muted-foreground text-sm mb-3">{doctor.education}</p>
                      
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                          <span className="font-medium">{doctor.rating}</span>
                          <span className="text-muted-foreground text-sm ml-1">({doctor.reviews} ulasan)</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="h-4 w-4 mr-1" />
                          {doctor.experience} pengalaman
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {doctor.languages.map((lang, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                      
                      {doctor.available && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          Slot tersedia: {doctor.nextSlot}
                        </div>
                      )}
                    </div>
                    
                    <div className="lg:text-right">
                      <div className="mb-4">
                        <p className="text-2xl font-bold text-healthcare-primary">
                          Rp {doctor.price.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground">per konsultasi</p>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        {doctor.available ? (
                          <ConsultationBooking doctor={doctor} />
                        ) : (
                          <Button variant="secondary" disabled className="w-full">
                            <Calendar className="h-4 w-4 mr-2" />
                            Jadwalkan Nanti
                          </Button>
                        )}
                        <Button variant="outline" className="w-full">
                          <User className="h-4 w-4 mr-2" />
                          Lihat Profil
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineConsultation;