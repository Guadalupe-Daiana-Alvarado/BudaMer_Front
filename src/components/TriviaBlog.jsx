import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { DataContext } from '../components/Context/DataContext.jsx'; 


const chineseZodiacDescriptions = {
  Rata: "Los nacidos bajo el signo de la Rata son personas sabias a las que les gusta rodearse de familiares y amigos, a quienes ayudan en sus quehaceres y problemas diarios. Buenas trabajadoras, ahorradores y buenos administradores de su economía.",
  Buey: "Los búfalos o bueyes son animales pacientes y tranquilos, que irradian mucho cariño y amor e infunden respeto. Grandes trabajadores, se sienten a gusto rodeados del orden y la limpieza y logran el éxito gracias a su esfuerzo. Para ellos lo más importante es la familia, aunque son celosos con su pareja. Aman el arte y la música. No les gusta discutir, aunque sí que le obedezcan.",
  Tigre: "Las personas de este signo son muy pasionales y llenas de energía. No pasan desapercibidas, son aventureros, independientes, ingeniosos, impulsivos y les gusta la diversión. Son amigos para toda la vida, aunque les gusta ser el líder del grupo. En el mundo de las relaciones de pareja se muestran el más fuerte, sexy y seductor, aunque de comportamiento excesivo.",
  Conejo: "Los que nacen en el Año del Conejo reúnen extraordinarias cualidades humanas: son prudentes, inteligentes, afables, discretos, previsores, atentos y benevolentes. Por eso, el signo del conejo es ampliamente aceptado por la gente. De carácter moderado e indulgente, amante de la paz y la concordia, el conejo odia la guerra y la violencia. Le gusta la vida tranquila, la ternura y la armonía.",
  Dragón: "Símbolo del Emperador en China, el dragón es imaginativo, magnánimo, emprendedor, afortunado y poderoso. Está lleno de fuerza y vitalidad. Es un verdadero acumulador de energía y si le enojas, se enfurecerá de tal manera que perderá los estribos. Será difícil calmarle, pues no cree ni a nadie ni en nadie. Suelen dar buenos consejos y son afortunados tanto en el dinero como en el amor. Son muy sentimentales y se enamoran locamente.",
  Serpiente: "Las personas Serpientes son astutas, saben lo que quieren y cómo conseguirlo. Su conversación es elegante y fluida. Son intensos y prudentes a la vez. Son celosas y posesivas con su familia pero leales. Les gusta mimar a sus amigos y esperan de ellos una actitud recíproca. Si se sienten desdeñados o fracasan en sus tentativas, pueden estar enfadados durante horas, aunque son buenas para mantener la calma y parecer tranquilas en situaciones difíciles.",
  Caballo: "Populares, optimistas, llenos de alegría, aventureros, elocuentes, impacientes, emprendedores, entusiastas con la vida, grandes amantes y amigos. Su gran pasión es el dinero y los viajes. Les gusta conocer gente nueva, distintas culturas, hablar idiomas y son el alma de las fiestas. Su atractivo físico y su belleza hace que les sea fácil encontrar el amor: trampa en la que caen sin remedio.",
  Cabra: "La cabra es creativa, artística, positiva, elegante, femenina, afable, compasiva, llorona, sensible, soñadora, orgullosa y triste. No persiguen la riqueza material y prefieren vivir de sus ensoñaciones. Aman la familia, los niños, el hogar y estar en contacto con la naturaleza. Son muy trabajadoras, aunque no les gusta la presión ni de una fecha límite, ni de un jefe.",
  Mono: "Animal más parecido al ser humano, es ingenioso, divertido, simpático, de mente rápida y despierta, comprador, persuasivo, sociable, capaces de resolver cualquier problema por difícil que sea con soltura. Sus relaciones amorosas y con los amigos suelen ser conflictivas, pues no soporta que no lo valoren. Gozan de buena salud, aunque sus excesos en las fiestas, alcohol y drogas podrían pasarle factura.",
  Gallo: "Atractivo y seductor, con talento y apreciado. Son meticulosos, eficientes, ordenados, buenos conversadores, observadores, egoístas, usureros, pragmáticos y muy familiares. En el amor son románticos, obstinados y luchan por el control de su pareja. Suelen destacar como relaciones públicas o como artistas. No prestan demasiada atención a su salud.",
  Perro: "El perro es un ser dedicado al trabajo, honesto, confiable, diligente, con un gran sentido de la justicia y la lealtad. Cautiva a todos con su personalidad excitante, su buen humor y su gran capacidad para escuchar los problemas de los demás y dar buenos consejos. En el amor son fieles y leales, aunque muy celoso cuando su pareja no está en casa. Los nervios son su mayor problema de salud.",
  Cerdo: "Es un animal sincero, honesto, confiado, educado, cariñoso, servicial, valiente, decidido, con gran fuerza de voluntad, sin grandes pretensiones ni vanidad, con los pies en la tierra. Son muy agradables y tienen gusto y modales impecables. En el amor son sensuales, apasionados y pacientes, pero hasta un punto. Son muy trabajadores, aunque la falta de atracción por el deporte y la apatía harán que su físico se resienta y engorde en exceso.",
};

