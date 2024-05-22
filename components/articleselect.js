import Image from 'next/image';

const ArticleSelect = () => {
  return (
    <div className="bg-black p-4">
      <h2 className="text-white font-bold mb-4">Related articles</h2>
      <div className="flex justify-between">
        <div className="bg-white p-4 rounded-lg">
          <Image src="/office.jpg" alt="Office" width={200} height={150} />
          <h3 className="font-bold mt-2">Our first office</h3>
          <p className="text-gray-600">
            Over the past year, Volosoft has undergone many changes! After months of preparation.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Read in 2 minutes
          </a>
        </div>
        {/* Repeat for other articles */}
      </div>
    </div>
  );
};

export default ArticleSelect;