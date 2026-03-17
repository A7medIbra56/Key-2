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
                    src="https://maps.google.com/maps?q=UK&t=m&z=9&output=embed&iwloc=near"
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
