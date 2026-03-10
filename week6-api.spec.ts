import { test, expect } from '@playwright/test'

let access_Token: any
let instance_Url: any
let token_Type: any
let ID: any

test("SF Opportuntiy Case", async ({ request }) => {

    const tokenResponse = await request.post('https://login.salesforce.com/services/oauth2/token', {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        form: {
            "grant_type": "password",
            "username": "xxx",
            "password": "xxx",
            "client_id": "xxxx",
            "client_secret": "xxxx"
        }

    })

    const res = await tokenResponse.json()
    console.log(res)

    access_Token = res.access_token
    instance_Url = res.instance_url
    token_Type = res.token_type

    const createOppResponse = await request.post(`${instance_Url}/services/data/v59.0/sobjects/Opportunity`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token_Type} ${access_Token}`
        },
        data: {
            "StageName": "Prospecting",
            "CloseDate": "2025-03-15",
            "Name": "Deepak"
        }
    })
    const createOppRes = await createOppResponse.json()
    console.log(createOppRes)

    ID = createOppRes.id

    const getOppResponse = await request.get(`${instance_Url}/services/data/v59.0/sobjects/Opportunity/${ID}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token_Type} ${access_Token}`
        }
    })
    const getOppRes = await getOppResponse.json()
    console.log(getOppRes)

    const patchOppResponse = await request.patch(`${instance_Url}/services/data/v59.0/sobjects/Opportunity/${ID}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token_Type} ${access_Token}`
        },
        data: {
            "StageName": "New Customer",
            "CloseDate": "2025-03-15",
            "Name": "DJ"
        }
    })
    const patchOppRes = patchOppResponse.status()
    console.log(patchOppRes)
    expect(patchOppRes).toBe(204);

    const delOppResponse = await request.delete(`${instance_Url}/services/data/v59.0/sobjects/Opportunity/${ID}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token_Type} ${access_Token}`
        },
        data: {
            "StageName": "New Customer",
            "CloseDate": "2025-03-15",
            "Name": "DJ"
        }
    })

    const delOppRes = delOppResponse.status()
    console.log(delOppRes)
    expect(delOppRes).toBe(204);
})