import React, { useState, useRef, useEffect } from 'react';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import TurndownService from 'turndown';



export default function MarkmapHooks({value, children}) {
  const turndownService = new TurndownService()
  const transformer = new Transformer();

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
    const  markdown = turndownService.turndown(children?.props?.value) || value
    const { root } = transformer.transform(markdown);
    mm.setData(root);
    mm.fit();
  }, [refMm.current, value]);


  return (
    <React.Fragment>
      <svg className="flex-1" ref={refSvg} />
    </React.Fragment>
  );
}
