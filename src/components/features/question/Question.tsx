import { IqTestQuestion } from '@src/lib/__generated/sdk';

interface QuestionProps {
  question: IqTestQuestion;
}

const getP = (info, key) =>
  info?.json?.content.map((item, index) => (
    <p key={index + key}>{item.content.map(i => i.value)}</p>
  ));

export const Question = ({ question }: QuestionProps) => {
  const title = question?.title;
  const explanation = getP(question?.explanation, 'explanation');
  const questionText = getP(question?.question, 'question');
  const correctAnswer = question?.correctAnswer;

  return (
    <>
      <div key={title} className="hover:bg-gray-50 group relative flex gap-x-6 rounded-lg p-4">
        <div className="bg-gray-50 group-hover:bg-white mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg">
          {/*https://icons.getbootstrap.com/icons/patch-question/*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            className="bi bi-patch-question"
            viewBox="0 0 16 16"
          >
            <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
            <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
          </svg>
        </div>
        <div>
          <span className="text-gray-900 font-semibold">
            {title}
            <span className="absolute inset-0" />
          </span>
          <p className="text-gray-600 mt-1">{questionText}</p>
        </div>
      </div>
      {correctAnswer && explanation && (
        <div key={title} className="hover:bg-gray-50 group relative flex gap-x-6 rounded-lg p-4">
          <div className="bg-gray-50 group-hover:bg-white mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg">
            {/*https://icons.getbootstrap.com/icons/patch-check/*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              className="bi bi-patch-check"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
          </div>
          <div>
            <span className="text-gray-900 font-semibold">
              Correct Answer
              <span className="absolute inset-0" />
            </span>
            <p className="text-gray-600 mt-1">
              {correctAnswer && <p>{correctAnswer}</p>}
              {explanation && <p>{explanation}</p>}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
