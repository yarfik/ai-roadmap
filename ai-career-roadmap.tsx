import React, { useState } from 'react';
import { Check, Circle, BookOpen, Code, Briefcase, Star } from 'lucide-react';

export default function AIRoadmap() {
  const [completed, setCompleted] = useState({});

  const toggleItem = (id) => {
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const phases = [
    {
      title: "Phase 1: Python & Fundamentals",
      duration: "1-2 months",
      color: "bg-blue-500",
      items: [
        { id: 1, name: "Master Python basics (data structures, OOP, file handling)", priority: "high" },
        { id: 2, name: "Learn NumPy & Pandas for data manipulation", priority: "high" },
        { id: 3, name: "Understand basic statistics & probability", priority: "medium" },
        { id: 4, name: "Practice with data visualization (Matplotlib, Seaborn)", priority: "medium" },
        { id: 5, name: "Mini project: Build a data analysis tool", priority: "high" }
      ]
    },
    {
      title: "Phase 2: Machine Learning Basics",
      duration: "2-3 months",
      color: "bg-purple-500",
      items: [
        { id: 6, name: "Learn scikit-learn library", priority: "high" },
        { id: 7, name: "Understand regression, classification, clustering", priority: "high" },
        { id: 8, name: "Study model evaluation & validation techniques", priority: "high" },
        { id: 9, name: "Learn feature engineering & selection", priority: "medium" },
        { id: 10, name: "Project: Build a prediction model (e.g., house prices, customer churn)", priority: "high" }
      ]
    },
    {
      title: "Phase 3: Deep Learning & Neural Networks",
      duration: "2-3 months",
      color: "bg-indigo-500",
      items: [
        { id: 11, name: "Learn TensorFlow or PyTorch (choose one)", priority: "high" },
        { id: 12, name: "Understand neural network architecture", priority: "high" },
        { id: 13, name: "Study CNNs (for image tasks) and RNNs/LSTMs (for sequences)", priority: "medium" },
        { id: 14, name: "Learn about transfer learning & pre-trained models", priority: "medium" },
        { id: 15, name: "Project: Image classification or text generation", priority: "high" }
      ]
    },
    {
      title: "Phase 4: Modern AI & LLMs",
      duration: "2-3 months",
      color: "bg-pink-500",
      items: [
        { id: 16, name: "Learn about transformers & attention mechanisms", priority: "high" },
        { id: 17, name: "Work with LLM APIs (OpenAI, Anthropic, open-source models)", priority: "high" },
        { id: 18, name: "Learn RAG (Retrieval-Augmented Generation)", priority: "high" },
        { id: 19, name: "Understand vector databases (Pinecone, Weaviate, ChromaDB)", priority: "medium" },
        { id: 20, name: "Study prompt engineering & fine-tuning", priority: "medium" },
        { id: 21, name: "Project: Build a chatbot or AI-powered application", priority: "high" }
      ]
    },
    {
      title: "Phase 5: MLOps & Production",
      duration: "1-2 months",
      color: "bg-green-500",
      items: [
        { id: 22, name: "Learn Docker for containerization", priority: "high" },
        { id: 23, name: "Understand model deployment (FastAPI, Flask)", priority: "high" },
        { id: 24, name: "Learn cloud platforms (AWS SageMaker or GCP AI Platform)", priority: "medium" },
        { id: 25, name: "Study model monitoring & versioning (MLflow, Weights & Biases)", priority: "medium" },
        { id: 26, name: "Project: Deploy a model as a web service", priority: "high" }
      ]
    },
    {
      title: "Phase 6: Portfolio & Job Ready",
      duration: "1-2 months",
      color: "bg-orange-500",
      items: [
        { id: 27, name: "Build 3-5 end-to-end AI projects for GitHub", priority: "high" },
        { id: 28, name: "Create technical blog posts explaining your projects", priority: "medium" },
        { id: 29, name: "Contribute to open-source AI projects", priority: "medium" },
        { id: 30, name: "Prepare for AI/ML interviews (LeetCode ML questions)", priority: "high" },
        { id: 31, name: "Network on LinkedIn, join AI communities", priority: "medium" },
        { id: 32, name: "Apply to AI roles (AI Engineer, ML Engineer, Data Scientist)", priority: "high" }
      ]
    }
  ];

  const totalItems = phases.reduce((sum, phase) => sum + phase.items.length, 0);
  const completedItems = Object.values(completed).filter(Boolean).length;
  const progressPercent = Math.round((completedItems / totalItems) * 100);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Your AI Career Roadmap</h1>
        <p className="text-gray-600 mb-4">From Mid-Level Developer to AI Engineer</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Overall Progress</span>
            <span>{completedItems} / {totalItems} ({progressPercent}%)</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-red-500" />
            <span className="text-gray-600">High Priority</span>
          </div>
          <div className="text-gray-600">Total Duration: ~10-15 months</div>
        </div>
      </div>

      {phases.map((phase, idx) => {
        const phaseCompleted = phase.items.filter(item => completed[item.id]).length;
        const phasePercent = Math.round((phaseCompleted / phase.items.length) * 100);
        
        return (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 mb-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">{phase.title}</h2>
                <p className="text-sm text-gray-500">{phase.duration}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">{phaseCompleted} / {phase.items.length}</div>
                <div className={`text-xs font-semibold ${phasePercent === 100 ? 'text-green-600' : 'text-gray-500'}`}>
                  {phasePercent}%
                </div>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className={`${phase.color} h-2 rounded-full transition-all duration-300`}
                style={{ width: `${phasePercent}%` }}
              />
            </div>

            <ul className="space-y-2">
              {phase.items.map(item => (
                <li 
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="mt-0.5">
                    {completed[item.id] ? (
                      <Check className="w-5 h-5 text-green-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-300" />
                    )}
                  </div>
                  <span className={`flex-1 ${completed[item.id] ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {item.name}
                    {item.priority === 'high' && (
                      <Star className="w-3 h-3 text-red-500 inline ml-2" />
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-3">🎯 Quick Tips for Success</h3>
        <ul className="space-y-2 text-sm">
          <li>• Your web dev background is valuable - many AI apps need web interfaces</li>
          <li>• Focus on building projects more than just tutorials</li>
          <li>• Join AI communities (r/MachineLearning, Hugging Face forums)</li>
          <li>• Consider Kaggle competitions for practice and portfolio</li>
          <li>• Your Golang experience will help with ML deployment/infrastructure</li>
        </ul>
      </div>
    </div>
  );
}