import React from 'react';

interface Props {
  text: string;
  keywords: string[];
}

const KeywordHighlighter: React.FC<Props> = ({ text, keywords }) => {
  if (!keywords || keywords.length === 0) return <span>{text}</span>;

  // Escape special regex characters in keywords
  const escapedKeywords = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  
  // Create a regex that matches any of the keywords, case insensitive
  const regex = new RegExp(`(${escapedKeywords.join('|')})`, 'gi');

  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) => {
        const isMatch = keywords.some(k => k.toLowerCase() === part.toLowerCase());
        return isMatch ? (
          <span key={i} className="font-bold text-indigo-700 bg-indigo-50 px-1 rounded mx-0.5">
            {part}
          </span>
        ) : (
          part
        );
      })}
    </span>
  );
};

export default KeywordHighlighter;