import React from 'react';

const MapSection = () => {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-1df8853c elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="1df8853c" data-element_type="section">
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1254d192" data-id="1254d192" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-60afba1f elementor-widget elementor-widget-google_maps" data-id="60afba1f" data-element_type="widget" data-widget_type="google_maps.default">
              <div className="elementor-widget-container">
                <div className="elementor-custom-embed">
                  <iframe 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    title="Google Map" 
                    aria-label="Google Map" 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.590820067666!2d55.4490816!3d25.3102799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5fbaf66a90f5%3A0x3620ddd6cdc69c14!2z2K7YqNix2KfYoSDYp9mE2YXZgdin2KrZititINmE2YbYs9iuINin2YTZhdmB2KfYqtmK2itL2LHZiiBFeHBlcnRzIEtleSBDb3B5aW5n!5e0!3m2!1sar!2seg!4v1742601019086!5m2!1sar!2seg"
                    style={{ width: '100%', height: '400px', border: 0 }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
