import {useEffect, useRef, useState} from 'react';
import CompanyItem from '../_components/company';
import Modal from 'react-modal';
import Image from 'next/image';

Modal.setAppElement('.modalInitiativeContainer');

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

export default function Initiative() {
  const leftSlideRef = useRef(null);
  const rightSlideRef = useRef(null);
  const [leftSlideWidth, setLeftSlideWidth] = useState('100%');
  const [rightSlideWidth, setRightSlideWidth] = useState('100%');
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [modalCurrentItem, setModalCurrentItem] = useState(null);

  useEffect(() => {
    const leftSlideElement = leftSlideRef.current;
    const rightSlideElement = rightSlideRef.current;

    if (leftSlideWidth === '100%') {
      let itemWidth = leftSlideElement.children[0].offsetWidth;
      setLeftSlideWidth(`${itemWidth * itemsCompany.length}px`);
    }
    if (rightSlideWidth === '100%') {
      let itemWidth = rightSlideElement.children[0].offsetWidth;
      setRightSlideWidth(`${itemWidth * itemsMine.length}px`);
    }
  });

  function onOpenModal(item) {
    if (item.description) {
      setModalIsOpen(true);
      setModalCurrentItem(item);
    }
  }

  let itemsCompany = [
    {
      id: 'item-1',
      label: '',
      description: '',
      image: '/initiative/dummy_1.png',
    },
    {
      id: 'item-2',
      label: '',
      description: '',
      image: '/initiative/dummy_2.png',
    },
    {
      id: 'item-3',
      label: '',
      description: '',
      image: '/initiative/dummy_3.png',
    },
    {
      id: 'item-4',
      label: '',
      description: '',
      image: '/initiative/dummy_4.png',
    },
    {
      id: 'item-5',
      label: '',
      description: '',
      image: '/initiative/dummy_5.png',
    },
  ];
  let itemsMine = [
    {
      id: 'item-1',
      label: 'ダミー1',
      description:
        'ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト',
      image: '/initiative/dummy_1.png',
    },
    {
      id: 'item-2',
      label: 'ダミー2',
      description: 'ダミーテキストダミーテキストダミーテキスト',
      image: '/initiative/dummy_2.png',
    },
    {
      id: 'item-3',
      label: 'ダミー3',
      description:
        'ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト',
      image: '/initiative/dummy_3.png',
    },
    {
      id: 'item-4',
      label: 'ダミー4',
      description: 'ダミーテキストダミーテキスト',
      image: '/initiative/dummy_4.png',
    },
    {
      id: 'item-5',
      label: 'ダミー5',
      description:
        'ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト',
      image: '/initiative/dummy_5.png',
    },
    {
      id: 'item-1',
      label: 'ダミー1',
      description:
        'ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト',
      image: '/initiative/dummy_1.png',
    },
    {
      id: 'item-2',
      label: 'ダミー2',
      description: 'ダミーテキストダミーテキストダミーテキスト',
      image: '/initiative/dummy_2.png',
    },
    {
      id: 'item-3',
      label: 'ダミー3',
      description:
        'ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト',
      image: '/initiative/dummy_3.png',
    },
    {
      id: 'item-4',
      label: 'ダミー4',
      description: 'ダミーテキストダミーテキスト',
      image: '/initiative/dummy_4.png',
    },
    {
      id: 'item-5',
      label: 'ダミー5',
      description:
        'ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト',
      image: '/initiative/dummy_5.png',
    },
  ];

  return (
    <div className="modalInitiativeContainer relative w-full py-40">
      <div className="max-w-3xl mx-auto lg:max-w-7xl px-6 mb-8">
        <h2 className="text-4xl font-bold mb-4">取り組み紹介</h2>
        <p className="text-xl font-bold">INITIATIVE</p>
      </div>
      <div className="w-full overflow-hidden mb-6">
        <div
          className="initiative-slideshow-left flex"
          style={{width: leftSlideWidth}}
        >
          <div
            className="flex flex-grow flex-shrink"
            ref={leftSlideRef}
            style={{width: leftSlideWidth}}
          >
            {itemsCompany.map((item, i) => (
              <div
                key={`initiative-left-${i}`}
                onClick={() => onOpenModal(item)}
              >
                <CompanyItem item={item} />
              </div>
            ))}
          </div>
          <div
            className="flex flex-grow flex-shrink"
            style={{width: leftSlideWidth}}
          >
            {itemsCompany.map((item, i) => (
              <div
                key={`initiative-left-${i}`}
                onClick={() => onOpenModal(item)}
              >
                <CompanyItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden mb-6">
        <div
          className="initiative-slideshow-right flex"
          style={{width: rightSlideWidth}}
        >
          <div
            className="flex flex-grow flex-shrink"
            ref={rightSlideRef}
            style={{width: rightSlideWidth}}
          >
            {itemsMine.map((item, i) => (
              <div
                key={`initiative-right-${i}`}
                onClick={() => onOpenModal(item)}
              >
                <CompanyItem item={item} />
              </div>
            ))}
          </div>
          <div
            className="flex flex-grow flex-shrink w-full"
            style={{width: rightSlideWidth}}
          >
            {itemsMine.map((item, i) => (
              <div
                key={`initiative-right-${i}`}
                onClick={() => onOpenModal(item)}
              >
                <CompanyItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 雲 */}
      <div className="absolute inset-0 -z-20 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/cloud/5.png"
            alt="雲"
            className="cloud-animation-5 absolute top-4 right-2 lg:left-52 w-60"
            width={100}
            height={100}
          />
          <Image
            src="/cloud/4.png"
            alt="雲"
            className="cloud-animation-1 absolute bottom-12 left-1 lg:right-1  w-52"
            width={100}
            height={100}
          />
          <Image
            src="/cloud/1.png"
            alt="雲"
            className="cloud-animation-1 absolute -bottom-12 right-0  lg:right-52 w-40"
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
        <div className="relative flex flex-col justify-center h-full px-2 lg:flex-row lg:justify-start lg:p-20">
          <div className="flex flex-col lg:flex-row justify-center items-center p-4 border border-primary bg-white">
            <div className="flex justify-center flex-fix w-full lg:pr-10 mb-20 lg:mb-0 lg:w-6/12">
              <Image
                src={modalCurrentItem?.image}
                alt={modalCurrentItem?.label}
                className="w-full"
                width={100}
                height={100}
              />
            </div>
            <div>
              <div className="border-b border-primary border-dotted text-2xl font-bold pb-8 mb-8">
                {modalCurrentItem?.label}
              </div>
              <div>{modalCurrentItem?.description}</div>
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
