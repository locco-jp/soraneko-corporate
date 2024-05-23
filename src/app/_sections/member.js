import {useState} from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import {members} from '../_constants/member';

Modal.setAppElement('.modalContainer');

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

export default function Member() {
  let flatItems = members.sections.flat();

  function onOpenModal(i) {
    setModalIsOpen(true);
    setModalItemIndex(i);
  }

  const [isModalOpen, setModalIsOpen] = useState(false);
  const [modalItemIndex, setModalItemIndex] = useState(0);

  return (
    <div className="modalContainer relative w-full">
      <div className="absolute inset-0 h-full w-full -z-10 ">
        <Image
          src="/bg-member-sp.png"
          alt="メンバー背景"
          className="block w-full h-full lg:hidden"
          // style={{objectFit: 'contain'}}
          width="100"
          height="100"
        />
        <Image
          src="/bg-member-pc.png"
          alt="メンバー背景"
          className="w-full h-full hidden lg:block"
          // style={{objectFit: 'cover'}}
          width="1000"
          height="1000"
        />
      </div>
      <div className="w-full max-w-3xl mx-auto py-32 px-6 lg:max-w-7xl lg:py-48">
        {members.sections.map((section, i) => {
          let jc = i % 2 === 0 ? 'justify-end' : 'justify-start';
          let nmt = i % 2 === 0 ? '' : '-member-mt-10-pc-mt-0';
          return (
            <div
              key={`member-section-${i}`}
              className={`w-full flex ml-3 ${jc} ${nmt}`}
            >
              <div className={`flex justify-between w-full lg:w-78per ${jc}`}>
                {/* 各アイテム */}
                {section.map((item, index) => {
                  let mx = index % 2 === 0 ? 'mr-52' : 'ml-52';
                  let isShow =
                    index % 2 === 0 ? 'hidden' : 'member-block-pc-hidden';
                  return (
                    <div key={`member-${index}`}>
                      {/* sp 余白用 */}
                      <div className={`${isShow} h-32`}></div>
                      {/* アイテム */}
                      <div className="relative flex justify-center w-full cursor-pointer lg:w-4/5 pl-4">
                        <div
                          className={`w-full max-w-xs lg:max-w-none lg:px-0 lg:my-0 lg:${mx}`}
                          onClick={() => onOpenModal(item.sort_num)}
                        >
                          {/* テキスト */}
                          <div className="absolute -left-2 bottom-full flex justify-center items-center w-full origin-bottom-left rotate-90">
                            <span className="inline-block font-bold text-2xl lg:text-3xl text-white mr-1">
                              {item.shot_name}
                            </span>
                            <div className="w-6 h-6 lg:w-10 lg:h-10 -rotate-90">
                              <Image
                                src="button_arrow.svg"
                                alt="arrow"
                                width={100}
                                height={100}
                              />
                            </div>
                          </div>
                          {/* ねこ画像 */}
                          <Image
                            src={`/cat/default.png`}
                            alt="ねこ"
                            className="block w-full"
                            width={300}
                            height={300}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <Modal
          isOpen={isModalOpen}
          style={modalStyle}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <div className="relative flex flex-col justify-center h-full px-2 lg:flex-row lg:justify-start lg:p-32">
            <div className="w-full">
              <div className="lg:w-6/12">
                <div className="font-bold text-2xl">
                  {flatItems[modalItemIndex].name_ja}
                </div>
                <div className="font-bold text-sm mb-4">
                  {flatItems[modalItemIndex].name_en}
                </div>
                <div className="bg-white border border-primary border-dotted py-6 px-3 mb-4 flex flex-col items-center">
                  <div>
                    {flatItems[modalItemIndex].position && (
                      <div className="text-sm font-bold mb-4">
                        {flatItems[modalItemIndex].position}
                      </div>
                    )}
                    <div className="text-xs whitespace-pre-wrap leading-5 mb-4">
                      {flatItems[modalItemIndex].description}
                    </div>
                    <div
                      className="flex whitespace-pre-wrap"
                      style={{fontSize: '10px'}}
                    >
                      <div>※</div>
                      <div>{flatItems[modalItemIndex].sub_description}</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* sp ねこ画像 */}
              <div className="flex justify-center w-full">
                <Image
                  src={`/cat/${flatItems[modalItemIndex].color}.png`}
                  alt="ねこ"
                  className="block max-w-md w-full object-contain lg:hidden"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            {/* pc ねこ画像 */}
            <div className="absolute top-0 bottom-0 left-24 right-0 inset-0 hidden h-full w-full pointer-events-none lg:flex">
              <div className="flex justify-end">
                <Image
                  src={`/cat/${flatItems[modalItemIndex].color}.png`}
                  alt="ねこ"
                  className="block w-full object-contain lg:w-3/5"
                  width={100}
                  height={100}
                />
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
    </div>
  );
}
