import {textDecoration} from '@chakra-ui/react';
import {useState, useMemo, useEffect} from 'react';

type TextElementProps = {
  setting?: Record<string, any>;
};

const TextElement: React.FC<TextElementProps> = ({setting}) => {
  const [text, setText] = useState('');
  const [divStyle1, setDivStyle1] = useState('center');
  const [divStyle2, setDivStyle2] = useState('center');
  const [textStyle, setTextStyle] = useState();
  const [bold, setBold] = useState();
  const [italic, setItalic] = useState();
  const [underline, setUnderline] = useState();

  const defaultText = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
  هدف بهبود ابزارهای کاربردی می باشد.`;

  useMemo(() => {
    setText(setting?.textElementText);
  }, [setting?.textElementText]);
  const func = setting?.textEditorFunction;
  useEffect(() => {
    console.log(func);
    if (func === 'bold') {
      bold ? setBold(false) : setBold(true);
    }
    if (func === 'underline') {
      underline ? setUnderline(false) : setUnderline(true);
    }
    if (func === 'italic') {
      italic ? setItalic(false) : setItalic(true);
    }
    if (func === 'align left') {
      setTextStyle('left');
    }
    if (func === 'align center') {
      setTextStyle('center');
    }
    if (func === 'align right') {
      setTextStyle('right');
    }
    if (func === 'justify center') {
      setTextStyle('justify');
    }
  }, [func]);
  const align = setting?.divAlignment;
  useMemo(() => {
    if (align === 'Align-Right') {
      setDivStyle1('flex-start');
    }
    if (align === 'Align-Vertically') {
      setDivStyle1('center');
    }
    if (align === 'Align-Left') {
      setDivStyle1('flex-end');
    }
    if (align === 'Align') {
      setDivStyle2('flex-end');
    }
    if (align === 'Align-Horizontally') {
      setDivStyle2('center');
    }
    if (align === 'Align-Bottom') {
      setDivStyle2('flex-start');
    }
  }, [setting?.divAlignment]);
  return (
    <div
      style={{
        color: setting?.textColor,
        alignItems: divStyle1,
        justifyContent: divStyle2,
        fontWeight: bold ? 'bold' : 'normal',
        fontStyle: italic ? 'italic' : 'normal',
        textDecoration: underline ? 'underline' : 'none',
        textAlign: textStyle,
      }}
      className="flex text-neutral-main text-[12px]"
    >
      <a href={setting?.textLink}>
        <p>{text ? text : defaultText}</p>
      </a>
    </div>
  );
};

export default TextElement;