const questions = [
  {
    question: '¿En qué mes del año naciste?',
    options: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
  },
  {
    question: '¿En qué rango anual?',
    options: ['1970', '1980', '1990', '2000'],
  },
  {
    question: '¿Eres mujer/hombre?',
    options: ['Mujer', 'Hombre'],
  },
];

function Trivia() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultProduct, setResultProduct] = useState(null);
  const { cart, setCart } = useContext(DataContext);
  const user = localStorage.getItem('user');
  const userObject = JSON.parse(user);
  const role = userObject ? userObject.role : null;
  const [chineseZodiacSign, setChineseZodiacSign] = useState(null);
  const [birthMonth, setBirthMonth] = useState(null);
  const [birthYear, setBirthYear] = useState(null);
  console.log(chineseZodiacSign)


  const productIDs = {
    Rata: '6555431cf9684b02824a987c',
    Buey: '65554320f9684b02824a98f1',
    Tigre: '6555431df9684b02824a9882',
    Conejo: '6555431ef9684b02824a98a9',
    Dragón: '6555431ef9684b02824a98ac',
    Serpiente: '6555431ff9684b02824a98c1',
    Caballo: '6555431ef9684b02824a98b5',
    Cabra: '6555431ff9684b02824a98ca',
    Mono: '65554320f9684b02824a98dc',
    Gallo: '65554320f9684b02824a98f4',
    Perro: '65554321f9684b02824a98fa',
    Cerdo: '65554320f9684b02824a98e2',
  };

  const getChineseZodiacSign = (month, year) => {
    if (month < 2) {
      year -= 1;
    }
  
    const chineseYearCycle = (year - 4) % 12;
    let chineseZodiac;
  
    switch (chineseYearCycle) {
      case 0:
        chineseZodiac = "Rata";
        break;
      case 1:
        chineseZodiac = "Buey";
        break;
      case 2:
        chineseZodiac = "Tigre";
        break;
      case 3:
        chineseZodiac = "Conejo";
        break;
      case 4:
        chineseZodiac = "Dragón";
        break;
      case 5:
        chineseZodiac = "Serpiente";
        break;
      case 6:
        chineseZodiac = "Caballo";
        break;
      case 7:
        chineseZodiac = "Cabra";
        break;
      case 8:
        chineseZodiac = "Mono";
        break;
      case 9:
        chineseZodiac = "Gallo";
        break;
      case 10:
        chineseZodiac = "Perro";
        break;
      case 11:
        chineseZodiac = "Cerdo";
        break;
      default:
        chineseZodiac = "Error";
    }
      console.log(chineseZodiac)

    setChineseZodiacSign(chineseZodiac);
    return chineseZodiac;
  };
  

  const handleNextQuestion = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers.push(answer);
    setUserAnswers(updatedAnswers);

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const monthIndex = questions[0].options.indexOf(userAnswers[0]);
      const month = monthIndex !== -1 ? monthIndex + 1 : 1;
      const year = parseInt(userAnswers[1]);

      setBirthMonth(month);
      setBirthYear(year);

      if (month && year) {
        getChineseZodiacSign(month, year);
        calculateResult();
        setShowResult(true);
      }
    }
  };

  
  const calculateResult = () => {
    
    
    const birthMonth = questions[0].options.indexOf(userAnswers[0]) + 1;
    const birthYear = parseInt(userAnswers[1]);
    const zodiacDescription = chineseZodiacDescriptions[chineseZodiacSign];
    const resultProductID = productIDs[chineseZodiacSign];
    
    axios
      .get(`http://localhost:8000/products/${resultProductID}`)
      .then((response) => {
        setResultProduct({
          product: response.data.product,
          description: zodiacDescription,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const buyProduct = (product) => {
    if (role === null) {
      Swal.fire({
        icon: 'error',
        title: 'No tiene permiso para comprar',
        text: '¿Desea iniciar sesión?',
        showCancelButton: true,
        confirmButtonText: 'Sí, iniciar sesión',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/login`);
        }
      });
    } else {
      setCart([...cart, product]);
      console.log(cart);
    }
  };
  const resetTrivia = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResult(false);
    setResultProduct(null);
    setChineseZodiacSign(null);
    setBirthMonth(null);
    setBirthYear(null);
  };
  
  console.log(resultProduct);

useEffect(() => {
  if (showResult) {
    // Puedes seguir usando birthMonth y birthYear aquí si es necesario
    const month = questions[0].options.indexOf(userAnswers[0]) + 1;
    const year = parseInt(userAnswers[1]);

    if (month && year) {
      setBirthMonth(month);
      setBirthYear(year);

      getChineseZodiacSign(month, year);
      calculateResult();
    }
  }
}, [showResult, userAnswers]);

  const question =
    currentQuestion < questions.length ? questions[currentQuestion] : null;

  let display;

  if (showResult) {
    display = (
      <div className="flex text-lg flex-col justify-center">
        <p className="text-lg pb-2 text-center font-semibold md:text-2xl ">
          ¡Gracias por completar la trivia! Aquí está tu resultado:
        </p>
        {resultProduct && (
          <div className="flex text-lg flex-wrap justify-center px-2 py-2 shadow-gray-950 shadow-md bg-pink-50 md:my-10 md:px-0 md:mx-52">
            <div className="w-1/2 lg:w-96 py-2">
              <img  src={resultProduct.product.photo} alt="product" className="mx-auto" />
            </div>
            <div className="w-full bg-pink-100 md:w-1/2 lg:w-full py-5 md:py-10 md:pl-10 md:px-5">
              <p className="text-lg font-semibold my-2 md:pb-5">Producto recomendado:</p>
              <div className="my-2">
                <strong>Nombre:</strong> {resultProduct.product.name}
              </div>
              <div className="my-2">
                <strong>Descripción:</strong> {resultProduct.product.description}
              </div>
              <div className="my-2">
                <strong>Signo del horóscopo chino:</strong> {chineseZodiacSign}
              </div>
              <div className="my-2">
                <strong>Descripción del signo:</strong> {resultProduct.description}
              </div>
              <button
                className="bg-sky-800 hover:bg-yellow-600 text-white text-lg font-bold h-8 w-20 rounded-2xl mt-2 flex items-center justify-center"
                onClick={() => buyProduct(resultProduct.product)}
              >
                Añadir
              </button>
            </div>
            <button
                className="bg-pink-500 hover:bg-yellow-600 text-white text-lg font-bold h-9 w-24 rounded-2xl mt-2 flex items-center justify-center"
                onClick={() => resetTrivia()}
              >
                Resetear
              </button>
          </div>
        )}
      </div>
    );
  } else {
    display = (
      <div className="flex flex-col items-center justify-center pb-5 md:flex-row ">
        <div className="w-2/3 mx-2 p-10 items-center shadow-gray-950 shadow-md bg-pink-100 rounded-lg md:w-2/4 mt-20 mb-24">
          <p className="text-xl text-center font-semibold md:text-2xl">Pregunta {currentQuestion + 1}:</p>
          {question && (
            <div>
              <p className="text-lg text-center my-2 md:text-xl">{question.question}</p>
              <div className="flex flex-col items-center justify-center gap-2 md:grid md:grid-cols-2">
                {question.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleNextQuestion(option)}
                    className="w-48 text-base bg-fuchsia-300 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded-full my-2 md:w-auto"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-green-300 bg-opacity-50">
      <div className='flex gap-1 text-base pl-6 py-2 items-center bg-green-400 bg-opacity-50'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
        </svg>
        <Link to="/">Inicio</Link>
        <Link to="/blog">/Blog</Link>
        <p className='font-semibold'>/Trivia</p>
      </div>

      <h1 className="text-3xl font-bold pb-2 text-center">Trivia</h1>
      {display}
      <div className='w-full 00 bg-green-200 bg-opacity-50 flex flex-col justify-center items-center'>
        <div>
          <h4 className='text-4xl font-semibold text-violet-900 bg-fuchsia-300 p-2 text-center items-center px-4 rounded-lg'>
            Formulario de opiniones / comentarios :
          </h4>
        </div>

        <form className="mt-8 p-3 w-full md:w-1/2 bg-fuchsia-300 rounded-xl m-3">
          <div className="mx-auto max-w-lg">
            <div className="py-1">
              <span className="px-1 text-sm text-gray-600">Nombre :</span>
              <input
                placeholder='Ej: Guadalupe'
                type="text"
                autoComplete="current-Title"
                className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
              />
            </div>
            <div className="py-1">
              <span className="px-1 text-sm text-gray-600">Redacción :</span>
              <textarea placeholder='Ej: Me gusto mucho el incienso de pino.' style={{ resize: 'none' }} className='w-100' name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="py-1">
              <span className="px-1 text-sm text-gray-600">Fecha :</span>
              <input
                placeholder='Ej: 22/12/2023'
                type="text"
                autoComplete="current-Date"
                className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
              />
            </div>
            <div className='flex justify-center '>
              <button
                className='w-48 text-lg bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded-full my-2 md:w-auto'
                type="submit">Enviar
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>


  );
}

export default Trivia;