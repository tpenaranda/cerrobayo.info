import { useState } from 'react';
import clsx from 'clsx';
import { Mountains, InstagramLogo } from "phosphor-react";

const Footer = () => {
  const [ newsletterResponse, setNewsletterResponse ] = useState({ type: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()

    setNewsletterResponse({ type: 'info', message: 'Enviando...' })

    const res = await fetch('/api/ping')
    const response = await res.json()

    if (response.pong) {
      return setNewsletterResponse({ type: 'success', message: 'Esta función no está disponible todavía!' })
    }

    setNewsletterResponse({ type: 'error', message: 'Error!' })
  }

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <div to="/" className="inline-block" aria-label="Cruip">
                <Mountains size={32} />
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <div to="#" className="mb-2 cursor-pointer text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">El Cerro</div>
              <div to="#" className="mb-2 cursor-pointer text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Villa La Angostura</div>
            </div>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-5">
            <h6 className="text-gray-800 font-semibold mb-2">Info Bayo</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <div to="#" className="cursor-pointer text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Nosotros</div>
              </li>
              <li className="mb-2">
                <div to="#" className="cursor-pointer text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Misión</div>
              </li>
              <li className="mb-2">
                <div to="#" className="cursor-pointer text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Developers</div>
              </li>
              <li className="mb-2">
                <div to="#" className="cursor-pointer text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Colaborá</div>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-4">
            <h6 className="text-gray-800 font-semibold mb-2">Suscribite gratis!</h6>
            <p className="text-sm text-gray-600 mb-4">Dejanos tu correo y elegí cómo recibir novedades. Diario, Semanal, Mensual. También podés enterarte de novedades en tiempo real en nuestro canal de <a href="https://t.me/cerrobayo" target="_blank" className="hover:text-gray-900">Telegram</a>.</p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  { !newsletterResponse.message &&
                    <>
                      <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                      <div className="relative flex items-center max-w-xs">
                        <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Email" required />
                        <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                          <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                          <svg className="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                          </svg>
                        </button>
                      </div>
                    </>
                  }
                  { newsletterResponse.message && <p className={clsx('mt-2 text-sm', newsletterResponse.type === 'success' && 'text-green-600', newsletterResponse.type === 'error' && 'text-red-600')}>{newsletterResponse.message}</p> }
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="my-auto">
              <a href="https://www.instagram.com/sillabosque" target="_blank" className="cursor-pointer flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Silla Bosque Instagram">
                <InstagramLogo size={32} className="p-1" />
              </a>
            </li>
          </ul>
          <div className="text-sm text-gray-600 mr-4">❤ Con todo y con nada. JPR © 2022</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
