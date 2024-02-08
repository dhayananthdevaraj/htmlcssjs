const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    try{
      await page.goto('https://8081-abfdabeabcbaedbfedabcebcbdedcbbadbfd.premiumproject.examly.io');
      await page.setViewport({
        width:1200,
        height:1200,
      })
      await page.waitForSelector('h1' , {timeout : 2000});
      
      const result1 = await page.evaluate(()=>{
        let heading = document.querySelector(".container h1");
        return heading.innerHTML;
      })
      console.log('TESTCASE:verify_h1_element:success');
    }
    catch(e){
      console.log('TESTCASE:verify_h1_element:failure');
    }

    const page1 = await browser.newPage();
    try {
      await page1.goto('https://8081-abfdabeabcbaedbfedabcebcbdedcbbadbfd.premiumproject.examly.io');
      await page1.setViewport({
        width: 1200,
        height: 800,
      });

      // Wait for the p tag to appear
      await page1.waitForSelector('p', { timeout: 2000 });

      const result1 = await page1.evaluate(() => {
        let pElement = document.querySelector('p#totalCost');
        return pElement !== null;
      });

      if (result1) {
        console.log('TESTCASE:verify_paragraph_tag_id:success');
      } else {
        console.log('TESTCASE:verify_paragraph_tag_id:failure');
      }
    } catch (e) {
      console.log('TESTCASE:verify_paragraph_tag_id:failure');
    }
    
  const page3 = await browser.newPage();
  try{
    await page3.goto('https://8081-abfdabeabcbaedbfedabcebcbdedcbbadbfd.premiumproject.examly.io');
    await page3.setViewport({
      width:1200,
      height:800,
    })
    await page3.waitForSelector('input', {timeout : 2000});

    console.log('TESTCASE:verify_input_element:success');
  }
  catch(e){
    console.log('TESTCASE:verify_input_element:failure');
  }

  const page4 = await browser.newPage();
  try{
    await page4.goto('https://8081-abfdabeabcbaedbfedabcebcbdedcbbadbfd.premiumproject.examly.io');
    await page4.setViewport({
      width:1200,
      height:800,
    })
    await page4.waitForSelector('button', {timeout : 2000});
    console.log('TESTCASE:verify_button_element:success');
  }
  catch(e){
    console.log('TESTCASE:verify_button_element:failure');
  }

  const page5 = await browser.newPage();

  try {
    await page5.goto('https://8081-abfdabeabcbaedbfedabcebcbdedcbbadbfd.premiumproject.examly.io'); // Replace with the actual URL of your HTML page
    await page5.setViewport({
      width: 1200,
      height: 800,
    });

    // Check if the script.js file is loaded
    const isScriptLoaded = await page5.evaluate(() => {
      const scriptTags = Array.from(document.querySelectorAll('script'));
      return scriptTags.some((script) => script.src.includes('app.js'));
    });

    if (isScriptLoaded) {
      console.log('TESTCASE:app_js_is_correctly_used_in_index_html:success');
    } else {
      console.log('TESTCASE:app_js_is_correctly_used_in_index_html:failure');
    }
  } catch (e) {
    console.log('TESTCASE:app_js_is_correctly_used_in_index_html:failure');
  }

  const page6 = await browser.newPage();
  // Test case for adding an expense and checking if title and amount are displayed
  try {
    await page6.goto('https://8081-abfdabeabcbaedbfedabcebcbdedcbbadbfd.premiumproject.examly.io'); // Replace with the actual URL of your HTML page
    await page6.setViewport({
      width: 1200,
      height: 800,
    });

    // Wait for the input fields to appear
    await page6.waitForSelector('#ingredientName', {timeout: 2000});
    await page6.waitForSelector('#ingredientCost', {timeout: 2000});

    // Type in the expense description and amount
    await page6.type('#ingredientName', 'Test ingredient');
    await page6.type('#ingredientCost', '100');

    // Click the "Add Expense" button
    await page6.click('button');

    // Wait for the expense to be added to the table
    await page6.waitForSelector('#ingredientTableBody tr', {timeout: 2000});

    // Check if the added expense's description and amount match the expected values
    const addedingredientName = await page6.$eval('#ingredientTableBody', el => el.textContent.trim());
    const addedingredientCost = await page6.$eval('#ingredientTableBody', el => el.textContent.trim());
  
    if (addedingredientName.includes('Test ingredient') && addedingredientCost.includes('100')) {
      console.log('TESTCASE:add_ingredient_and_display_check:success');
    } else {
      console.log('TESTCASE:add_ingredient_and_display_check:failure');
    }
  } catch (error) {
    console.log(error);
    console.log('TESTCASE:add_ingredient_and_display_check:failure');
  }


  const page8 = await browser.newPage();
  try {
    await page8.goto('https://8081-abfdabeabcbaedbfedabcebcbdedcbbadbfd.premiumproject.examly.io');
    const buttonColor = await page.evaluate(() => window.getComputedStyle(document.querySelector('button')).backgroundColor);
    if (buttonColor === 'rgb(76, 175, 80)') {
      console.log('TESTCASE:validate_button_background_color:success');
    } else {
      console.log('TESTCASE:validate_button_background_color:failure');
    }
  } catch (error) {
    console.log('TESTCASE:validate_button_background_color:failure');
  } 

  const page9 = await browser.newPage();
    try{
      await page9.goto('https://8081-abfdabeabcbaedbfedabcebcbdedcbbadbfd.premiumproject.examly.io');
      await page9.setViewport({
        width:1200,
        height:800,
      })
 
      await page9.waitForSelector('button',{timeout : 2000});
      const onclickValue = await page9.$eval('button', el => el.getAttribute('onclick'));
     
      if(onclickValue == "addIngredient()"){
        console.log('TESTCASE:button_tag_has_correct_onclick:success');
      }
      else{
        console.log('TESTCASE:button_tag_has_correct_onclick:failure');
      }
    }catch(e){
      console.log('TESTCASE:button_tag_has_correct_onclick:failure');
    }

    const page10 = await browser.newPage();
    try {
      await page10.goto('https://8081-abfdabeabcbaedbfedabcebcbdedcbbadbfd.premiumproject.examly.io');
      await page10.setViewport({
        width:1200,
        height:800,
      })
      const h1Color = await page10.evaluate(() => window.getComputedStyle(document.querySelector('h1')).color);
      if (h1Color === 'rgb(51, 51, 51)') {
        console.log('TESTCASE:validate_h1_color:success');
      } else {
        console.log('TESTCASE:validate_h1_color:failure');
      }
    } catch (error) {
      console.log('TESTCASE:validate_h1_color:failure');
    } 

    const page11 = await browser.newPage();
    try {
      await page11.goto('https://8081-abfdabeabcbaedbfedabcebcbdedcbbadbfd.premiumproject.examly.io');
      await page11.setViewport({
        width:1200,
        height:800,
      })
      const buttonTextColor = await page11.evaluate(() =>  window.getComputedStyle(document.querySelector('button')).color);

      if (buttonTextColor === 'rgb(255, 255, 255)') {
        console.log('TESTCASE:validate_button_text_color:success');
      } else {
        console.log('TESTCASE:validate_button_text_color:failure');
      }
    } catch (error) {
      console.log('TESTCASE:validate_button_text_color:failure');
    } 


  finally{
    await page.close();
    await page1.close();
    await page3.close();
    await page4.close();
    await page5.close();
    await page6.close();
    await page8.close();
    await page9.close();
    await page10.close();
    await page11.close();
    await browser.close();
  }
  
})();




