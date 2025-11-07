import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[60vh]">
      <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-sm max-w-lg mx-auto text-center">
        <div className="mb-8">
          <h1 className="font-inter-tight text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            404
          </h1>
          <h2 className="font-inter-tight text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Page non trouvée
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 text-balance">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
          >
            Retourner à l&apos;accueil
          </Link>
          <Link 
            href="/blog" 
            className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-xl font-medium transition-all duration-300 ease-in-out border border-gray-200 dark:border-gray-600"
          >
            Voir tous les articles
          </Link>
        </div>
      </div>
    </section>
  )
} 