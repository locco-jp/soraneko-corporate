import {useState} from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import {members} from '../_constants/member';
import {mochiy, notoSansJP} from '../_utils/font';

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

  const [isModalOpen, setModalIsOpen] = useState(false);
  const [modalItem, setModalItem] = useState({});

  function onOpenModal(item) {
    setModalIsOpen(true);
    setModalItem(item);
  }

  return (
    <div className="modalContainer relative w-full">
      <div className="absolute inset-0 h-full w-full -z-10 ">
        <Image
          src="/bg-member-sp.png"
          alt="メンバー背景"
          className="block w-full h-full lg:hidden"
          width="100"
          height="100"
        />
        <Image
          src="/bg-member-pc.png"
          alt="メンバー背景"
          className="w-full h-full hidden lg:block"
          width="1000"
          height="1000"
        />
      </div>
      {/* sp */}
      <div className="absolute top-32 right-6 lg:hidden">
        <div className="relative">
          <Image
            src="/bg-member_title.png"
            alt="メンバー"
            className="w-44"
            width={100}
            height={100}
          />
          <div className="absolute inset-0 h-full w-full flex justify-center items-center">
            <div>
              <div className="font-bold text-xl">メンバー</div>
              <div>MEMBER</div>
            </div>
          </div>
        </div>
      </div>
      {/* pc */}
      <div className="absolute right-32 bottom-60 hidden lg:block">
        <div className="relative">
          <Image
            src="/bg-member_title.png"
            alt="メンバー"
            className="w-52"
            width={100}
            height={100}
          />
          <div className="absolute inset-0 h-full w-full flex justify-center items-center">
            <div>
              <div className="font-bold text-xl">メンバー</div>
              <div>MEMBER</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-md mx-auto py-32 px-6 lg:max-w-7xl lg:py-48">
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
                      <div className="relative flex justify-center w-full cursor-pointer lg:w-4/5 pl-4 hover-trigger">
                        <div
                          className={`w-full max-w-xs lg:max-w-none lg:px-0 lg:my-0 lg:${mx}`}
                          onClick={() => onOpenModal(item)}
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
                          <div className="relative">
                            <Image
                              src={`/cat/default.png`}
                              alt="ねこ"
                              className="absolute inset-0 w-full h-full hover-opacity-0"
                              width={300}
                              height={300}
                            />
                            <Image
                              src={`/cat/wink.png`}
                              alt="ねこ"
                              className="w-full"
                              width={300}
                              height={300}
                            />
                          </div>
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
          <div className="relative flex flex-col justify-center items-center h-full px-2 lg:flex-row lg:justify-start lg:px-8 lg:py-4">
            <div className="flex flex-col justify-center lg:justify-end lg:flex-row w-full">
              <div className="w-full max-w-md mx-auto lg:mx-0 lg:w-6/12">
                <div className=" font-bold text-2xl">{modalItem.name_ja}</div>
                <div
                  className={`${notoSansJP.className} font-bold text-sm tracking-widest mb-4`}
                >
                  {modalItem.name_en}
                </div>
                <div
                  className={`${notoSansJP.className} bg-white border border-primary border-dotted py-6 px-3 mb-4 flex flex-col items-center`}
                >
                  <div>
                    {modalItem.position && (
                      <div className="text-sm font-bold mb-4">
                        {modalItem.position}
                      </div>
                    )}
                    <div className="text-xs whitespace-pre-wrap leading-5 mb-4">
                      {modalItem.description}
                    </div>
                    <div
                      className="flex whitespace-pre-wrap"
                      style={{fontSize: '10px'}}
                    >
                      <div>※</div>
                      <div>{modalItem.sub_description}</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ねこ画像 */}
              <div className="flex justify-center lg:justify-start w-full lg:w-6/12">
                <Image
                  src={`/cat/${modalItem.color}.png`}
                  alt="ねこ"
                  className="block w-full h-full max-w-md  object-contain lg:object-cover"
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
