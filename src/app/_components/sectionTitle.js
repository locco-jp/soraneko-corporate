import {mochiy, notoSansJP} from '../_utils/font';

export default function SectionTitle({ja, en}) {
  return (
    <div>
      <h2
        className={`${notoSansJP.className} text-2xl lg:text-4xl font-bold mb-2 lg:mb-4`}
        dangerouslySetInnerHTML={{__html: ja}}
      ></h2>
      <p className="font-mundial text-md lg:text-xl font-bold">{en}</p>
    </div>
  );
}
