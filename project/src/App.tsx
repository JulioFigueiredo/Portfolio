import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Database, Code2, Brain, LineChart, BookOpen, Target } from 'lucide-react';
import fotoPerfil from './img/Foto_Perfil.jpeg';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
        <img 
        src={fotoPerfil}
        alt="Julio Figueiredo"
        className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-blue-400 shadow-xl"
        />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Julio Figueiredo</h1>
        <h2 className="text-xl md:text-2xl text-blue-400 mb-8">Analista de Dados</h2>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/JulioFigueiredo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/júlio-figueiredo-1772932a6/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:julioo1.amorim@gmail.com" className="hover:text-blue-400">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
        <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-xl">
          <p className="text-lg leading-relaxed">
            Sou estudante de Análise e Desenvolvimento de Sistemas com foco em Análise de Dados. 
            Tenho experiência prática com Python, SQL, Power BI e Google Cloud Platform. 
            Desenvolvo projetos próprios de análise de dados aplicados a contextos reais como saúde, 
            esportes e indústria. Meu diferencial está na capacidade de transformar dados em insights 
            claros e valiosos para apoiar a tomada de decisões.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Habilidades Técnicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <Database className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Python</h3>
            <p>pandas, numpy, matplotlib, seaborn, scikit-learn</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <Code2 className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">SQL</h3>
            <p>BigQuery, PostgreSQL</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <LineChart className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Visualização</h3>
            <p>Power BI, Matplotlib, Seaborn</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <Brain className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Cloud</h3>
            <p>GCP, AWS</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <BookOpen className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Versionamento</h3>
            <p>Git, GitHub</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
        <h3 className="text-xl font-bold mb-4">Análise de Diabetes</h3>
        <p className="mb-4">Estudo exploratório e preditivo usando machine learning para prever a presença de diabetes com base em dados médicos.</p>
        <p className="text-blue-400 mb-4">Python, pandas, seaborn, scikit-learn</p>
        <a
          href="https://github.com/JulioFigueiredo/DataAnalyst/blob/main/Pima_Indians_Diabetes_Analysis/Pima_Indians_Diabetes.ipynb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Ver projeto
        </a>

        </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-4">Análise de Custos Médicos</h3>
            <p className="mb-4">Visualização interativa e análise estatística dos custos médicos de cada pessoa, gerando insights importantes.</p>
            <p className="text-blue-400">Python, Pandas, Matplotlib</p>
            <a
              href="https://github.com/JulioFigueiredo/DataAnalyst/blob/main/Medical_Costs_Analysis/Medical_Costs.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
              Ver projeto
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-4">Análise de Turnover</h3>
            <p className="mb-4">Análise univariada, bivariada e multivariada para prevenção de layoffs, redução de custos e melhoria da satisfação.</p>
            <p className="text-blue-400">Python, pandas, matplotlib</p>
            <a
              href="https://github.com/JulioFigueiredo/DataAnalyst/blob/main/IBM_HumanResources_Analysis/IBM_HR.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
              Ver projeto
            </a>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Diferenciais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex items-start gap-4">
            <Target className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Perfil Analítico</h3>
              <p>Capacidade de identificar padrões e extrair insights valiosos dos dados</p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex items-start gap-4">
            <Code2 className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Base Sólida</h3>
              <p>Forte lógica de programação e boas práticas de desenvolvimento</p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex items-start gap-4">
            <LineChart className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Visualização</h3>
              <p>Excelente comunicação de insights através de gráficos e dashboards</p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex items-start gap-4">
            <Brain className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Aprendizado Contínuo</h3>
              <p>Sempre me atualizando em visualização, machine learning e storytelling com dados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <div className="flex justify-center gap-6">
          <a href="https://github.com/JulioFigueiredo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400">
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/júlio-figueiredo-1772932a6/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400">
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a href="mailto:julioo1.amorim@gmail.com" className="flex items-center gap-2 hover:text-blue-400">
            <Mail className="w-5 h-5" />
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;