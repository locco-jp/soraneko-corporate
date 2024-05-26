import Image from 'next/image';
import SectionTitle from '../_components/sectionTitle';
import {notoSansJP} from '../_utils/font';
import Modal from 'react-modal';
import {useState} from 'react';

Modal.setAppElement('.modalCompanyContainer');

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.20)',
  },
  content: {
    position: 'absolute',
    top: '6rem',
    left: '2rem',
    right: '2rem',
    bottom: '6rem',
    backgroundColor: '#fff',
    borderBottomLeftRadius: '1.5rem',
    backgroundImage: 'url("/bg-modal.png")',
    backgroundSize: 'contain',
  },
};

export default function Company() {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [modalItem, setModalItem] = useState({});

  let items = [
    {label: '会社名', text: '空とぶネコ合同会社'},
    {label: '設立', text: '2018年1月23日'},
    {label: '資本金', text: '1,500,000円'},
    {
      label: '事業内容',
      text: '（主に地域の）企業再生・事業開発のハンズオン支援、農業支援',
    },
    {label: '代表者', text: '金子 史人'},
    {
      label: 'スローガン',
      text: 'ひとつでも多くの地域の悩みを緩和・解決する / 生活者原理主義',
    },
    {label: '顧問弁護士', text: 'TMI総合法律法律事務所'},
    {label: '顧問税理士', text: '緒方健税理士事務所'},
    {label: '適格請求書事業者登録番号', text: 'T5290003007777'},
  ];

  let buttonItems = [
    {
      name: '東京本社',
      address:
        '東京都新宿区市ヶ谷田町一丁目4番地 武蔵野美術大学市ヶ谷キャンパス 7階',
      image: '/office/tokyo-honsha.png',
    },
    {
      name: '東京サポートデスク',
      address: '東京都港区虎ノ門一丁目23番2号 虎ノ門ヒルズレジデンス',
      image: '/office/tokyo-support.png',
    },
    {
      name: '沖縄・宮古島デスク',
      address: '沖縄県宮古島市平良字西里240番地2 琉球銀行宮古視点ビル 5階',
      image: '/office/miyako.png',
    },
    {
      name: '福岡デスク',
      address:
        '福岡県福岡足中央区大名二丁目6番53号 福岡大名ガーデンシティ テラス棟 2階',
      image: '/office/hukuoka.png',
    },
    {
      name: 'ハワイデスク',
      address: 'Hawaiki Tower, 88 Piikoi St, Honolulu, Hl 96814 United State',
      image: '/office/hawaii.png',
    },
  ];

  function onOpenModal(item) {
    setModalIsOpen(true);
    setModalItem(item);
  }

  return (
    <div className="modalCompanyContainer relative flex flex-col lg:flex-row w-full max-w-md mx-auto lg:max-w-7xl py-40 px-8">
      <div className="w-full lg:w-1/5 flex-grow flex-shrink mb-8 lg:mb-0">
        <SectionTitle ja="会社概要" en="COMPANY" />
      </div>
      <div className={`${notoSansJP.className} w-full lg:w-3/5`}>
        <div>
          {items.map((item, i) => {
            return (
              <div
                key={`company-${i}`}
                className="flex flex-col lg:flex-row border-b border-primary pb-4 mb-4"
              >
                <div className="font-bold mb-1 flex-fix lg:mb-0 lg:font-normal lg:w-60">
                  {item.label}
                </div>
                <div className="w-full whitespace-pre-wrap">{item.text}</div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="font-bold mb-6">オフィス</div>
          <div className="lg:flex lg:flex-wrap">
            {buttonItems.map((button, i) => {
              return (
                <div
                  key={`office-button-${i}`}
                  className="w-9/12 lg:w-4/12 lg:pr-4"
                >
                  <button
                    onClick={() => onOpenModal(button)}
                    className="btn-primary mb-4"
                  >
                    <p>{button.name}</p>
                    <Image
                      src="red_arrow.svg"
                      alt="red_arrow"
                      className="-rotate-45"
                      width="16"
                      height="15"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-1/5"></div>
      {/* 雲 */}
      <div className="absolute inset-0 -z-20 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/cloud/1.png"
            alt="雲"
            className="cloud-animation-5 absolute bottom-12 right-12 w-60"
            width={100}
            height={100}
          />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        style={modalStyle}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="flex items-center w-full h-full px-2 lg:px-8 lg:py-4">
          <div className="w-full">
            <div className="flex justify-center w-full mb-8">
              <Image
                src={modalItem.image}
                alt={modalItem.name}
                className="w-full max-w-2xl border border-primary"
                width={300}
                height={300}
              />
            </div>
            <div
              className={`${notoSansJP.className} flex flex-col lg:flex-row justify-center items-center`}
            >
              <div className="flex-fix font-bold text-3xl tracking-wider mr-2">
                {modalItem.name}
              </div>
              <div>{modalItem.address}</div>
            </div>
          </div>
          {/* sp close-button */}
          <div className="absolute -bottom-16 flex justify-center w-full lg:hidden">
            <button onClick={() => setModalIsOpen(false)}>
              <Image
                src="/close-modal.png"
                alt="close"
                width={80}
                height={80}
              />
            </button>
          </div>
          {/* pc close-button */}
          <div className="hidden absolute -top-12 -right-12 lg:block">
            <button onClick={() => setModalIsOpen(false)}>
              <Image
                src="/close-modal.png"
                alt="close"
                width={80}
                height={80}
              />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
