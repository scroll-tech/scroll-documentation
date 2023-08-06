import React, { useState, useRef, useEffect } from 'react';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';

const transformer = new Transformer();

export default function MarkmapHooks({value, children}) {
  // Ref for SVG element
  const refSvg = useRef<SVGSVGElement>();
  // Ref for markmap object
  const refMm = useRef<Markmap>();
  // Ref for toolbar wrapper

  useEffect(() => {
    // Create markmap and save to refMm
    const mm = Markmap.create(refSvg.current);
    refMm.current = mm;
  }, [refSvg.current]);

  useEffect(() => {
    // Update data for markmap once value is changed
    const mm = refMm.current;
    if (!mm) return;
    const { root } = transformer.transform(children?.props?.value || value);
    mm.setData(root);
    mm.fit();
  }, [refMm.current, value]);


  return (
    <React.Fragment>
      <svg className="flex-1" ref={refSvg} />
    </React.Fragment>
  );
}
