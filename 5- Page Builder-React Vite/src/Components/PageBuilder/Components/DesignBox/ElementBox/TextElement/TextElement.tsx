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
  const [txtSize, setTextSize] = useState('12px');
  const defaultText = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
  هدف بهبود ابزارهای کاربردی می باشد.`;

  useEffect(() => {
    setText(setting?.textElementText);
  }, [setting?.textElementText]);

  const func = setting?.textEditorFunction;
  useEffect(() => {
    console.log(func);
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

  const align1 = setting?.textVerticalDivAlignment;
  useEffect(() => {
    if (align1 === 'Align-Right') {
      setDivStyle1('flex-start');
    }
    if (align1 === 'Align-Vertically') {
      setDivStyle1('center');
    }
    if (align1 === 'Align-Left') {
      setDivStyle1('flex-end');
    }
  }, [setting?.textVerticalDivAlignment]);

  const align2 = setting?.textHorizontalDivAlignment;
  useEffect(() => {
    if (align2 === 'Align') {
      setDivStyle2('flex-end');
    }
    if (align2 === 'Align-Horizontally') {
      setDivStyle2('center');
    }
    if (align2 === 'Align-Bottom') {
      setDivStyle2('flex-start');
    }
  }, [setting?.textHorizontalDivAlignment]);

  const textSize = setting?.textSize;
  useEffect(() => {
    console.log(textSize);
    if (textSize === 'H1') {
      setTextSize('32px');
    } else if (textSize === 'H2') {
      setTextSize('24px');
    } else if (textSize === 'H3') {
      setTextSize('18.72px');
    } else if (textSize === 'H4') {
      setTextSize('16px');
    } else if (textSize === 'H5') {
      setTextSize('13.3px');
    } else if (textSize === 'H6') {
      setTextSize('10.7px');
    } else {
      setTextSize(textSize + 'px');
    }
  }, [setting?.textSize]);
  return (
    <div
      style={{
        color: setting?.textColor,
        alignItems: divStyle1,
        justifyContent: divStyle2,
        fontWeight: setting?.boldTextEditorFunction ? 'bold' : 'normal',
        fontStyle: setting?.italicTextEditorFunction ? 'italic' : 'normal',
        textDecoration: setting?.underlineTextEditorFunction ? 'underline' : 'none',
        textAlign: textStyle,
        fontSize: txtSize,
        lineHeight: setting?.lineHeight,
        padding: setting?.padding + 'px',
        wordSpacing: setting?.wordSpace + 'px',
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
