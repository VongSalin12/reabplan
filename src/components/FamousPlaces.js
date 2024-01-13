import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/Province.css';
import Header from './Header';
import Footer from './Footer';

function FamousPlaces() {
  
  return (
    <div>
        <Header />
        <div className="container mt-5">
        <h2 className="text-center text-dark mb-4 svg-shadow shadow-success shadow-intensity-lg custom-shadow font-weight-bold text-uppercase">
          Province Management
        </h2>
        <Footer />
        </div>
    </div>
  );
}

export default FamousPlaces;
