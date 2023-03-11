import React from "react"
import './FooterLinks.css'

const FooterLinks = () => {
    const toTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0, behavior: 'instant'
        });
    }
    const executeScroll = () => {
        //event.preventDefault();
        window.scrollTo({
            //top: shipping, behavior: 'instant'
        });
    }

        // ------UNDER CONSTRUCTION-----
    //   const getReturn = document.querySelector("return");
    //   const getReturnOffsetTop = getReturn.offsetTop;
    //     window.scrollTo({
    //         top: getReturnOffset, behavior: 'instant'
    //     });
    
    
    return (
        <div className="footerLinks">
            <div className="faq-box">
                <a href="#stage1" onClick={toTop} className="faq-small-box">Topp</a>
                <a href="#aboutUs" className="faq-small-box">Om oss</a>
                <a href="#forBusiness" className="faq-small-box">For bedrift</a>
                <a href="#shipping" className="faq-small-box">Frakt</a>
                <a href="#return" className="faq-small-box">Retur</a>
                <a href="#sizes" className="faq-small-box">Størrelser</a>
                <a href="#sizes" className="faq-small-box">Størrelser</a>
            </div>

            <div className="BoxContainer">
                <div className="TitleBox">
                <span><h1 className="aboutUs">Om oss</h1></span>
                    </div>
                <div className="TextBox">
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida interdum placerat. 
                            Nulla viverra iaculis mauris, eget commodo massa dictum viverra. Aliquam erat volutpat. 
                            Fusce sed magna ut quam sollicitudin sodales vel quis dolor. In maximus mi quis lorem gravida, 
                            quis dictum mi ultricies. 
                            <br/><br/>
                            Suspendisse ut velit nec orci ornare ultrices ut et tortor. 
                            Praesent a diam at ipsum facilisis aliquet. In fringilla luctus pulvinar. Donec purus dui, s
                            agittis ut vestibulum a, hendrerit Nunc suscipit ullamcorper elit, a blandit ex rhoncus sed. 
                            Ut sodales quis tortor et pulvinar. Nulla mi purus, dictum sit amet interdum id, volutpat id dui. 
                            Nulla facilisi. Pellentesque vitae nulla id metus accumsan finibus id id nisi. Pellentesque vulputate commodo ex ut facilisis.
                            Donec sit amet mollis magna. Nullpam molestie tortor vitae tortor sollicitudin molestie. Vivamus id nunc mauris. 
                            Phasellus ac orci nisl.
                            <br/><br/> 
                            Nulla accumsan fringilla mauris eget rhoncus. Nunc rhoncus tempor facilisis. 
                            Fusce eget urna tincidunt, bibendum arcu in, semper purus. 
                            Suspendisse posuere quam non gravida dignissim. Etiam et magna sit amet mauris rutrum pretium. 
                            Aenean rhoncus lectus vel metus
                            
                        </span>   
                </div>
                <div className="TitleBox">
                <span><h1 className="forBusinesses">For bedrift</h1></span>
                    </div>
                <div className="TextBox">
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida interdum placerat. 
                            Nulla viverra iaculis mauris, eget commodo massa dictum viverra. Aliquam erat volutpat. 
                            Fusce sed magna ut quam sollicitudin sodales vel quis dolor. In maximus mi quis lorem gravida, 
                            quis dictum mi ultricies. 
                            <br/><br/>
                            Suspendisse ut velit nec orci ornare ultrices ut et tortor. 
                            Praesent a diam at ipsum facilisis aliquet. In fringilla luctus pulvinar. Donec purus dui, s
                            agittis ut vestibulum a, hendrerit Nunc suscipit ullamcorper elit, a blandit ex rhoncus sed. 
                            Ut sodales quis tortor et pulvinar. Nulla mi purus, dictum sit amet interdum id, volutpat id dui. 
                            Nulla facilisi. Pellentesque vitae nulla id metus accumsan finibus id id nisi. Pellentesque vulputate commodo ex ut facilisis.
                            Donec sit amet mollis magna. Nullpam molestie tortor vitae tortor sollicitudin molestie. Vivamus id nunc mauris. 
                            Phasellus ac orci nisl.
                            <br/><br/> 
                            Nulla accumsan fringilla mauris eget rhoncus. Nunc rhoncus tempor facilisis. 
                            Fusce eget urna tincidunt, bibendum arcu in, semper purus. 
                            Suspendisse posuere quam non gravida dignissim. Etiam et magna sit amet mauris rutrum pretium. 
                            Aenean rhoncus lectus vel metus
                            
                        </span>   
                </div>
                <div className="TitleBox">
                <span><h1>Frakt</h1></span>
                    </div>
                <div className="TextBox">
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida interdum placerat. 
                            Nulla viverra iaculis mauris, eget commodo massa dictum viverra. Aliquam erat volutpat. 
                            Fusce sed magna ut quam sollicitudin sodales vel quis dolor. In maximus mi quis lorem gravida, 
                            quis dictum mi ultricies. 
                            <br/><br/>
                            Suspendisse ut velit nec orci ornare ultrices ut et tortor. 
                            Praesent a diam at ipsum facilisis aliquet. In fringilla luctus pulvinar. Donec purus dui, s
                            agittis ut vestibulum a, hendrerit Nunc suscipit ullamcorper elit, a blandit ex rhoncus sed. 
                            Ut sodales quis tortor et pulvinar. Nulla mi purus, dictum sit amet interdum id, volutpat id dui. 
                            Nulla facilisi. Pellentesque vitae nulla id metus accumsan finibus id id nisi. Pellentesque vulputate commodo ex ut facilisis.
                            Donec sit amet mollis magna. Nullpam molestie tortor vitae tortor sollicitudin molestie. Vivamus id nunc mauris. 
                            Phasellus ac orci nisl.
                            <br/><br/> 
                            Nulla accumsan fringilla mauris eget rhoncus. Nunc rhoncus tempor facilisis. 
                            Fusce eget urna tincidunt, bibendum arcu in, semper purus. 
                            Suspendisse posuere quam non gravida dignissim. Etiam et magna sit amet mauris rutrum pretium. 
                            Aenean rhoncus lectus vel metus
                            Nulla accumsan fringilla mauris eget rhoncus. Nunc rhoncus tempor facilisis. 
                            Fusce eget urna tincidunt, bibendum arcu in, semper purus. 
                            Suspendisse posuere quam non gravida dignissim. Etiam et magna sit amet mauris rutrum pretium. 
                            Aenean rhoncus lectus vel metus
                            Nulla accumsan fringilla mauris eget rhoncus. Nunc rhoncus tempor facilisis. 
                            Fusce eget urna tincidunt, bibendum arcu in, semper purus. 
                            Suspendisse posuere quam non gravida dignissim. Etiam et magna sit amet mauris rutrum pretium. 
                            Aenean rhoncus lectus vel metus
                            Nulla accumsan fringilla mauris eget rhoncus. Nunc rhoncus tempor facilisis. 
                            Fusce eget urna tincidunt, bibendum arcu in, semper purus. 
                            Suspendisse posuere quam non gravida dignissim. Etiam et magna sit amet mauris rutrum pretium. 
                            Aenean rhoncus lectus vel metus <br/><br/> 
                            Morbi luctus finibus vestibulum. Donec sit amet neque ut tellus euismod semper at vel eros.
                            Nam vel aliquam enim, ut malesuada nulla. Maecenas tempus consectetur <br/><br/>
                            Nulla accumsan fringilla mauris eget rhoncus. Nunc rhoncus tempor facilisis. 
                            Fusce eget urna tincidunt, bibendum arcu in, semper purus. 
                            Suspendisse posuere quam non gravida dignissim. Etiam et magna sit amet mauris rutrum pretium. 
                            Aenean rhoncus lectus vel metus
                            Nulla accumsan fringilla mauris eget rhoncus. Nunc rhoncus tempor facilisis. 
                            Fusce eget urna tincidunt, bibendum arcu in, semper purus. 
                            Suspendisse posuere quam non gravida dignissim. Etiam et magna sit amet mauris rutrum pretium. 
                            Aenean rhoncus lectus vel metus
                            
                        </span>   
                </div>
                <div className="TitleBox">
                <span><h1 className="return">Retur</h1></span>
                    </div>
                <   div className="TextBox">
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida interdum placerat. 
                            Nulla viverra iaculis mauris, eget commodo massa dictum viverra. Aliquam erat volutpat. 
                            Fusce sed magna ut quam sollicitudin sodales vel quis dolor. In maximus mi quis lorem gravida, 
                            quis dictum mi ultricies. 
                            <br/><br/>
                            Suspendisse ut velit nec orci ornare ultrices ut et tortor. 
                            Praesent a diam at ipsum facilisis aliquet. In fringilla luctus pulvinar. Donec purus dui, s
                            agittis ut vestibulum a, hendrerit Nunc suscipit ullamcorper elit, a blandit ex rhoncus sed. 
                            Ut sodales quis tortor et pulvinar. Nulla mi purus, dictum sit amet interdum id, volutpat id dui. 
                            Nulla facilisi. Pellentesque vitae nulla id metus accumsan finibus id id nisi. Pellentesque vulputate commodo ex ut facilisis.
                            Donec sit amet mollis magna. Nullpam molestie tortor vitae tortor sollicitudin molestie. Vivamus id nunc mauris. 
                            Phasellus ac orci nisl.
                            <br/><br/> 
                            Nulla accumsan fringilla mauris eget rhoncus. Nunc rhoncus tempor facilisis. 
                            Fusce eget urna tincidunt, bibendum arcu in, semper purus. 
                            Suspendisse posuere quam non gravida dignissim. Etiam et magna sit amet mauris rutrum pretium. 
                            Aenean rhoncus lectus vel metus
                            
                        </span>   
                </div>
                <div className="TitleBox">
                <span><h1 className="sizes">Størrelser</h1></span>
                    </div>
                <   div className="TextBox">
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida interdum placerat. 
                            Nulla viverra iaculis mauris, eget commodo massa dictum viverra. Aliquam erat volutpat. 
                            Fusce sed magna ut quam sollicitudin sodales vel quis dolor. In maximus mi quis lorem gravida, 
                            quis dictum mi ultricies. 
                            <br/><br/>
                            Suspendisse ut velit nec orci ornare ultrices ut et tortor. 
                            Praesent a diam at ipsum facilisis aliquet. In fringilla luctus pulvinar. Donec purus dui, s
                            agittis ut vestibulum a, hendrerit Nunc suscipit ullamcorper elit, a blandit ex rhoncus sed. 
                            Ut sodales quis tortor et pulvinar. Nulla mi purus, dictum sit amet interdum id, volutpat id dui. 
                            Nulla facilisi. Pellentesque vitae nulla id metus accumsan finibus id id nisi. Pellentesque vulputate commodo ex ut facilisis.
                            Donec sit amet mollis magna. Nullpam molestie tortor vitae tortor sollicitudin molestie. Vivamus id nunc mauris. 
                            Phasellus ac orci nisl.
                            <br/><br/> 
                            Nulla accumsan fringilla mauris eget rhoncus. Nunc rhoncus tempor facilisis. 
                            Fusce eget urna tincidunt, bibendum arcu in, semper purus. 
                            Suspendisse posuere quam non gravida dignissim. Etiam et magna sit amet mauris rutrum pretium. 
                            Aenean rhoncus lectus vel metus
                            
                        </span>   
                </div>
            </div>
            
        </div>

        

        
    
    )
    
}

export default FooterLinks