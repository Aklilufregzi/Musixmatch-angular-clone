describe('tests the functionality of tabs',()=>{

    before(()=>{
        cy.visit('/')
    })
    it("Should show the tab bar", ()=>{
        cy.get('#bar').should('be.visible')
    })

    it('should be at home page even when clicked on home tab button', ()=>{
        cy.get('ion-tab-button').should($b=>{
            $b[1].click()
        })
        cy.contains('Music')
    })

    it('can navigate between all segments', ()=>{
        cy.get('ion-segment-button').should($s=>{
            $s[3].click()
           
            
           
            
        })
       
    })
})