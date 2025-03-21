Ürün Yönetim Sistemi (React)

Bu proje, React kullanarak geliştirilen bir ürün yönetim sistemidir. Sistem, kullanıcıların giriş yaparak ürünleri ekleyebileceği, düzenleyebileceği ve silebileceği bir platform sunar. Ayrıca giriş için kullanıcı adı ve şifre gereklidir.

Kullanıcı Adı:admin
Şifre:1234

Projeyi Çalıştırmak İçin Adımlar
1. Gereksinimler

Projeyi çalıştırabilmek için bilgisayarınızda Node.js ve npm (Node Package Manager) yüklü olmalıdır. Node.js'i aşağıdaki bağlantıdan indirebilirsiniz:

  https://nodejs.org/

2. Projeyi İndirme ve Kurulum

Projeyi bilgisayarınıza klonlamak için terminal veya komut satırında aşağıdaki komutu kullanabilirsiniz:

!!!!!

Bu komut, projeyi yerel bilgisayarınıza indirecektir.

3. Bağımlılıkları Yükleme

Proje dosyasına gittiğinizde, gerekli tüm bağımlılıkları yüklemek için şu komutu çalıştırın:

npm install

Bu, proje içinde kullanılan kütüphanelerin yüklenmesini sağlar

4. Projeyi Çalıştırma

Proje çalıştırılmaya hazır olduktan sonra aşağıdaki komutu kullanarak geliştirme sunucusunu başlatabilirsiniz:

npm start

Bu komut, React uygulamanızı başlatacak ve web tarayıcınızda http://localhost:3000 adresinde çalışmaya başlayacaktır.


Kullanım

Projeyi başarıyla çalıştırdıktan sonra, aşağıdaki işlevleri kullanabilirsiniz:


Giriş Sayfası

  Kullanıcı Girişi: Kullanıcılar, "kullanıcı adı" ve "şifre" ile giriş yapabilirler.

  Geçerli kullanıcı adı ve şifre girilmezse, "Geçersiz kullanıcı adı veya şifre!" hatası görüntülenir.

  Başarılı bir giriş sonrası, ürün yönetim sayfasına yönlendirilirsiniz.

  Ürün Yönetimi

  Yeni Ürün Ekleme: Kullanıcılar, "Yeni Ürün Ekle" butonuna tıklayarak yeni bir ürün ekleyebilirler. Ürün adı ve fiyatı girildikten sonra, ürün listeye eklenir.

 Ürün Düzenleme: Var olan ürünleri düzenlemek için, ürünün yanında bulunan "Düzenle" butonuna tıklayabilirsiniz.

 Ürün Silme: Silmek istediğiniz ürünü seçip "Sil" butonuna tıkladığınızda, silme işlemini onaylayan bir pop-up (onay penceresi) açılır. Onay verdiğinizde ürün silinir.

 Teknolojiler

Bu projede kullanılan teknolojiler şunlardır:

    React: Kullanıcı arayüzünü oluşturmak için kullanılmıştır.

    CSS: Projeye stil eklemek için kullanılmıştır.

    React Modal: Ürün ekleme ve düzenleme işlemleri için modal pencereleri yönetmek amacıyla kullanılmıştır.
    
    React State Management: Ürünlerin ve kullanıcı durumlarının yönetilmesi için React’in yerleşik durum yönetimi kullanılmıştır.