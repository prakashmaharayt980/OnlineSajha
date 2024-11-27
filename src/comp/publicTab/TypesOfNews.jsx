import ArticleCard from "./ArticleCard";
import news1 from '../../assets/img/news1.jpg';

export default function TypesOfNews() {
  const articles = [
    {
      title: "लचिलो कूटनीतिको अनिवार्यता",
      author: "सीके लाल",
      content:
        "वाक्पटु व्यक्तिले बकबासलाई पनि घोचप, रोचक र आवश्यक बनाउँदै प्रस्तुत गर्न सक्छ।",
      image: news1,
      date:'2008/04/02'
    },
    {
      title: "निजामती कानुनबाट अपेक्षा",
      author: "कुबेर नेपाली",
      content:
        "ऐनको अभावमा स्थायी सरकार भनेका कर्मचारीतन्त्र नै अशक्त भएको छ।",
      image: news1,
      date:'2008/04/02'
    },
    {
      title: "हामी किन रुन्चो बन्दैछौं?",
      author: "अनाम लेखक",
      content: "निराशाको जालमा फसेको हाम्रो समाजलाई उठाउन समाधान खोजौं।",
      image: null, // No image for this article
    },
    {
      title: "लचिलो कूटनीतिको अनिवार्यता",
      author: "सीके लाल",
      content:
        "वाक्पटु व्यक्तिले बकबासलाई पनि घोचप, रोचक र आवश्यक बनाउँदै प्रस्तुत गर्न सक्छ।",
      image: news1,
      date:'2008/04/02'
    },
    {
      title: "निजामती कानुनबाट अपेक्षा",
      author: "कुबेर नेपाली",
      content:
        "ऐनको अभावमा स्थायी सरकार भनेका कर्मचारीतन्त्र नै अशक्त भएको छ।",
      image: news1,
    },
    {
      title: "हामी किन रुन्चो बन्दैछौं?",
      author: "अनाम लेखक",
      content: "निराशाको जालमा फसेको हाम्रो समाजलाई उठाउन समाधान खोजौं।",
      image: null, // No image for this article
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center md:text-left">
        विचार
      </h1>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            author={article.author}
            content={article.content}
            image={article.image}
            date={article.date}
          />
        ))}
      </div>
    </div>
  );
}
