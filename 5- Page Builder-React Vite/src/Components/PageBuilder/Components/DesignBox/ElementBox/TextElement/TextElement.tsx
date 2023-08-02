import {useState, useMemo} from 'react';

type TextElementProps = {
  setting?: Record<string, any>;
};

const TextElement: React.FC<TextElementProps> = ({setting}) => {
  const [data1, setData1] = useState('center');
  const [data2, setData2] = useState('center');
  const align = setting?.divAlignment;
  useMemo(() => {
    if (align === 'Align-Right') {
      setData1('flex-start');
    }
    if (align === 'Align-Vertically') {
      setData1('center');
    }
    if (align === 'Align-Left') {
      setData1('flex-end');
    }
    if (align === 'Align') {
      setData2('flex-end');
    }
    if (align === 'Align-Horizontally') {
      setData2('center');
    }
    if (align === 'Align-Bottom') {
      setData2('flex-start');
    }
  }, [setting?.divAlignment]);
  return (
    <div
      style={{color: setting?.textColor, alignItems: data1, justifyContent: data2}}
      className="flex text-neutral-main text-[12px]"
    >
      <a href={setting?.textLink}>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
          هدف بهبود ابزارهای کاربردی می باشد.
        </p>
      </a>
    </div>
  );
};

export default TextElement;
